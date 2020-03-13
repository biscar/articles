import React, { useRef } from "react";
import useStores from "../contexts/useStores";
import useArticlesData from "../contexts/useArticlesData";
import SelectControl from "./shared/SelectControl";
import TextControl from "./shared/TextContol";

function NewArticle(props) {
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

  function onCreate(){
    articlesStore.createArticle(getRowValues());
  }

  return (
    <tr>
      <td>
        <SelectControl ref={story} items={stories} editing />
      </td>
      <td>
        <TextControl ref={name} rows={5} cols={20} editing />
      </td>
      <td>
        <TextControl ref={text} rows={5} cols={100} editing />
      </td>
      <td>
        <SelectControl ref={type} items={articleTypes} editing />
      </td>
     <td>
       <button onClick={onCreate} type="button" className="btn btn-primary">Create</button>
     </td>
    </tr>
  );
}

export default NewArticle;
