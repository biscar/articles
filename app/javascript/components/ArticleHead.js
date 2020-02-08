import React from "react";
import ArticleHeadColumn from "./ArticleHeadColumn";

class ArticleHead extends React.Component {

  render() {
    const store = this.props.store;

    return (
      <tr>
        <ArticleHeadColumn store={store} label={'Story'} column={'story'}/>
        <ArticleHeadColumn store={store} label={'Name'} column={'name'}/>
        <ArticleHeadColumn store={store} label={'Text'} column={'text'}/>
        <ArticleHeadColumn store={store} label={'Type'} column={'type'}/>
        <th scope="col">
          Actions
        </th>
      </tr>
    );
  };
}

export default ArticleHead;