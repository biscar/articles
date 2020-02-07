import React from "react";
import { observable, action, computed } from "mobx";
import { observer } from "mobx-react";

@observer
class ArticleHeadColumn extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    const label = this.props.label;
    return (
      <th scope="col">
        <a onClick={this.onChange} href="#" >{label}</a>
      </th>
    );
  }

  onChange = () => {
    const order = this.state.value === 'asc' ? 'desc' : 'asc';
    this.setState({ value: order});

    this.props.store.sortTable(this.props.column, order);
  }
}

export default ArticleHeadColumn;