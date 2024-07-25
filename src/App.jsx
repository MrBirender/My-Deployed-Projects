import Input from "./compenents/Input";
import TodoList from "./compenents/TodoList";
import { useEffect, useState } from "react";

export default function App() {
  const [todo, setTodo] = useState([]);
  const [value, setValue] = useState("");

  const persistData = (newList) => {
    localStorage.setItem("todoTask", JSON.stringify({ todoTask: newList }));
  };

  const handleAddTodo = (newTodo) => {
    let tempTodo = [...todo, newTodo];
    persistData(tempTodo);
    setTodo(tempTodo);
  };

  const handleDelete = (index) => {
    let tempTodo = [...todo];
    tempTodo.splice(index, 1);
    persistData(tempTodo);
    setTodo(tempTodo);
  };

  const handleEdit = (index) => {
    let todoToEdit = todo[index];
    setValue(todoToEdit);

    handleDelete(index);
  };

  useEffect(() => {
    if (!localStorage) {
      return;
    }

    let localData = localStorage.getItem("todoTask");
    if (!localData) {
      return;
    }
    localData = JSON.parse(localData).todoTask
    setTodo(localData);
  }, []);

  return (
    <main>
      <Input handleAddTodo={handleAddTodo} value={value} setValue={setValue} />
      <TodoList
        todo={todo}
        handleDelete={handleDelete}
        handleEdit={handleEdit}
      />
    </main>
  );
}
