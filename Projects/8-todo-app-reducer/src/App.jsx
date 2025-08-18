import AppName from "./components/AppName";
import AddTodo from "./components/AddTodo";
import "./App.css";
import TodoItems from "./components/TodoItems";
import TodoItemContextProvider, {TodoItemsContext} from "./store/toto-items-store";
import Welcome from "./components/Welcome";




function App() {
  
  return (
    <TodoItemContextProvider>
      <center className="container">
        <AppName />
        <AddTodo />
        <Welcome />
        <TodoItems />
      </center>
    </TodoItemContextProvider>
  );
}

export default App;
