import TodoItem from "./TodoItem";
import styles from './TodoItems.module.css';

function TodoItems({todoItems}) {
    return (
        <div className={styles.itemsContainer}>
        {todoItems.map(item=> 
          <TodoItem key={item.name} item={item} />
        )}
      </div>
    );
}
export default TodoItems;