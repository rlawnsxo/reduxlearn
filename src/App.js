import "./App.css";
import TodoTemplate from "./Component/TodoTemplate";
import TodoInput from "./Component/TodoInput";
import TodoList from "./Component/TodoList";

function App() {
  return (
    <TodoTemplate>
      <TodoInput />
      <TodoList />
    </TodoTemplate>
  );
}

export default App;
