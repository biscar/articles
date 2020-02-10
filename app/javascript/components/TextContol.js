import React from "react";

class TextControl extends React.Component {

  constructor(props) {
    super(props);

    this.state = { value: props.value };
  }

  onChangeValue = (e) => {
    this.setState({value: e.target.value});
  };

  render() {
    const value = this.props.value;
    const editing = this.props.editing;
    const rows = this.props.rows;
    const cols = this.props.cols;

    return (
      editing ? <textarea rows={rows} cols={cols} onChange={this.onChangeValue} defaultValue={value}></textarea> : value
    );
  }
}

export default TextControl;
