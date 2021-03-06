import React from "react";

function ScoreCell(props) {
  return (
    <td class="pt-3-half" contenteditable="true">
      <select
        name="cars"
        id="cars"
        value={props.value}
        onChange={props.onChange}
      >
        <option value="1">1</option>
        <option value="2">2</option>
        <option value="3">3</option>
        <option value="4">4</option>
        <option value="5">5</option>
        <option value="6">6</option>
        <option value="7">7</option>
        <option value="8">8</option>
        <option value="9">9</option>
        <option value="10">10</option>
      </select>
    </td>
  );
}

export default ScoreCell;
