import { observable } from "mobx";

class TableStore {
  @observable searchField;

  constructor() {
    this.searchField = 'name';
    this.searchValue = null;
    this.sortField = null;
    this.sortDirection = null;
    this.groupField = null;
  }

  setSearchField(searchField) {
    this.searchField = searchField;
  }

  setSearchValue(searchValue) {
    this.searchValue = searchValue;
  }

  setSortField(sortField) {
    this.sortField = sortField;
  }

  setSortDirection(sortDirection) {
    this.sortDirection = sortDirection;
  }

  setGroupField(groupField) {
    this.groupField = groupField;
  }

  getTableProperties() {
    return {
      search_field: this.searchField,
      search: this.searchValue,
      sort_field: this.sortField,
      sort_direction: this.sortDirection,
      group_field: this.groupField,
    }
  }
}

export default TableStore;
