import { useState } from 'react'

import './App.css'
import Calculator from './components/Calculator'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div>
      |<Calculator></Calculator>
    </div>
  )
}

export default App
