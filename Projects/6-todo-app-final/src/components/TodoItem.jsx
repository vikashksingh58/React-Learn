import styles from './TodoItem.module.css';
import { MdDeleteOutline } from "react-icons/md";

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
            <button className={`btn btn-danger ${styles.kgButton}`} onClick={()=>onDeleteItem(item.name)}>
              <MdDeleteOutline />
            </button>
          </div>
        </div>
    );
}
export default TodoItem;