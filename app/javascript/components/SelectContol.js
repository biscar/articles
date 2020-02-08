import React from "react";

class SelectContol extends React.Component {
  constructor(props) {
    super(props);

    this.state = { value: props.value };
  }

  handleChangeValue = (e) => {
    this.setState({value: e.target.value});
  };

  findValueByKey = (key, items) => {
    const new_key = Object.keys(items).find(function(element) {
      return element == key;
    });

    return items[new_key];
  };

  findKeyByValue = (value, items) => {
    return Object.keys(items).find(function(element) {
      return items[element] === value;
    });
  };

  render () {
    const items = this.props.items;
    const editing = this.props.editing;
    const key = this.props.value;

    return (
      editing
        ? <select onChange={this.handleChangeValue} defaultValue={key}
                  className="form-control">
           { Object.keys(items).map((e, key) => <option key={key} value={e}>{items[e]}</option>) }
          </select>
        : this.findValueByKey(key, items)
    );
  }
}

export default SelectContol;