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
      search_field: this.tableStore.search_field,
      search: this.tableStore.search_value,
      sort_field: this.tableStore.sort_field,
      sort_direction: this.tableStore.sort_direction,
      group_field: this.tableStore.group_field
    })
      .then(response => {
        if (response) {
          this.article_types = response.data.article_types;
          this.stories = response.data.stories;
          this.articles = response.data.articles;
        }
      });
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

  articleTypes() {
    return this.article_types;
  }

  getStories() {
    return this.stories;
  }

  getNewArticle() {
    return  {
      editing: true,
      story_id: this.defaultStory(),
      type_code: this.defaultArticleType()
    };
  }

  newArticle() {
    const newArticle = this.getNewArticle();

    if (Array.isArray(this.articles)) {
      this.articles.push(newArticle);
    } else {
      const groups = Object.keys(this.articles);
      const lastGroup = groups[0];
      if (lastGroup === undefined) {
        this.articles[''] = [newArticle]
      } else {
        this.articles[groups[groups.length - 1]].push(newArticle);
      }
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

  removeArticleFromStore(article_id){
    if (Array.isArray(this.articles)) {
      const article = this.findArticleById(article_id);
      this.articles.remove(article);
    } else {
      for (const articles of Object.values(this.articles)) {
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
      for (const articles of Object.values(this.articles)) {
        const article = this.findArticleByIdInArray(articles, id);
        if (article) return article;
      }
    }
  };

  findArticleByIdInArray(articles, id) {
    return articles.find(article => article['id'] == id);
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
