import { Routes, Route } from 'react-router-dom'

import './index.css'
import Navbar from './Components/Navbar.jsx'
import Hero from './Components/Hero.jsx'
import Login from './Components/Login.jsx'
import About from './screens/About.jsx'
import Events from './screens/Events.jsx'
import Profile from './screens/Profile.jsx'
// import Contact from './screens/Contact.jsx'
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
        <Route path="/about" element={<About />} />
        <Route path="/events" element={<Events />} />
         <Route path="/profile" element={<Profile />} />
        {/* <Route path="/contact" element={<Contact />} /> */}
        
      </Routes>
    </>
  )
}

export default App