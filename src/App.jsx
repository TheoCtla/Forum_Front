import { useState } from 'react'
import './App.css'
import Header from "./Header/Header"
import Login from './Login/Login';
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";

function App() {
  const [count, setCount] = useState(0)

  return (
    <BrowserRouter>
    <Header></Header>
      <Routes>
        <Route path="/"/>
        <Route path="/login" element={<Login/>}/>
        {/* <Route path="/register" element={<Register/>}/> */}
      </Routes>
    </BrowserRouter>
  )
}

export default App
