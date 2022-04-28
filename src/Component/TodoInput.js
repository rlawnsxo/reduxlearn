import React, { useRef, useState } from "react";
import { useDispatch } from "react-redux";
import { todoInsert } from "../reducer/Todo";
import { AddButton, Input } from "../Styled/todoInput-styled";
import TodoTemplate from "./TodoTemplate";

const TodoInput = () => {
  const [todoInput, setTodoInput] = useState();
  let nextId = useRef(2);

  const dispatch = useDispatch();

  const onChangeInput = (e) => {
    setTodoInput(e.target.value);
  };
  const onRemove = () => {
    setTodoInput("");
  };

  const addTodo = () => {
    if (!todoInput.lenght) {
      alert("내용을 입력해 주세요");
      return;
    }
  };
  const onKeyPress = (e) => {
    if (e.key === "Enter") {
      addTodo();
    }
  };

  dispatch(todoInsert(nextId.current, todoInput));
  nextId.current += 1;
  onRemove();

  return (
    <TodoTemplate>
      <Input
        onChange={onChangeInput}
        onKeyPress={onKeyPress}
        value={todoInput}
        placeholder="할 일을 입력하세요!"
      />
      <AddButton onClick={addTodo}>추가</AddButton>
    </TodoTemplate>
  );
};

export default TodoInput;
