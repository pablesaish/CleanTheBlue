import { Routes, Route } from 'react-router-dom'


import './index.css'
import Navbar from './Components/Navbar.jsx'
import Hero from './Components/Hero.jsx'
import Login from './Components/Login.jsx'
// import Done from './Components/Done.jsx'

const App = () => {
  return (
    <>
      {/* <Done /> */}
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