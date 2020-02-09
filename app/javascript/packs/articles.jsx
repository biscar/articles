import React, {Component} from "react";
import ReactDOM, { render } from "react-dom";

import ArticleTable from "../components/ArticleTable"
import ObservableArticlesStore from "../components/ObservableArticlesStore"
import ObservableTableStore from "../components/ObservableTableStore"
import ArticleFinder from "../components/ArticleFinder";
import ArticleGrouper from "../components/ArticleGrouper";
import RemoveArticleChannel from "../channels/RemoveArticleChannel";
import UpdateArticleChannel from "../channels/UpdateArticleChannel";

const tableStore = new ObservableTableStore();
const store = new ObservableArticlesStore(tableStore);
new RemoveArticleChannel(store);
new UpdateArticleChannel(store);

ReactDOM.render(
  <ArticleFinder store={store} tableStore={tableStore}/>,
  document.getElementById('article_finder')
);

ReactDOM.render(
  <ArticleGrouper store={store} tableStore={tableStore}/>,
  document.getElementById('article_grouper')
);

ReactDOM.render(
  <ArticleTable store={ store }/>,
  document.getElementById('articles')
);