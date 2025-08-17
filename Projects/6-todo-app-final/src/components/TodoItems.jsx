import TodoItem from "./TodoItem";
import styles from './TodoItems.module.css';

function TodoItems({todoItems,onDeleteItem}) {
    return (
        <div className={styles.itemsContainer}>
        {todoItems.map(item=> 
          <TodoItem key={item.name} item={item} onDeleteItem={onDeleteItem} />
        )}
      </div>
    );
}
export default TodoItems;