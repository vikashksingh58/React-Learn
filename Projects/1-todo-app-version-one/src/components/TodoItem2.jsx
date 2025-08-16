function TodoItem2() {
    let todoName = "Go to colledge";
    let todoDate = "18/08/2025";
    return (
        <div className="row kg_row">
          <div className="col-6">
            {todoName}
          </div>
          <div className="col-4">
            {todoDate}
          </div>
          <div className="col-2">
            <button className="btn btn-danger kg_button">Delete</button>
          </div>
        </div>
    );
}
export default TodoItem2;