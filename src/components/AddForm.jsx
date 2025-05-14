import { useState } from "react";
import { useDispatch } from "react-redux";
import { addTodo } from "../features/todo/todoSlice";
import "./AddForm.css";

export default function AddForm() {
  const [task, setTask] = useState("");
  const dispatch = useDispatch();

  const submitHandler = (e) => {
    e.preventDefault();
    dispatch(addTodo(task));
    setTask("");
  };
  return (
    <>
      <div className="hero">
        <h1>
          <i className="fa-solid fa-clipboard-list"></i> To Do List
        </h1>
      </div>
      <div className="addSection">
        <input
          type="text"
          onChange={(e) => setTask(e.target.value)}
          value={task}
        />
        <button onClick={submitHandler}>
          <i className="fa-solid fa-plus"></i>
        </button>
      </div>
    </>
  );
}
