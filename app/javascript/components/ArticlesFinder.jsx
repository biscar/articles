import React from "react";
import useTableData from "../contexts/useTableData";
import useStores from "../contexts/useStores";

function ArticlesFinder() {
  const { searchField } = useTableData();
  const { tableStore, articlesStore } = useStores();

  function onChangeSearchValue(e) {
    tableStore.setSearchValue(e.target.value);
  }

  function onChangeSearchField(e) {
    tableStore.setSearchField(e.target.value);
  }

  function getPlaceholder() {
    return `Search by ${searchField}...`;
  }

  function onSearch() {
    articlesStore.loadArticles();
  }

  return (
    <div className="input-group mb-3">
      <div className="input-group-prepend">
        <div className="input-group-text">
          <div className="custom-control custom-radio custom-control-inline">
            <input onChange={onChangeSearchField} value="name" defaultChecked type="radio" id="customRadioInline1" name="customRadioInline1" className="custom-control-input">
            </input>
            <label className="custom-control-label" htmlFor="customRadioInline1">Name</label>
          </div>
          <div className="custom-control custom-radio custom-control-inline">
            <input onChange={onChangeSearchField} value="text" type="radio" id="customRadioInline2" name="customRadioInline1" className="custom-control-input">
            </input>
            <label className="custom-control-label" htmlFor="customRadioInline2">Text</label>
          </div>
        </div>
      </div>

      <input onChange={onChangeSearchValue} type="text" className="form-control" placeholder={getPlaceholder()}>
      </input>
      <div className="input-group-append">
        <button onClick={onSearch} className="btn btn-outline-secondary" type="button">Search</button>
      </div>
    </div>
  );
}

export default ArticlesFinder;
