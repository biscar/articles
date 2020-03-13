import useStores from "./useStores";
import {useObserver} from "mobx-react-lite";

export default function useArticlesData() {
  const { tableStore } = useStores();

  return useObserver(() => (
    {
      searchField: tableStore.searchField,
      searchValue: tableStore.searchValue,
      sortField: tableStore.sortField,
      sortDirection: tableStore.sortDirection,
      groupField: tableStore.groupField,
    }))
}
