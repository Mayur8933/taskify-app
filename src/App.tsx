import React, { useState } from "react";
import InputField from "./components/inputField";
import { ToDo } from "./model";
import ToDoComp from "./components/todos";
import "./styles.css";

const App: React.FC = () => {
  const [toDo, setToDo] = useState<string>("");
  const [toDos, setToDos] = useState<ToDo[]>([]);

  const handleAdd = (e: React.FormEvent) => {
    e.preventDefault();

    if (toDo) {
      setToDos([...toDos, { id: Date.now(), todo: toDo, isDone: false }]);
      setToDo("");
    }
  };

  return (
    <>
      <div className="projectTitle">Taskify</div>
      <InputField toDo={toDo} setTodo={setToDo} handleAdd={handleAdd} />
      <ToDoComp todos={toDos} setToDos={setToDos} />
    </>
  );
};

export default App;
