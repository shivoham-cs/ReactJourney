import { useState } from 'react'

function App() {
  const [todo, setTodo] = useState("");
  const [todos, setTodos] = useState([]);

  function addTodo() {
    if (todo.trim() === "") return;
    setTodos([...todos, {text: todo, completed: false}]);
    setTodo("");
  }

  function toggleCompleted (indexToggle) {
    const updatedTodos = todos.map((item, index) => {
      if(index === indexToggle) {
        return { ...item, completed: !item.completed}
      }
      return item;
    })
    setTodos(updatedTodos);
  }

  function deleteTodo(indexToDelete) {
    setTodos(todos.filter((_, index) => index !== indexToDelete));
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
          <li key={index}>
            <button
              onClick={() => toggleCompleted(index)}
              style={{
                backgroundColor: item.completed ? "green" : "lightgray",
                border: item.completed ? "1px solid darkgreen" : "1px solid black",
                padding: "0 6px",
                borderRadius: "50%",
                cursor: "pointer",
              }}
            >
              &nbsp;
            </button>
            <span style={{textDecoration: item.completed ? "line-through" : "none"}}>
                {item.text}
            </span>
            {""}
            <button onClick={() => deleteTodo(index)}>
              Delete
            </button>
          </li>
        ))}
      </ul>
    </>
  )
}

export default App
