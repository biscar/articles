import React, {Component} from "react";
import ReactDOM, { render } from "react-dom";
import MobX, { observable, action, computed, autorun } from "mobx";

class ObservableArticlesStore {
  @observable articles = [];

  constructor() {
    this.article_types = {};
    this.stories = {};

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
    this.articles.push({editing: true, story_id: this.defaultStory(),
      type_code: this.defaultArticleType()});
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

  updateArticle(article, params) {
    $.ajax({
      url: `/api/v1/article/${article.id}`,
      type: 'PUT',
      data: params,
      success: () =>  {
        article.name = params.name;
        article.text = params.text;
        article.type_code = params.type_code;
        article.story_id = params.story_id;
        article.editing = false;
      }
    });
  };

  createArticle(article, params) {
    $.ajax({
      url: `/api/v1/article`,
      type: 'POST',
      data: params,
      success: () =>  {
        article.name = params.name;
        article.text = params.text;
        article.type_code = params.type_code;
        article.story_id = params.story_id;
        article.editing = false;
      }
    });
  };

  removeArticle(article) {
    $.ajax({
      url: `/api/v1/article/${article.id}`,
      type: 'DELETE',
      success: () =>  {
        this.articles.remove(article);
      }
    });
  }

  searchArticles(search_field, text) {
    $.ajax({
      url: `/api/v1/article`,
      data: {
        "search_field": search_field,
        "search": text
      },
      type: 'GET',
      success: (data) => {
        this.articles = data.data.articles;
      }
    });
  }
}

export default ObservableArticlesStore;