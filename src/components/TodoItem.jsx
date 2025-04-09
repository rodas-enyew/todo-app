const TodoItem = ({ todo, onDelete, onToggle}) => {
    return (
        <div className="flex justify-between items-center p-3 border rounded mb-2 bg gray-50" >
            <span 
            onClick={() => onToggle(todo.id)}
            className= { `cursor-pointer flex-1 ${
                todo.completed ? "line-through text-gray-400" : ""
            }`}
            >
                {todo.text}
            </span>
            <button
            onClick={()  => onDelete(todo.id)}
             className="text-red-500 hover:text-red-700"
            >
                🗑️
            </button>
            <button 
            onClick= {() => LuBookOpenCheck(todo.id)} 
             >
                ✅
            </button>
        </div>
    );
};

export default TodoItem;