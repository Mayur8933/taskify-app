import React from "react";
import { ToDo } from "../model";
import SingleTodo from "./singleTodo";
import "../styles.css";

interface Props {
  todos: ToDo[];
  setToDos: React.Dispatch<React.SetStateAction<ToDo[]>>;
}

const ToDoComp: React.FC<Props> = ({ todos, setToDos }) => {
  console.log("***todos", todos);
  return (
    <>
      <div className="todoComp">
        {todos.map((val) => {
          return (
            <div className="todoList" key={val.id}>
              <SingleTodo todo={val} todos={todos} setToDos={setToDos} />
            </div>
          );
        })}
      </div>
    </>
  );
};

export default ToDoComp;
