import React from 'react';
import {Provider} from "mobx-react";
import ArticlesStore from "../stores/ArticlesStore";
import ArticlesTable from "./ArticlesTable";
import TableStore from "../stores/TableStore";
import ArticlesFinder from "./ArticlesFinder";
import ArticlesGrouper from "./ArticlesGrouper";

function App() {
  const tableStore = new TableStore();

  return (
    <Provider articlesStore={new ArticlesStore(tableStore)} tableStore={tableStore} >
      <ArticlesFinder />,
      <ArticlesGrouper />,
      <ArticlesTable />
    </Provider>
  )
}

export default App;
