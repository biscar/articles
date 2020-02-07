import React from "react";
import { observable, action, computed } from "mobx";
import { observer } from "mobx-react";

@observer
class ArticleActions extends React.Component {
  render() {
    const editing = this.props.article.editing;

    return (
      <td>
        <button onClick={ this.onRemove }>remove</button>
        { editing ?  <button onClick={ this.props.onUpdate }>save</button> :
          <button onClick={ this.onEdit }>edit</button> }
      </td>
    );
  }

  onRemove = () => {
    this.props.store.removeArticle(this.props.article);
  };

  onEdit = () => {
    this.props.store.editArticle(this.props.article);
  };
}

export default ArticleActions;