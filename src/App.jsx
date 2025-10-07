import { Routes, Route } from 'react-router-dom'


import './index.css'
import Navbar from './Components/Navbar.jsx'
import Hero from './Components/Hero.jsx'
import Login from './Components/Login.jsx'

const App = () => {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={
            <>
                <Hero />
            </>
          }
        />
        <Route path="/login" element={<Login />} />
      </Routes>
    </>
  )
}

export default App