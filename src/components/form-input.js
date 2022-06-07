import React from "react";
import { Input } from "@chakra-ui/react";

function FormInput({ onSubmitChange }) {
  const inputRef = React.useRef();

  function handleSubmit(e) {
    e.preventDefault();

    onSubmitChange((prev) => [
      ...prev,
      {
        name: inputRef.current.value,
        value: false,
      },
    ]);
  }

  return (
    <form className="App" onSubmit={handleSubmit}>
      <Input ref={inputRef}></Input>
    </form>
  );
}

export { FormInput };
