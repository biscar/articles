import React from "react";

class GroupRow extends React.Component {

  render() {
    const label = this.props.label;

    return (
      <tr>
        <td className="table-primary" colSpan={5}>
          {label}
        </td>
      </tr>
    );
  }
}

export default GroupRow;
