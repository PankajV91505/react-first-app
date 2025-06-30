import TodoItem from "./TodoItem";

const TodoItems = ({todoItems}) =>{
    return (
      <div className="items-container">
        {todoItems.map(item => <TodoItem  todoname={item.name} todoDate={item.dueDate}></TodoItem>)}
      </div>
    );
}

export default TodoItems;
