import React from "react";

function ColumnNameRow(props) {
  return (
    <tr>
      <td contentEditable="false">Decision making factors</td>
      <td>Weighting</td>
      {props.options.map((option) => {
        return <td>Your Score</td>;
      })}
    </tr>
  );
}

export default ColumnNameRow;
