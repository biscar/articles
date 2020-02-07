import React from "react";
import { observer } from "mobx-react";
import ArticleTextColumn from "./ArticleTextColumn";
import ArticleSelectColumn from "./ArticleSelectColumn";
import ArticleActions from "./ArticleActions";

@observer
class ArticleRow extends React.Component {
  constructor(props) {
    super(props);

    this.story = React.createRef();
    this.name = React.createRef();
    this.text = React.createRef();
    this.type = React.createRef();
  }

  onUpdate = () => {
    this.props.store.updateArticle(this.props.article, this.getRowValues());
  };

  onCreate = () => {
    this.props.store.createArticle(this.props.article, this.getRowValues());
  };

  getRowValues() {
    return {
      story_id: this.story.current.state.value,
      name: this.name.current.state.value,
      text: this.text.current.state.value,
      type_code: this.type.current.state.value};
  }

  render() {
    const article = this.props.article;
    const store = this.props.store;

    return (
      <tr>
        <ArticleSelectColumn ref={this.story} value={article.story_id} editing={article.editing}
                             items={this.props.store.getStories()}/>
        <ArticleTextColumn ref={this.name} value={article.name} editing={article.editing} />
        <ArticleTextColumn ref={this.text} value={article.text} editing={article.editing} />
        <ArticleSelectColumn ref={this.type} value={article.type_code} editing={article.editing}
                             items={this.props.store.articleTypes()} />
        <ArticleActions onUpdate={article.id ? this.onUpdate : this.onCreate} store={store} article={article} />
      </tr>
    );
  }

}

export default ArticleRow;