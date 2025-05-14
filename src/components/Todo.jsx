import AddForm from "./AddForm";
import "./Todo.css";
import useTodoLogic from "../hooks/useTodoDispatch";

export default function Todo() {
  const { todos, deleteHandler, isDoneHandler } = useTodoLogic();
  return (
    <>
      <AddForm />
      <h2>Todos</h2>
      <ul>
        {todos.map((todo) => (
          <li key={todo.id}>
            <div className="texts">
              <p
                style={
                  todo.isDone
                    ? {
                        textDecoration: "line-through",
                        display: "inline-block",
                      }
                    : { textDecoration: "none", display: "inline-block" }
                }
              >
                {todo.task}
              </p>
              <button onClick={() => deleteHandler(todo)}>
                <i className="fa-solid fa-xmark"></i>
              </button>
            </div>
            <div className="btns">
              <button
                onClick={() => isDoneHandler(todo)}
                style={{ backgroundColor: "#FBEE0F" }}
              >
                {todo.isDone ? "Undone" : "Done"}
              </button>
            </div>
          </li>
        ))}
      </ul>
    </>
  );
}
