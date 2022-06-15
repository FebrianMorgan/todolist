import React from "react";
import "../App.css";
import { Input } from "@chakra-ui/react";
import { useTodo } from "../useTodo";

function FormInput() {
  const { addTodo } = useTodo();
  const inputRef = React.useRef();

  function handleFormSubmit(e) {
    e.preventDefault();
    if (inputRef.current.value.trim() === "") return;
    const ms = new Date();
    const element = { name: inputRef.current.value, key: ms.getMilliseconds() };
    addTodo(element);
    e.target.reset();
  }

  return (
    <form className="App" onSubmit={handleFormSubmit}>
      <Input placeholder="Add a task..." ref={inputRef} m="0 3"></Input>
    </form>
  );
}

export { FormInput };
