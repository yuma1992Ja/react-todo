import React from "react";

//CSS-in-JS
const style = {
  backgroundColor: "aqua",
  width: "400px",
  height: "30px",
  /* 文字列と枠の余白 */
  padding: "8px",
  /* 左右上下余白 */
  margin: "8px",
  /* 丸み */
  borderRadius: "10px"
};

export const InputTodo = (props) => {
  const { todoText, onChange, onClick } = props;
  return (
    <div style={style}>
      <input
        placeholder="TODOを入力する"
        value={todoText}
        onChange={onChange}
      />
      <button onClick={onClick}>追加</button>
    </div>
  );
};
