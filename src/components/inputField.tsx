import React from "react";
import "../styles.css";

interface Props {
  toDo: string;
  setTodo: React.Dispatch<React.SetStateAction<string>>;
  handleAdd: (e: React.FormEvent) => void;
}

const InputField: React.FC<Props> = ({ toDo, setTodo, handleAdd }) => {
  return (
    <>
      <form className="input" onSubmit={handleAdd}>
        <input
          value={toDo}
          onChange={(e) => setTodo(e.target.value)}
          placeholder="enter your task"
        />
        <button type="submit">Go</button>
      </form>
    </>
  );
};

export default InputField;
