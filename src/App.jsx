import Todo from "./components/todo";
import "./App.css";
import { Provider } from "react-redux";
import { store } from "./app/store";

function App() {
  return (
    <div className="appContainer">
      <div className="container">
        <Provider store={store}>
          <Todo />
        </Provider>
      </div>
    </div>
  );
}

export default App;
