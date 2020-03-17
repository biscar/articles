import React from "react";

class SelectControl extends React.Component {
  constructor(props) {
    super(props);

    this.state = { value: props.value };
  }

  handleChangeValue = (e) => {
    this.setState({ value: e.target.value });
  };

  findValueByKey = (key, items) => {
    const newKey = Object.keys(items).find(function(element) {
      return element == key;
    });

    return items[newKey] || '';
  };

  render () {
    const { items, editing, value } = this.props;

    return (
      editing
        ? <select onChange={this.props.onChange || this.handleChangeValue} defaultValue={value}
                  className="form-control">
          <option></option>
          { Object.keys(items).map((e, key) => <option key={key} value={e}>{items[e]}</option>) }
        </select>
        : this.findValueByKey(value, items)
    );
  }
}

export default SelectControl;