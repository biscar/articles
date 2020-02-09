import React from "react";
import ArticlesSortHeadColumn from "./ArticlesSortHeadColumn";

class ArticlesHead extends React.Component {
  render() {
    const store = this.props.store;

    return (
      <tr>
        <ArticlesSortHeadColumn store={store} label={'Story'} column={'story'}/>
        <ArticlesSortHeadColumn store={store} label={'Name'} column={'name'}/>
        <ArticlesSortHeadColumn store={store} label={'Text'} column={'text'}/>
        <ArticlesSortHeadColumn store={store} label={'Type'} column={'type'}/>
        <th scope="col">
          Actions
        </th>
      </tr>
    );
  };
}

export default ArticlesHead;
