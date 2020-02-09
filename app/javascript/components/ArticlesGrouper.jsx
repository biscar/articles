import React from "react";
import SelectControl from "./SelectControl";

const items = {
  '': 'Select field by group',
  story: 'Story',
  name: 'Name',
  text: 'Text',
  type: 'Type',
  total_story: 'Story with totals'
};

class ArticlesFinder extends React.Component {
  onChange = (e) => {
    this.props.store.groupTable(e.target.value);
  }

  render() {
    return (
      <SelectControl onChange={this.onChange} editing items={items} />
    );
  }
}

export default ArticlesFinder;
