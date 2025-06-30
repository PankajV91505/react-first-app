import TodoItem from './TodoItem';

const TodoItems = ({ todoItems, onDelete }) => {
  return (
    <div className="items-container">
      {todoItems.map((item, index) => (
        <TodoItem
          key={index}
          name={item.name}
          date={item.date}
          onDelete={() => onDelete(index)}
        />
      ))}
    </div>
  );
};

export default TodoItems;
