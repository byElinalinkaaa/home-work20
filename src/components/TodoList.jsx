import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { completeTodo, deleteTodo, editTodo } from "../store/todo/todoSlice";
import styled from "styled-components";

const TodoList = ({ item }) => {
  const dispatch = useDispatch();

  const [editValue, setEditValue] = useState("");
  const [edit, setEdit] = useState(false);

  const removeHadnler = () => {
    dispatch(deleteTodo(item.id));
  };

  const toggleTodo = () => {
    dispatch(completeTodo(item.id));
  };
  const saveTodoHandler = () => {
    dispatch(editTodo({ id: item.id, title: editValue }));
    setEdit(false);
  };
  const editHandler = () => {
    setEdit(true);
    setEditValue(item.title);
  };

  return (
    <div>
      <li>
        {edit ? (
          <>
            <input
              type="text"
              value={editValue}
              onChange={(e) => setEditValue(e.target.value)}
            />
            <button onClick={saveTodoHandler}>save</button>
          </>
        ) : (
          <>
            <StyledTitle done={item.completed}>{item.title}</StyledTitle>
            <Main>
              <Button onClick={removeHadnler}>delete</Button>
              <button onClick={toggleTodo}>complete</button>
              <button onClick={editHandler}>edit</button>
            </Main>
          </>
        )}
      </li>
    </div>
  );
};

export default TodoList;

const StyledTitle = styled.p`
  text-decoration: ${(props) => (props.done ? "line-through" : "")};
`;
const Main = styled.div`
  display: flex;
  width:300px;
  height:30px;
`;
const Button = styled.div`
  background: #2e56b3;
  row-gap:20px;
  width:50px;
  :hover {
    background-color: purple;
  }
`;
