import React from "react";
import ArticlesRow from "./ArticlesRow";
import ArticlesHead from "./ArticlesHead";
import NewArticle from "./NewArticle";
import GroupRow from "./GroupRow";
import useArticlesData from "../contexts/useArticlesData";

function ArticlesTable(props) {
  const { articles } = useArticlesData();

  function getRows(articles) {
    let rows = [];
    let index = 0;

    if (Array.isArray(articles)) {
      rows = articles.map(
        article => {
          index = index + 1;
          return <ArticlesRow article={article} key={index} />;
        }
      )
    }
    else {
      for (let group in articles) {
        index = index + 1;
        rows.push(<GroupRow label={group} key={index}/>);

        rows = rows.concat(articles[group].map(article =>
          {
            index = index + 1;
            return <ArticlesRow article={article} key={index} />;
          }
        ))
      }
    }

    return rows;
  }

  return (
    <div>
      <table className="table table-bordered">
        <thead>
          <ArticlesHead />
        </thead>
        <tbody>
          {getRows(articles)}
          <NewArticle />
        </tbody>
      </table>
    </div>
  )
}

export default ArticlesTable;
