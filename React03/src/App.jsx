import { useState } from 'react'

function App() {
  const [todo, setTodo] = useState("");
  const [todos, setTodos] = useState([]);

  function addTodo() {
    if (todo.trim() === "") return;
    setTodos([...todos, todo]);
    setTodo("");
  }

  return (
    <>
      <input 
        type="text" 
        value={todo}
        onChange={(e) => setTodo(e.target.value)}
        placeholder='Type your todo...'
      />
      <button onClick={addTodo}>Add</button>
      <ul>
        {todos.map((item, index) => (
          <li key={index}>{item}</li>
        ))}
      </ul>
    </>
  )
}

export default App
