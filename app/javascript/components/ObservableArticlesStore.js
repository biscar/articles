import React, {Component} from "react";
import ReactDOM, { render } from "react-dom";
import MobX, { observable, action, computed, autorun } from "mobx";

class ObservableArticlesStore {
  @observable articles = [];

  constructor() {
    this.article_types = [];

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
        this.articles = data.data.articles;
      }
    });
  }

  articleTypes() {
    return this.article_types;
  }

  addArticle(article) {
    this.articles.push(article);
  }

  editArticle(article) {
    article.editing = true;
  }

  findValueByKey = (key, items) => {
    const new_key = Object.keys(items).find(function(element) {
        return element === key;
    });

    return items[new_key];
  };

  updateArticle(article, params) {
    $.ajax({
      url: `/api/v1/article/${article.id}`,
      type: 'PUT',
      data: params,
      success: () =>  {
        article.name = params.name;
        article.text = params.text;
        article.type = this.findValueByKey(params.type, this.article_types);
        article.editing = false;
      }
    });

  }

  removeArticle(article) {
    $.ajax({
      url: `/api/v1/article/${article.id}`,
      type: 'DELETE',
      success: () =>  {
        this.articles.remove(article);
      }
    });
  }
}

export default ObservableArticlesStore;