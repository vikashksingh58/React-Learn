import { useContext, useRef } from 'react';
import styles from './AddTodo.module.css';
import { MdAddBox } from "react-icons/md";
import { TodoItemsContext } from '../store/toto-items-store';

function AddTodo() {//addItem
  const {addItem} = useContext(TodoItemsContext);
  const todoText = useRef('')
  const todoDate = useRef('')

  const handleAddButtonClicked = () => {
    addItem(todoText.current.value,todoDate.current.value);
    todoText.current.value = ''
    todoDate.current.value = ''
  };
    return (
        <div className={`row ${styles.kgRow}`}>
          <div className="col-6">
            <input type="text" placeholder="Enter Todo Here" ref={todoText} />
          </div>
          <div className="col-4">
            <input type="date" ref={todoDate} />
          </div>
          <div className="col-2">
            <button className={`btn btn-success ${styles.kgButton}`} onClick={handleAddButtonClicked}><MdAddBox /></button>
          </div>
        </div>
    );
}
export default AddTodo;