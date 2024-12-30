import { useState } from 'react'

import './App.css'
import Sales from './components/Sales'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div>
      <Sales></Sales>
    </div>
  )
}

export default App
