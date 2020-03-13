import {action, autorun, observable} from "mobx";
import Articles from "../api/Articles";
import ArticlesChannel from "../channels/ArticlesChannel";

class ArticlesStore {
  @observable articles = [];

  constructor(tableStore) {
    this.articlesApi = new Articles();
    this.articlesChannel = new ArticlesChannel(this);
    this.tableStore = tableStore;
    this.articleTypes = [];
    this.stories = [];
    autorun(() => {
      this.loadArticles();
    });
  }

  @action
  loadArticles() {
    this.articlesApi.getArticles(this.tableStore.getTableProperties(), data => {
      this.articleTypes = data.article_types;
      this.stories = data.stories;
      this.articles = data.articles;
    });
  }

  removeArticle(articleId) {
    this.articlesApi.destroyArticle(articleId, () => this.articlesChannel.channel.articlesIndex());
  }

  updateArticle(articleId, params) {
    this.articlesApi.updateArticle(articleId, params, () => this.articlesChannel.channel.articlesIndex());
  }

  createArticle(params) {
    this.articlesApi.createArticle(params, () => this.articlesChannel.channel.articlesIndex());
  }

  sortTable(field, sort) {
    this.tableStore.setSortField(field);
    this.tableStore.setSortDirection(sort);

    this.loadArticles();
  }

  groupTable(field) {
    this.tableStore.setGroupField(field);
    this.loadArticles();
  }
}

export default ArticlesStore;