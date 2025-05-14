import { useSelector, useDispatch } from "react-redux";
import { deleteTodo, markAsDone } from "../features/todo/todoSlice";

const useTodoLogic = () => {
  const todos = useSelector((state) => state.todos);
  const dispatch = useDispatch();

  const deleteHandler = (todo) => {
    dispatch(deleteTodo(todo.id));
  };

  const isDoneHandler = (todo) => {
    dispatch(markAsDone(todo.id));
  };

  return { todos, deleteHandler, isDoneHandler };
};

export default useTodoLogic;
