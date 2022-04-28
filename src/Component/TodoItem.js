import React from "react";
import { useDispatch } from "react-redux";
import {
  Button,
  CheckBox,
  TextBox,
  TodoItemBox,
} from "../Styled/TodoItem-Styled";
import { FaRegSquare, FaRegCheckSquare } from "react-icons/fa";
import { BiPencil } from "react-icons/bi";
import { TiDeleteOutline } from "react-icons/ti";
import { todoRemove, todoToggle } from "../reducer/Todo";

const TodoItem = (todo) => {
  const { id, text, isCompleted } = todo;
  const dispatch = useDispatch();
  return (
    //체크 박스
    <TodoItemBox>
      <CheckBox onClick={() => dispatch(todoToggle(id))}>
        {isCompleted ? (
          <FaRegCheckSquare size="25px" color="#84a98c" />
        ) : (
          <FaRegSquare />
        )}
      </CheckBox>
      {/* 인푹박스 */}
      <TextBox id="text" readOnly={true} value={text} checked={isCompleted} />
      {/* 수정버튼 */}
      <Button>
        <BiPencil size="25px" color="#e56b6f" />
      </Button>
      {/* 삭제버튼 */}
      <Button onClick={() => dispatch(todoRemove(id))}>
        <TiDeleteOutline size="30px" color="#e56b6f" />
      </Button>
    </TodoItemBox>
  );
};

export default TodoItem;
