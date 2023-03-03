import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { v4 } from "uuid";
import { addTodo, deleteAll } from "../store/todo/todoSlice";
import TodoList from "./TodoList";
import Header from "./Header";
import styled from "styled-components";

const TodoForm = () => {
  const dispatch = useDispatch();

  const { todo } = useSelector((state) => state);

  const [inputValue, setInputValue] = useState("");

  const changeInputValue = (e) => {
    setInputValue(e.target.value);
  };

  const submitHandler = (e) => {
    e.preventDefault();
    const newTodo = {
      title: inputValue,
      id: v4(),
      completed: false,
    };
    dispatch(addTodo(newTodo));
    setInputValue("");
  };

  const deleteAllTodo = () => {
    dispatch(deleteAll());
  };

  return (
    <Container>
      <Header />
      <form onSubmit={submitHandler}>
        <input type="text" value={inputValue} onChange={changeInputValue} />
        <button type="submit" disabled={!inputValue}>
          Add
        </button>
      </form>

      <button onClick={deleteAllTodo}>delete All</button>

      <ul>
        {todo.map((item) => (
          <TodoList key={item.id} item={item} />
        ))}
      </ul>
    </Container>
  );
};

export default TodoForm;

const Container = styled.div`
  display: grid;
  padding: 10rem;
  label {
    display: block;
    color: #0f0e0e;
    text-transform: uppercase;
    margin-bottom: 0.5rem;
  }
  input {
    width: 15rem;
    height: 20px;
    margin: auto;
    border-radius: 4px;
    padding: 0.25rem;
    border: 1px solid #100d0d;
  }
`;
