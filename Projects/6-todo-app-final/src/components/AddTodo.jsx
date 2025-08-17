import { useState } from 'react';
import styles from './AddTodo.module.css';

function AddTodo({onNewItem}) {
  const [todoText,setTodoText] = useState('');
  const [todoDate,setTodoDate] = useState('');
  const handleNameChange = (e) => {
    setTodoText(e.target.value)
  }
  const handleDateChange = (e) => {
    setTodoDate(e.target.value)
  }
  const handleAddButtonClicked = () => {
    onNewItem(todoText,todoDate);
    setTodoText('')
    setTodoDate('')
  };
    return (
        <div className={`row ${styles.kgRow}`}>
          <div className="col-6">
            <input type="text" placeholder="Enter Todo Here" value={todoText} onChange = {handleNameChange} />
          </div>
          <div className="col-4">
            <input type="date" value={todoDate} onChange = {handleDateChange} />
          </div>
          <div className="col-2">
            <button className={`btn btn-success ${styles.kgButton}`} onClick={handleAddButtonClicked}>Add</button>
          </div>
        </div>
    );
}
export default AddTodo;