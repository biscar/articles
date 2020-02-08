import React from "react";
import { observable, action, computed } from "mobx";
import { observer } from "mobx-react";

@observer
class TextControl extends React.Component {

  constructor(props) {
    super(props);

    this.state = { value: props.value };
  }

  handleChangeValue = (e) => {
    this.setState({value: e.target.value});
  };

  render() {
    const value = this.props.value;
    const editing = this.props.editing;

    return (
      editing ? <textarea onChange={this.handleChangeValue} defaultValue={value}></textarea> : value
    );
  }
}

export default TextControl;