import React from "react";
import ArticlesSortHeadColumn from "./ArticlesSortHeadColumn";

function ArticlesHead(props) {
  return (
      <tr>
        <ArticlesSortHeadColumn label={'Story'} column={'story'}/>
        <ArticlesSortHeadColumn label={'Name'} column={'name'}/>
        <ArticlesSortHeadColumn label={'Text'} column={'text'}/>
        <ArticlesSortHeadColumn label={'Type'} column={'type'}/>
        <th scope="col">
          Actions
        </th>
      </tr>
    );
}

export default ArticlesHead;
