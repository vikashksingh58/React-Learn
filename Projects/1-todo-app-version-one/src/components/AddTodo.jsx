function AddTodo() {
    return (
        <div className="row kg_row">
          <div className="col-6">
            <input type="text" placeholder="Enter Todo Here" />
          </div>
          <div className="col-4">
            <input type="date" />
          </div>
          <div className="col-2">
            <button className="btn btn-success kg_button">Add</button>
          </div>
        </div>
    );
}
export default AddTodo;