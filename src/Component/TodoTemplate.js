import React from "react";
import { Template, Title } from "../Styled/Common-Styled";

const TodoTemplate = (children) => {
  return (
    <Template>
      <Title>할일</Title>
      {children}
    </Template>
  );
};

export default TodoTemplate;
