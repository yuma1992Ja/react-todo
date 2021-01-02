import React, { useState } from "react";
import "./styles.css";
import { InputTodo } from "./components/InputTodo";
import { Incompletetodos } from "./components/IncompleteTodos";
import { Completetodos } from "./components/CompleteTodos";

export const App = () => {
  const [todoText, setTodoText] = useState("");
  const [incompleteTodos, setIncompleteTodos] = useState(["aaaaa", "iiiii"]);
  const [completeTodos, setCompleteTodos] = useState(["uuuuu", "eeeee"]);

  const onChangeTodoText = (event) => setTodoText(event.target.value);

  const onClickAdd = () => {
    //空文字であれば処理しない
    if (todoText === "") return;
    //配列に追加
    const newTodos = [...incompleteTodos, todoText];
    setIncompleteTodos(newTodos);
    //空にする
    setTodoText("");
  };
  //何行目が押されたかを確認
  const onClickDelete = (index) => {
    //配列をコピー
    const newTodos = [...incompleteTodos];
    //１は一つ分削除
    newTodos.splice(index, 1);
    setIncompleteTodos(newTodos);
  };
  const onClickComplete = (index) => {
    //配列をコピー
    const newIncompleteTodos = [...incompleteTodos];
    //１は一つ分削除
    newIncompleteTodos.splice(index, 1);
    //完了配列に追加
    const newcompleteTodos = [...completeTodos, incompleteTodos[index]];
    setIncompleteTodos(newIncompleteTodos);
    setCompleteTodos(newcompleteTodos);
  };

  const onClickBack = (index) => {
    //完了配列をコピー→削除
    const newCompleteTodos = [...completeTodos];
    newCompleteTodos.splice(index, 1);

    //未完了配列に追加
    const newIncompleteTodos = [...incompleteTodos, completeTodos[index]];
    //削除をマスター配列に適用
    setCompleteTodos(newCompleteTodos);
    setIncompleteTodos(newIncompleteTodos);
  };

  return (
    <>
      <InputTodo
        todoText={todoText}
        onChange={onChangeTodoText}
        onClick={onClickAdd}
      />
      <Incompletetodos
        todos={incompleteTodos}
        onClickComplete={onClickComplete}
        onClickDelete={onClickDelete}
      />
      <Completetodos todos={completeTodos} onClickBack={onClickBack} />
    </>
  );
};
