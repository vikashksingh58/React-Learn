import { useContext } from "react";
import TodoItem from "./TodoItem";
import styles from './TodoItems.module.css';
import { TodoItemsContext } from "../store/toto-items-store";

function TodoItems({onDeleteItem}) {
  const {todoItems} = useContext(TodoItemsContext);
    return (
        <div className={styles.itemsContainer}>
        {todoItems.map(item=> 
          <TodoItem key={item.name} item={item} onDeleteItem={onDeleteItem} />
        )}
      </div>
    );
}
export default TodoItems;