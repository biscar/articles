import React, {Component} from "react";
import ReactDOM, { render } from "react-dom";

import ArticleTable from "../components/ArticleTable"
import ObservableArticlesStore from "../components/ObservableArticlesStore"
import ArticleFinder from "../components/ArticleFinder";


const store = new ObservableArticlesStore();

ReactDOM.render(
  <ArticleFinder store={ store }/>,
  document.getElementById('article_finder')
);

ReactDOM.render(
  <ArticleTable store={ store }/>,
  document.getElementById('articles')
);