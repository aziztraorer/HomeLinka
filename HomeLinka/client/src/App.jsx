import { BrowserRouter as Router, Routes, Route, BrowserRouter } from 'react-router-dom'
import Home from './pages/Home'
import SignIn from './pages/signIn'
import SignUp from './pages/signUp'
import About from './pages/About'
import Profile from './pages/profile'
import Header from './components/Header'

function App() {
  return ( <BrowserRouter>
  <Header />
  <Routes>
    <Route path="/" element={<Home />} />
    <Route path="/sign-In" element={<SignIn />} />
    <Route path="/sign-Up" element={<SignUp />} />
    <Route path="/about" element={<About />} />
    <Route path="/profile" element={<Profile />} />
  </Routes>
  
  </BrowserRouter>
  )
}

export default App
