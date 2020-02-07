import React from "react";
//import {Utils} from "Utils";

class ArticleSelectColumn extends React.Component {
  constructor(props) {
    super(props);

    this.state = { value: props.value };
  }

  handleChangeValue = (e) => {
    this.setState({value: e.target.value});
  };

  findKeyByValue = (value, items) => {
    return Object.keys(items).find(function(element) {
      return items[element] === value;
    });
  };

  render () {
    const items = this.props.items;
    const editing = this.props.editing;
    const value = this.props.value;

    return (
      <td>
        { editing
          ?  <select onChange={this.handleChangeValue} defaultValue={this.findKeyByValue(value, items)}
                     className="form-control">
               { Object.keys(items).map((e, key) => <option key={key} value={e}>{items[e]}</option>) }
             </select>
          : value
        }
      </td>
    );
  }
}

export default ArticleSelectColumn;