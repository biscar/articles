import React from "react";

function GroupRow(props) {
  const label = props.label;

  return (
    <tr>
      <td className="table-primary" colSpan={5}>
        {label}
      </td>
    </tr>
  );
}

export default GroupRow;
