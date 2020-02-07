import React from "react";
import { observable, action, computed } from "mobx";
import { observer } from "mobx-react";
import ArticleRow from "./ArticleRow";
import ArticleHead from "./ArticleHead";

@observer
class ArticleTable extends React.Component {
  render() {
    const store = this.props.store;

    return (
      <table className="table table-bordered">
        <thead>
          <ArticleHead />
        </thead>
        <tbody>
          { store.articles.map(
            (article, idx) => <ArticleRow store={ store } article={ article } key={ idx } />
          )}
        </tbody>
      </table>
    );
  }

  onNewTodo = () => {
    this.props.store.addTodo(prompt('Enter a new todo:','coffee plz'));
  }
}

export default ArticleTable