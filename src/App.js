import React from "react";
import "./App.css";
import { FormInput } from "./components/form-input.js";
import { ChakraProvider } from "@chakra-ui/react";

function App() {
  const [todolist, setTodolist] = React.useState([]);
  return (
    <ChakraProvider>
      <div className="App">TODOLIST</div>
      <FormInput onSubmitChange={setTodolist} />
    </ChakraProvider>
  );
}

export default App;
