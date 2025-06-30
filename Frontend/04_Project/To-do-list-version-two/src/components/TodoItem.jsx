const TodoItem = ({ name, date, onDelete }) => {
  return (
    <div className="container text-center">
      <div className="row m-2">
        <div className="col-6">{name}</div>
        <div className="col-4">{date}</div>
        <div className="col-2">
          <button onClick={onDelete} className="btn btn-danger">Delete</button>
        </div>
      </div>
    </div>
  );
};

export default TodoItem;
