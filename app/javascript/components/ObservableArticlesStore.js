import { observable, autorun } from "mobx";
import ArticleApi from "../services/ArticleApi";

class ObservableArticlesStore {
  @observable articles = [];

  constructor(tableStore) {
    this.article_types = {};
    this.stories = {};
    this.tableStore = tableStore;
    this.articleApi = new ArticleApi();

    autorun(() => {
      this.loadArticles();
    });
  }

  loadArticles() {
    $.ajax({
      url: `/api/v1/article`,
      type: 'GET',
      success: (data) => {
        this.article_types = data.data.article_types;
        this.stories = data.data.stories;

        this.articles = data.data.articles;
      }
    });
  }

  articleTypes() {
    return this.article_types;
  }

  getStories() {
    return this.stories;
  }

  addArticle(article) {
    this.articles.push(article);
  }

  newArticle() {
    this.articles.push({
      editing: true,
      story_id: this.defaultStory(),
      type_code: this.defaultArticleType()
    });
  }

  defaultArticleType() {
    return Object.keys(this.article_types)[0];
  }

  defaultStory() {
    return Object.keys(this.stories)[0];
  }

  editArticle(article) {
    article.editing = true;
  }

  createArticle(article, params) {
    $.ajax({
      url: `/api/v1/article`,
      type: 'POST',
      data: params,
      success: () =>  {
        this.loadArticles();
      }
    });
  };

  removeArticle(article) {
    this.articleApi.destroy(article.id);
  }

  updateArticle(articleId, params) {
    this.articleApi.update(articleId, params);
  };

  removeArticleFromStore(article_id){
    const article = this.findArticleById(article_id);
    this.articles.remove(article);
  }

  updateArticleInStore(updated_article) {
    const article = this.findArticleById(updated_article['id']);

    article['name'] = updated_article['name'];
    article['story'] = updated_article['story'];
    article['story_id'] = updated_article['story_id'];
    article['text'] = updated_article['text'];
    article['type'] = updated_article['type'];
    article['type_code'] = updated_article['type_code'];
    article['editing'] = false;
  }

  findArticleById = (id) => {
    return this.articles.find(function(article) {
      return article['id'] == id;
    });
  };

  sortTable(field, sort) {
    this.tableStore.sort_field = field;
    this.tableStore.sort_direction = sort;

    this.searchArticles();
  }

  groupTable(field) {
    this.tableStore.group_field = field;
    this.searchArticles();
  }

  searchArticles() {
    $.ajax({
      url: `/api/v1/article`,
      data: {
        "search_field": this.tableStore.search_field,
        "search": this.tableStore.search_value,
        "sort_field": this.tableStore.sort_field,
        "sort_direction": this.tableStore.sort_direction,
        "group_field": this.tableStore.group_field
      },
      type: 'GET',
      success: (data) => {
        this.articles = data.data.articles;
      }
    });
  }
}

export default ObservableArticlesStore;