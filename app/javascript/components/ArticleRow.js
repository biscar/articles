import React from "react";
import { observer } from "mobx-react";
import ArticleTextColumn from "./ArticleTextColumn";
import ArticleSelectColumn from "./ArticleSelectColumn";
import ArticleActions from "./ArticleActions";

@observer
class ArticleRow extends React.Component {
  constructor(props) {
    super(props);

    this.name = React.createRef();
    this.text = React.createRef();
    this.type = React.createRef();
  }

  onUpdate = () => {
    const params = {name: this.name.current.state.value,
      text: this.text.current.state.value,
      type: this.type.current.state.value};

    this.props.store.updateArticle(this.props.article, params);
  };

  render() {
    const article = this.props.article;
    const store = this.props.store;

    return (
      <tr>
        <ArticleTextColumn value={article.story} />
        <ArticleTextColumn ref={this.name} value={article.name} editing={article.editing} />
        <ArticleTextColumn ref={this.text} value={article.text} editing={article.editing} />
        <ArticleSelectColumn ref={this.type} value={article.type} editing={article.editing}
                             items={this.props.store.articleTypes()} />
        <ArticleActions onUpdate={this.onUpdate} store={store} article={article} />
      </tr>
    );
  }

}

export default ArticleRow;