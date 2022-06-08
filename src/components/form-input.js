import React from "react";
import { Input } from "@chakra-ui/react";

function FormInput({ onSubmitHandle }) {
  const inputRef = React.useRef();

  function handleSubmit(e) {
    e.preventDefault();
    if (!inputRef.current.value) return;
    // window.localStorage.setItem("");
    const ms = new Date();
    const element = { name: inputRef.current.value, key: ms.getMilliseconds() };
    onSubmitHandle(element);
    e.target.reset();
  }

  return (
    <form className="App" onSubmit={handleSubmit}>
      <Input ref={inputRef}></Input>
    </form>
  );
}

export { FormInput };
