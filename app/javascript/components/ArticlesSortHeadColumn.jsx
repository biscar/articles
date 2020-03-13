import React, {useState} from "react";
import useStores from "../contexts/useStores";

function ArticlesSortHeadColumn(props) {
  const [value, setValue] = useState('asc');
  const { articlesStore } = useStores();
  const {label, column} = props;

  function onChange() {
    setValue(value === 'asc' ? 'desc' : 'asc');
    articlesStore.sortTable(column, value);
  }

  return (
    <th scope="col">
      <a onClick={onChange} href="#" >{label}</a>
    </th>
  );
}

export default ArticlesSortHeadColumn;
