import React from "react";
import ReactDOM from "react-dom";

import ArticlesTable from "../components/ArticlesTable"
import ObservableArticlesStore from "../components/ObservableArticlesStore"
import ObservableTableStore from "../components/ObservableTableStore"
import ArticlesFinder from "../components/ArticlesFinder";
import ArticlesGrouper from "../components/ArticlesGrouper";
import RemoveArticleChannel from "../channels/RemoveArticleChannel";
import UpdateArticleChannel from "../channels/UpdateArticleChannel";
import CreateArticleChannel from "../channels/CreateArticleChannel";

const tableStore = new ObservableTableStore();
const store = new ObservableArticlesStore(tableStore);
new RemoveArticleChannel(store);
new UpdateArticleChannel(store);
new CreateArticleChannel(store);

ReactDOM.render(
  <ArticlesFinder store={store} tableStore={tableStore}/>,
  document.getElementById('article_finder')
);

ReactDOM.render(
  <ArticlesGrouper store={store} tableStore={tableStore}/>,
  document.getElementById('article_grouper')
);

ReactDOM.render(
  <ArticlesTable store={ store }/>,
  document.getElementById('articles')
);
