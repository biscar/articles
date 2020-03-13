import React from "react";

function ArticlesActions(props) {
  const {edit, onEdit, onUpdate, onRemove} = props;

  return (
    <td>
      { <button onClick={onRemove} type="button" className="btn btn-danger">remove</button>}
      { edit ?
        <button onClick={onUpdate} type="button" className="btn btn-success">save</button> :
        <button onClick={onEdit} type="button" className="btn btn-primary">edit</button> }
    </td>
  );
}

export default ArticlesActions;
