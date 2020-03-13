import React, { useRef, useState } from 'react';
import ArticlesActions from "./ArticlesActions";
import TextControl from "./shared/TextContol";
import SelectControl from "./shared/SelectControl";
import useArticlesData from "../contexts/useArticlesData";
import useStores from "../contexts/useStores";

function ArticlesRow(props) {
  const { article } = props;

  const [edit, setEdit] = useState(false);
  const { articlesStore } = useStores();
  const { articleTypes, stories } = useArticlesData();

  const story = useRef(null);
  const name = useRef(null);
  const text = useRef(null);
  const type = useRef(null);

  function getRowValues() {
    return {
      story_id: story.current.state.value,
      name: name.current.state.value,
      text: text.current.state.value,
      type_code: type.current.state.value
    };
  }

  function onUpdate(){
    articlesStore.updateArticle(article.id, getRowValues());
    setEdit(false);
  }

  function onEdit(){
    setEdit(true)
  }

  function onRemove(){
    articlesStore.removeArticle(article.id);
  }

  return (
    <tr>
      <td>
        <SelectControl ref={story} value={article.story_id} items={stories} editing={edit}/>
      </td>
      <td>
        <TextControl ref={name} rows={5} cols={20} value={article.name} editing={edit} />
      </td>
      <td>
        <TextControl ref={text} rows={5} cols={100} value={article.text} editing={edit} />
      </td>
      <td>
        <SelectControl ref={type} value={article.type_code} items={articleTypes} editing={edit} />
      </td>
      <ArticlesActions edit={edit} onEdit={onEdit} onUpdate={onUpdate} onRemove={onRemove}/>
    </tr>
  );
}

export default ArticlesRow;
