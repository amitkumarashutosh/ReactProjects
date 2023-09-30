import { useState } from 'react'
import Navbar from './Navbar'
import Section from './Section'

function App() {
  const [count, setCount] = useState(0)
  function handler(){
    setCount(count+1)
    console.log(count)
  }
  return (
    <div className='container'>
      <Navbar />
      <Section />
    </div>
  )
}

export default App
