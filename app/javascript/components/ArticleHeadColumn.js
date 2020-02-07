import React from "react";
import { observable, action, computed } from "mobx";
import { observer } from "mobx-react";

@observer
class ArticleHeadColumn extends React.Component {
  render() {
    const value = this.props.value;
    return (
        <th scope="col">{value}</th>
    );
  }

  onNewTodo = () => {
    this.props.store.addTodo(prompt('Enter a new todo:','coffee plz'));
  }
}

export default ArticleHeadColumn;