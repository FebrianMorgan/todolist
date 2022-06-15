import React from "react";
import { useLocalStorageState } from "./utils";

const defaultValue = {
  todolist: [],
  finishedList: [],
  addTodo: () => {},
  filterTodo: () => {},
  deleteTodo: () => {},
};

const TodoContext = React.createContext(defaultValue);

function TodoProvider({ children }) {
  const [todolist, setTodolist] = useLocalStorageState("todo", []);
  const [finishedList, setFinishedList] = useLocalStorageState("finish", []);

  function addTodo(element) {
    setTodolist((prev) => [...prev, element]);
  }

  function filterTodo(event, element) {
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

  function deleteTodo(element, status) {
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
    <TodoContext.Provider
      value={{
        todolist,
        finishedList,
        addTodo,
        filterTodo,
        deleteTodo,
      }}
    >
      {children}
    </TodoContext.Provider>
  );
}

function useTodo() {
  return React.useContext(TodoContext);
}

export { useTodo, TodoProvider };
