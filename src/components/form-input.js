import React from "react";
import "../App.css";
import { Input } from "@chakra-ui/react";

function FormInput({ onSubmitHandle }) {
  const inputRef = React.useRef();

  function handleSubmit(e) {
    e.preventDefault();
    if (!inputRef.current.value) return;
    const ms = new Date();
    const element = { name: inputRef.current.value, key: ms.getMilliseconds() };
    onSubmitHandle(element);
    e.target.reset();
  }

  return (
    <form className="App" onSubmit={handleSubmit}>
      <Input placeholder="Add a task..." ref={inputRef} m="0 3"></Input>
    </form>
  );
}

export { FormInput };
