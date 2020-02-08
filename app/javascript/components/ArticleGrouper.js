import React from "react";
import SelectControl from "./SelectControl";
import { observer } from "mobx-react";

const items = {
  '': 'Select field by group',
  story: 'Story',
  name: 'Name',
  text: 'Text',
  type: 'Type',
  total_story: 'Story with totals'
};

@observer
class ArticleFinder extends React.Component {
  render() {
    return (
      <SelectControl  onChange={this.onChange} editing items={items} />
    );
  }

  onChange = (e) => {
    this.props.store.groupTable(e.target.value);
  }
}

export default ArticleFinder;