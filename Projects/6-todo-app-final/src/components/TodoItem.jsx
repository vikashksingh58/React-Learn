import styles from './TodoItem.module.css';

function TodoItem({item,onDeleteItem}) {
  
    return (
        <div className={`row ${styles.kgRow}`}>
          <div className="col-6">
            {item.name}
          </div>
          <div className="col-4">
            {item.dueDate}
          </div>
          <div className="col-2">
            <button className={`btn btn-danger ${styles.kgButton}`} onClick={()=>onDeleteItem(item.name)}>Delete</button>
          </div>
        </div>
    );
}
export default TodoItem;