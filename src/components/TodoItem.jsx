//port TodoCheck from "./TodoCheck"; 
//indivdual or single todo items
const TodoItem = ({ todo, onDelete, onToggle}) => {
    return (
        <div className="flex justify-between items-center p-3 border-0 rounded mb-1 " >
             {/* Left side: checkmark + text */}
      <div className="flex items-center gap-4 flex-1">
        {/* Checkmark Button */}
        <button
          onClick={() => onToggle(todo.id)}
          className={`w-5 h-5 flex items-center justify-center border rounded-full text-sm ${
            todo.completed ? "bg-green-700" : "bg-white text-green-400"
          }`}
        >
          {todo.completed && "✓"}
        </button>
        <span className="Cursor-pointer text-black-400">
            {todo.text}
        </span>
        </div>


            <button
            onClick={()  => onDelete(todo.id)}
             className="text-red-300 hover:text-red-700"
            >
                Delete 
            </button>
        </div>
    );
};

export default TodoItem;