import React from "react";
import SelectControl from "./shared/SelectControl";
import useStores from "../contexts/useStores";

const items = {
  story: 'Story',
  name: 'Name',
  text: 'Text',
  type: 'Type',
  total_story: 'Story with totals'
};

function ArticlesGrouper() {
  const { articlesStore } = useStores();

  function onChange(e) {
    articlesStore.groupTable(e.target.value);
  }

  return (
    <div className="container p-2">
      <form>
        <div id="article_finder"></div>
        <div className="form-group row">
          <label className="col-sm-2 col-form-label">Group by</label>
          <div className="col-sm-5">
            <div id="article_grouper">
              <SelectControl onChange={onChange} editing items={items} />
            </div>
          </div>
        </div>
      </form>
    </div>
  );
}

export default ArticlesGrouper;
