import { useState } from 'react'
import { Route,Routes } from 'react-router-dom'
import Invitation2 from './Components/Invitation2'
import Envelope2 from './Pages/Envelope2'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
     <Routes>
      <Route path='/' element={<Envelope2/>}/>

      <Route path='/invitation' element={<Invitation2/>}/>

     </Routes>
    </>
  )
}

export default App
