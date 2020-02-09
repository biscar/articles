import React from "react";
import { observer } from "mobx-react";
import ArticleRow from "./ArticleRow";
import ArticleHead from "./ArticleHead";
import GroupRow from "./GroupRow";

@observer
class ArticleTable extends React.Component {
  getRows = (store) => {
    let rows = [];
    let index = 0;

    if (Array.isArray(store.articles)) {
      rows = store.articles.map(
        (article) => {
          index = index + 1;
          return <ArticleRow store={store} article={article} key={index} />;
        }
      )
    }
    else {
      for (var group in store.articles) {
        index = index + 1;
        rows.push(<GroupRow store={store} label={group} key={index}/>);

        rows = rows.concat(store.articles[group].map((article) =>
          {
            index = index + 1;
            return <ArticleRow store={store} article={article} key={index} />;
          }
        ))
      }
    }

    return rows;
  }

  onNewArticle = () => {
    this.props.store.newArticle();
  };

  render() {
    const store = this.props.store;

    return (
      <div>
        <table className="table table-bordered">
          <thead>
            <ArticleHead store={store}/>
          </thead>
          <tbody>
            {this.getRows(store)}
          </tbody>
        </table>
        <button onClick={this.onNewArticle} type="button" className="btn btn-primary">New Article</button>
      </div>
    );
  };
}

export default ArticleTable;
