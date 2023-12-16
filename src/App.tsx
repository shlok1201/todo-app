import { useState } from 'react'
import './App.css'

interface Todo {
  id: number;
  value: string;
}

function App() {
  const [todos, setTodos] = useState<Todo[]>([])
  const [value, setValue] = useState("")

  const addTodo = () => {
    const newTodo = {
      id: todos.length,
      value, 
    }

    setTodos((prev) => [...prev, newTodo])
    setValue("")
  }
  
  return (
    <div>
      <form onSubmit={(e) => {
        e.preventDefault()
        addTodo()
      }}>
        <input type="text" value={value} onChange={(e) => setValue(e.target.value)} />
        <button type='submit'>Add</button>
      </form>
      <div>
        {todos.map(t => (
          <div key={t.id}>
            <p>{t.value}</p>
          </div>
        ))}
      </div>
    </div>
  )
}

export default App
