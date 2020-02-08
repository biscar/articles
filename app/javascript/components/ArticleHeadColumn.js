import React from "react";

class ArticleHeadColumn extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  onChange = () => {
    const order = this.state.value === 'asc' ? 'desc' : 'asc';
    this.setState({ value: order});

    this.props.store.sortTable(this.props.column, order);
  }

  render() {
    const label = this.props.label;
    return (
      <th scope="col">
        <a onClick={this.onChange} href="#" >{label}</a>
      </th>
    );
  }
}

export default ArticleHeadColumn;
