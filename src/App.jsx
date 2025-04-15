import { useEffect, useState } from "react"; //useeffect is used to perform side quests(fetching data, interacting with browser)
import TodoInput from "./components/TodoInput";
import TodoList from "./components/TodoList";


function App() {
  const [todos, setTodos] = useState([]);
  const [search, setSearch] = useState("");

  //const name = "react"

  //console.log(tasks);
  useEffect(() => {
    const storedTodos = JSON.parse(localStorage.getItem("todos"));
    if (storedTodos) setTodos(storedTodos);
  }, []);


  useEffect(() => {
    if (todos.length > 0 ){
      localStorage.setItem("todos", JSON.stringify(todos));
  }
 }, [todos]);


  const addTodo = (text) => {
    const newTodo = {id: Date.now(), text, completed: false};
    setTodos([newTodo, ...todos]);
  };

  const deleteTodo = (id) => {
    setTodos(todos.filter((todo) => todo.id !== id));
  };

 const toggleTodo = (id) => {
  setTodos (
    todos.map((todo) => 
      todo.id === id ? {...todo, completed: !todo.completed} : todo
  )
  );
 };

 const clearTodos = () =>{
  setTodos([]);
  localStorage.removeItem("todos");
 }

  const filteredTodos = todos.filter ((todo) =>
    todo.text.toLowerCase().includes(search.toLowerCase())
);

  return (
    <div className="max-w-md mx-auto p-8 mt-30 bg-white shadow-2xl rounded">
      <h1 className="text-2xl font-bold mb-4">Advanced Todo App </h1>
      <TodoInput onAdd={addTodo} />

        <input
        type="text"
        value={search}
        onChange={(e) => setSearch(e.target.value)}
        placeholder="Search tasks ..."
        className="mb-4 w-full p-2 border rounded"
        />
        <p className="text-gray-500 mb-2">
          You have {filteredTodos.length} task
          {filteredTodos.length !== 1 ? "s" : ""}
          </p>
          <TodoList
          todos={filteredTodos}
          onDelete={deleteTodo}
          onToggle={toggleTodo}
          />
          {/* clear todos button*/}
          <button
          onClick={clearTodos}
          className="mt-3 px-1 bg-red-500 text-white rounded hover:bg-red-600"
          >
            Clear All
          </button>
          </div>
          );
             }
export default App; 