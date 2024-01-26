import React, { useEffect, useState } from "react";
import { ToDo } from "../model";
import { AiFillEdit, AiFillDelete } from "react-icons/ai";
import { MdDone } from "react-icons/md";
import RoundStyleComp from "./roundStyleComp";

type Props = {
  todo: ToDo;
  todos: ToDo[];
  setToDos: React.Dispatch<React.SetStateAction<ToDo[]>>;
};

const SingleTodo: React.FC<Props> = ({ todo, todos, setToDos }) => {
  const [edit, setEdit] = useState<boolean>(false);
  const [editTodo, setEditTodo] = useState<string>(todo.todo);

  const handleDelete = (id: number) => {
    setToDos(todos.filter((todo) => todo.id !== id));
  };

  const handleDone = (id: number) => {
    setToDos(
      todos.map((todo) =>
        todo.id === id ? { ...todo, isDone: !todo.isDone } : todo
      )
    );
  };

  const handleEdit = () => {
    if (!edit && !todo.isDone) {
      setEdit(!edit);
    }
  };

  const handleSubmitAfterEdit = (e: React.FormEvent, id: number) => {
    e.preventDefault();

    setToDos(
      todos.map((todo) => (todo.id === id ? { ...todo, todo: editTodo } : todo))
    );

    setEdit(false);
  };

  return (
    <form onSubmit={(e) => handleSubmitAfterEdit(e, todo.id)}>
      {edit ? (
        <input onChange={(e) => setEditTodo(e.target.value)} />
      ) : todo.isDone ? (
        <s>{todo.todo}</s>
      ) : (
        <span>{todo.todo}</span>
      )}

      <RoundStyleComp icon={<AiFillEdit onClick={() => handleEdit()} />} />

      <RoundStyleComp
        icon={<AiFillDelete onClick={() => handleDelete(todo.id)} />}
      />

      <RoundStyleComp icon={<MdDone onClick={() => handleDone(todo.id)} />} />
    </form>
  );
};

export default SingleTodo;
