
import './App.css'
import { Route, Routes } from 'react-router'
import { createContext, useState } from "react"
import Heders from "./componnet/application-layout/Heders"
import HomePost from "./pages/HomePost"
import Login from './pages/Login'
import SignUp from './pages/SignUp'
import SingelPost from './pages/SingelPost'
import AddPost from './pages/AddPost'
import NavBar from './pages/NavBar'
import Home from './pages/home'
export const tokenContex = createContext<{ token: string; setToken: React.Dispatch<React.SetStateAction<string>>; } | null>(null)
function App() {

  const [token, setToken] = useState("")
  // const [user, setUser] = useState("")
  return (
    <div className='mainApp' >
      <Heders />
      <tokenContex.Provider value={{ token, setToken }}>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path='/HomePost' element={<HomePost />}>
            <Route path='' element={<NavBar />} />
          </Route>
          <Route path="/login" element={<Login />} />
          <Route path="/signUp" element={<SignUp />} />
          <Route path="/:id" element={<SingelPost />}>
            <Route path='' element={<NavBar />} />
          </Route>
          <Route path="/AddPost" element={<AddPost />}>
            <Route path='' element={<NavBar />} />
          </Route>
        </Routes>
      </tokenContex.Provider>

    </div>
  )
}
export default App
