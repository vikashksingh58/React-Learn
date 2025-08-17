import styles from './AddTodo.module.css';

function AddTodo() {
    return (
        <div className={`row ${styles.kgRow}`}>
          <div className="col-6">
            <input type="text" placeholder="Enter Todo Here" />
          </div>
          <div className="col-4">
            <input type="date" />
          </div>
          <div className="col-2">
            <button className={`btn btn-success ${styles.kgButton}`}>Add</button>
          </div>
        </div>
    );
}
export default AddTodo;