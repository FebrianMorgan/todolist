import React from "react";
import "./App.css";
import { useLocalStorageState } from "./utils";
import { FormInput } from "./components/form-input.js";
import { FormCheckbox } from "./components/form-checkbox";
import { ChakraProvider } from "@chakra-ui/react";

function App() {
  const [todolist, setTodolist] = useLocalStorageState("todo", []);
  const [finishedList, setFinishedList] = useLocalStorageState("finish", []);

  function handleSubmit(element) {
    setTodolist((prev) => [...prev, element]);
  }

  function handleCheck(event, element) {
    if (event.target.checked) {
      setFinishedList((finish) => [...finish, element]);
      setTodolist((todo) => {
        return [...todo.filter((item) => item.key !== element.key)];
      });
    } else {
      setTodolist((todo) => [...todo, element]);
      setFinishedList((finish) => {
        return [...finish.filter((item) => item.key !== element.key)];
      });
    }
  }

  function handleDelete(element, status) {
    if (status === "unchecked") {
      setTodolist((todo) => {
        return [...todo.filter((item) => item.key !== element.key)];
      });
    } else {
      setFinishedList((finish) => {
        return [...finish.filter((item) => item.key !== element.key)];
      });
    }
  }

  return (
    <ChakraProvider>
      <div className="App">TODOLIST</div>
      <FormInput onSubmitHandle={handleSubmit} />
      <FormCheckbox
        onDelete={handleDelete}
        onCheck={handleCheck}
        todolistArr={todolist}
        finishedArr={finishedList}
      />
    </ChakraProvider>
  );
}

export default App;
