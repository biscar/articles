import React, {Component} from "react";
import ReactDOM, { render } from "react-dom";

import ArticleTable from "../components/ArticleTable"
import ObservableArticlesStore from "../components/ObservableArticlesStore"

ReactDOM.render(
  <ArticleTable store={ new ObservableArticlesStore() }/>,
  document.getElementById('articles')
);