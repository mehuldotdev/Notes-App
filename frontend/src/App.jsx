import {Routes, Route} from "react-router"
import React from 'react'
import Homepage from "./pages/Homepage.jsx"
import Createpage from "./pages/CreatePage"
import NoteDetailpage from "./pages/NoteDetailpage.jsx"
import './App.css';
import { Toaster, toast } from "react-hot-toast"


const App = () => {
  return (
    <div className="bg-black">
      <Routes>
        <Route path ="/" element = {<Homepage/>}></Route>
        <Route path ="/create" element = {<Createpage/>}></Route>
        <Route path ="/note/:id" element = {<NoteDetailpage/>}></Route>
      </Routes>

    </div>
  )
}

export default App