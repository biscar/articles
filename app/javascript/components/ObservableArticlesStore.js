import { observable, autorun } from "mobx";
import ArticlesApi from "../services/ArticlesApi";

class ObservableArticlesStore {
  @observable articles = [];

  constructor(tableStore) {
    this.article_types = {};
    this.stories = {};
    this.tableStore = tableStore;
    this.articlesApi = new ArticlesApi();

    autorun(() => {
      this.loadArticles();
    });
  }

  loadArticles() {
    this.articlesApi.index({
      'search_field': this.tableStore.search_field,
      'search': this.tableStore.search_value,
      'sort_field': this.tableStore.sort_field,
      'sort_direction': this.tableStore.sort_direction,
      'group_field': this.tableStore.group_field})
      .then(response => {
        this.article_types = response.data.article_types;
        this.stories = response.data.stories;
        this.articles = response.data.articles;
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
    var newArticle = {
      editing: true,
      story_id: this.defaultStory(),
      type_code: this.defaultArticleType()
    };

    if (Array.isArray(this.articles)) {
      this.articles.push(newArticle);
    } {
      const groups = Object.keys(this.articles);
      const lastGroup = this.articles[groups[groups.length - 1]];
      lastGroup.push(newArticle);
    }
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
    this.articlesApi.create(params);
  };

  removeArticle(article) {
    this.articlesApi.destroy(article.id);
  }

  updateArticle(articleId, params) {
    this.articlesApi.update(articleId, params);
  };

  removeArticleFromStore(article_id){
    if (Array.isArray(this.articles)) {
      const article = this.findArticleById(article_id);
      this.articles.remove(article);
    } else {
      for (var articles of Object.values(this.articles)) {
        const article = this.findArticleByIdInArray(articles, article_id);
        if (article) articles.remove(article);
      }
    }
  }

  updateArticleInStore(updated_article) {
    const article = this.findArticleById(updated_article['id']);
    Object.assign(article, updated_article, {editing: false})
  }

  addArticleToStore(article) {
    if (Array.isArray(this.articles)) {
      this.articles.push(article);
    } {
      this.loadArticles();
    }
  }

  findArticleById = (id) => {
    if (Array.isArray(this.articles)) {
      return this.findArticleByIdInArray(this.articles, id);
    } else {
      for (var articles of Object.values(this.articles)) {
        const article = this.findArticleByIdInArray(articles, id);
        if (article) return article;
      }
    }
  };

  findArticleByIdInArray(articles, id){
    return articles.find(function(article) {
      return article['id'] == id;
    });
  }

  sortTable(field, sort) {
    this.tableStore.sort_field = field;
    this.tableStore.sort_direction = sort;

    this.loadArticles();
  }

  groupTable(field) {
    this.tableStore.group_field = field;
    this.loadArticles();
  }
}

export default ObservableArticlesStore;