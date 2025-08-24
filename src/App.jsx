import { useState } from 'react'
import './App.css'
import HarryPotterCodingTodo from './codingTodo'

function App() {
  const [count, setCount] = useState(0)

  return (
  <>
  <HarryPotterCodingTodo />
  </>
  )
}

export default App
