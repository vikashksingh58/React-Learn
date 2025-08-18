import { createContext, useReducer } from "react";


export const TodoItemsContext = createContext({
    todoItems: [],
    addItem: () => {},
    deleteItem: () => {}
});

const todoReducerItem = (currentTodoItems, action) => {
  let todoItems = currentTodoItems
  if( action.type === 'ADD_ITEM' ) {
    todoItems = [...todoItems,{'name': action.payload.itemName, 'dueDate': action.payload.itemDueDate}];
  }else if( action.type === 'DELETE_ITEM' ) {
    todoItems = todoItems.filter(
      itemData => !(itemData.name === action.payload.itemName)
    );
  }
  return todoItems
}

const TodoItemContextProvider = ({children}) => {
    const [todoItems, dispatchTodoItems] = useReducer(todoReducerItem,[]);

    const addItem = (itemName,itemDueDate) => {
        const newActionItem = {
        type: 'ADD_ITEM',
        payload: {
            itemName,
            itemDueDate
        } 
        }
        dispatchTodoItems(newActionItem)
    }
    const deleteItem = (todoItemName) => {
        const deleteActionItem = {
        type: 'DELETE_ITEM',
        payload: {
            itemName: todoItemName
        } 
        }
        dispatchTodoItems(deleteActionItem)
    }
    return (
        <TodoItemsContext.Provider value={{todoItems,addItem,deleteItem}}>
            {children}
        </TodoItemsContext.Provider>
    );
}

export default TodoItemContextProvider;


