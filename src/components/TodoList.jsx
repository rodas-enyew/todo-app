//list that hods all of the todos
import TodoItem from "./TodoItem";

const TodoList = ({ todos, onDelete, onToggle }) => {
    if (todos.length === 0) {
        return <p className="text-center text-gray-500">No tasks found.</p>;
    }
    return (
    <div> 
        {todos.map((todo) => (
         <TodoItem 
            key={todo.id} 
            todo={todo} 
            onDelete={onDelete} 
            onToggle={onToggle} 
       /> 
        ))}
            </div>
        );
};

export default TodoList;