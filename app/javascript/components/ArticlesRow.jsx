import React from "react";
import { observer } from "mobx-react";
import ArticlesActions from "./ArticlesActions";
import TextControl from "./TextContol";
import SelectControl from "./SelectControl";

@observer
class ArticlesRow extends React.Component {
  constructor(props) {
    super(props);

    this.story = React.createRef();
    this.name = React.createRef();
    this.text = React.createRef();
    this.type = React.createRef();
  }

  onUpdate = () => {
    this.props.store.updateArticle(this.props.article.id, this.getRowValues());
  }

  onCreate = () => {
    this.props.store.createArticle(this.props.article, this.getRowValues());
  }

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
        <td>
          <SelectControl ref={this.story} value={article.story_id} editing={article.editing}
                               items={this.props.store.getStories()}/>
        </td>
        <td>
          <TextControl ref={this.name} value={article.name} editing={article.editing} />
        </td>
        <td>
          <TextControl ref={this.text} value={article.text} editing={article.editing} />
        </td>
        <td>
          <SelectControl ref={this.type} value={article.type_code} editing={article.editing}
                         items={this.props.store.articleTypes()} />
        </td>
        <ArticlesActions onUpdate={article.id ? this.onUpdate : this.onCreate} store={store} article={article} />
      </tr>
    );
  }
}

export default ArticlesRow;
