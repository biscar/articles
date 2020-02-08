import React from "react";

class ArticleActions extends React.Component {
  onRemove = () => {
    this.props.store.removeArticle(this.props.article);
  };

  onEdit = () => {
    this.props.store.editArticle(this.props.article);
  };

  render() {
    const editing = this.props.article.editing;

    return (
      <td>
        <button onClick={this.onRemove} type="button" className="btn btn-danger">remove</button>
        { editing ? <button onClick={this.props.onUpdate} type="button" className="btn btn-success">save</button> :
          <button onClick={this.onEdit} type="button" className="btn btn-primary">edit</button> }
      </td>
    );
  }
}

export default ArticleActions;