//input feild for adding tasks

import { useState } from "react";

const TodoInput = ({ onAdd }) => {
    const [task, setTask] = useState("");
    
    const handleSubmit = (e) => {
        e.preventDefault(); 
        if (!task.trim()) return; 
        onAdd(task); 
        setTask(""); 
    };
 return (
 <form onSubmit={handleSubmit} className="flex gap-2 mb-4">
    <input 
    value={task}
    onChange={(e) => setTask(e.target.value)}
    className="border p-2 rounded w-full"
    placeholder="New task..."
    />
    <button 
    type="submit"
    className="bg-blue-900 text-white px-4 py-2 rounded" 
    >
       +
       
    </button>
    </form>
    
);
};

export default TodoInput; 