import React from "react";
import { observable, action, computed } from "mobx";
import { observer } from "mobx-react";

@observer
class ArticleFinder extends React.Component {
  onChangeSearchValue = (e) => {
    this.props.tableStore.search_value = e.target.value;
  };

  onChangeSearchField = (e) => {
    this.props.tableStore.search_field = e.target.value;
  };

  getPlaceholder() {
    return `Search by ${this.props.tableStore.search_field}...`;
  }

  onSearch = () => {
    this.props.store.searchArticles();
  };

  render() {
    return (
      <div className="input-group mb-3">
        <div className="input-group-prepend">
          <div className="input-group-text">
            <div className="custom-control custom-radio custom-control-inline">
              <input onChange={this.onChangeSearchField} value="name" defaultChecked type="radio" id="customRadioInline1" name="customRadioInline1" className="custom-control-input">
              </input>
              <label className="custom-control-label" htmlFor="customRadioInline1">Name</label>
            </div>
            <div className="custom-control custom-radio custom-control-inline">
              <input onChange={this.onChangeSearchField} value="text" type="radio" id="customRadioInline2" name="customRadioInline1" className="custom-control-input">
              </input>
              <label className="custom-control-label" htmlFor="customRadioInline2">Text</label>
            </div>
          </div>
        </div>

        <input onChange={this.onChangeSearchValue} type="text" className="form-control" placeholder={this.getPlaceholder()}>
        </input>
        <div className="input-group-append">
          <button onClick={this.onSearch} className="btn btn-outline-secondary" type="button">Search</button>
        </div>
      </div>
    );
  }
}

export default ArticleFinder;