import React from "react";
import "./App.css";
import { useLocalStorageState } from "./utils";
import { FormInput } from "./components/form-input.js";
import { FormCheckbox } from "./components/form-checkbox";
import { ChakraProvider, Container, Text, Box } from "@chakra-ui/react";

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
      <Container maxWidth="800px" p="6">
        <Box maxW="100%" borderWidth="1px" borderRadius="lg" overflow="hidden">
          <Box
            fontWeight="semibold"
            letterSpacing="wide"
            p="6"
            display="flex"
            flexDirection="column"
          >
            <Text align="center" fontSize="4xl" m="3">
              TODOLIST
            </Text>
            <FormInput onSubmitHandle={handleSubmit} />
            <Box className="todolist">
              <FormCheckbox
                onDelete={handleDelete}
                onCheck={handleCheck}
                todolistArr={todolist}
                finishedArr={finishedList}
              />
            </Box>
          </Box>
        </Box>
      </Container>
    </ChakraProvider>
  );
}

export default App;
