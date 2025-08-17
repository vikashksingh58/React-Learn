import AppName from "./components/AppName";
import AddTodo from "./components/AddTodo";
import TodoItem from "./components/TodoItem";
import "./App.css";
import TodoItems from "./components/TodoItems";
import { useState } from "react";


function App() {
  let initialTodoItems = [
    {'name': 'Buy Milk', 'dueDate':'16/08/2025'},
    {'name': 'Go to college!', 'dueDate':'18/08/2025'}
  ];
  const [todoItems,setTodoItems] = useState(initialTodoItems);
  const handleNewItem = (itemName,itemDueDate) => {
    if(itemName != '' && itemDueDate != ''){
      let items = [...todoItems,{'name': itemName, 'dueDate':itemDueDate}];
      setTodoItems(items);
      itemName=''
      itemDueDate=''
    }
    
  }
  const handleDeleteItem = (todoItemName) => {
    let newItems = todoItems.filter(
      itemData => !(itemData.name === todoItemName)
    );
    setTodoItems(newItems);
  }
  return (
    <center className="container">
      <AppName />
      <AddTodo onNewItem={handleNewItem} />
      {!todoItems.length && <p className="mt-2">Enjoy your day.</p> }
      <TodoItems todoItems={todoItems} onDeleteItem={handleDeleteItem} />
      
    </center>
  );
}

export default App;
