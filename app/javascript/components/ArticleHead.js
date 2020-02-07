import React from "react";
import { observable, action, computed } from "mobx";
import { observer } from "mobx-react";
import ArticleHeadColumn from "./ArticleHeadColumn";

@observer
class ArticleHead extends React.Component {
  render() {
    //const store = this.props.store;
    return (
        <tr>
          <ArticleHeadColumn value={'Story'}/>
          <ArticleHeadColumn value={'Name'}/>
          <ArticleHeadColumn value={'Text'}/>
          <ArticleHeadColumn value={'Type'}/>
          <ArticleHeadColumn value={'Actions'}/>
        </tr>
    );
  };
}

export default ArticleHead;