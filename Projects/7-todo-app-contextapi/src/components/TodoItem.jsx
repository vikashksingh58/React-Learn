import { useContext } from 'react';
import styles from './TodoItem.module.css';
import { MdDeleteOutline } from "react-icons/md";
import { TodoItemsContext } from '../store/toto-items-store';

function TodoItem({item}) {
  const {deleteItem} = useContext(TodoItemsContext);
  
    return (
        <div className={`row ${styles.kgRow}`}>
          <div className="col-6">
            {item.name}
          </div>
          <div className="col-4">
            {item.dueDate}
          </div>
          <div className="col-2">
            <button className={`btn btn-danger ${styles.kgButton}`} onClick={()=>deleteItem(item.name)}>
              <MdDeleteOutline />
            </button>
          </div>
        </div>
    );
}
export default TodoItem;