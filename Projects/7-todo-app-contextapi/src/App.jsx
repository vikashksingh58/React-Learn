import AppName from "./components/AppName";
import AddTodo from "./components/AddTodo";
import TodoItem from "./components/TodoItem";
import "./App.css";
import TodoItems from "./components/TodoItems";
import { useState } from "react";
import {TodoItemsContext} from "./store/toto-items-store";
import Welcome from "./components/Welcome";

function App() {
  let initialTodoItems = [
    {'name': 'Buy Milk', 'dueDate':'16/08/2025'},
    {'name': 'Go to college!', 'dueDate':'18/08/2025'}
  ];
  const [todoItems,setTodoItems] = useState(initialTodoItems);

  const addItem = (itemName,itemDueDate) => {
    if(itemName != '' && itemDueDate != ''){
      let items = [...todoItems,{'name': itemName, 'dueDate':itemDueDate}];
      setTodoItems(items);
      itemName=''
      itemDueDate=''
    }
    
  }
  const deleteItem = (todoItemName) => {
    let newItems = todoItems.filter(
      itemData => !(itemData.name === todoItemName)
    );
    setTodoItems(newItems);
  }
  return (
    <TodoItemsContext.Provider value={{todoItems,addItem,deleteItem}}>
    <center className="container">
      <AppName />
      <AddTodo />
      <Welcome />
      <TodoItems />
      
    </center>
    </TodoItemsContext.Provider>
  );
}

export default App;
