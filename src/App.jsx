import {Routes, Route, Navigate } from 'react-router-dom'
import ToDoList from './ToDoList/ToDoList'
import Home from './Home/Home'
import './App.css'

function App() {
  return (
    <Routes>
      <Route path="/" element={<Navigate to="/todo-list" replace />} />
      
      <Route path="/home" element={<Home />} />
      <Route path="/todo-list" element={<ToDoList />} />
    </Routes>
  )
}

export default App