import React, {Component} from "react";
import ReactDOM, { render } from "react-dom";
import MobX, { observable, action, computed, autorun } from "mobx";

class ObservableTableStore {
  @observable search_field;
  @observable search_value;
  @observable sort_field;
  @observable sort_value;

  constructor(store) {
    this.store = store;
    this.search_field = 'name';
    this.stories = {};
  }
}

export default ObservableTableStore;