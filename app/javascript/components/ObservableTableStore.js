import { observable } from "mobx";

class ObservableTableStore {
  @observable search_field;

  constructor() {
    this.search_field = 'name';
    this.search_value = null;
    this.sort_field = null;
    this.sort_direction = null;
    this.group_field = null;
  }
}

export default ObservableTableStore;
