
import './App.css'
import { Route, Routes } from 'react-router'
// import { createContext, useState,useEffect } from "react"
import Heders from "./componnet/application-layout/Heders"
import HomePost from "./pages/HomePost"
import Login from './pages/Login'
import SignUp from './pages/SignUp'
import SingelPost from './pages/SingelPost'
import AddPost from './pages/AddPost'
import NavBar from './pages/NavBar'
import Home from './pages/home'
function App() {
  return (
    <div className='mainApp' >
      <Heders />
      <NavBar/>
      <Routes>
        <Route path="/" element={<Home/>} />
        <Route path="/HomePost" element={<HomePost />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signUp" element={<SignUp />} />
        <Route path="/:id" element={<SingelPost />} />
        <Route path="/AddPost" element={<AddPost />} />
      </Routes>
    </div>
  )
}
export default App
