import { useEffect, useState } from "react"
import './ToDoList.css'
import { TextInput } from "./components/TextInput"
import { DisplayText } from "./components/DisplayText"

const STORAGE_KEY = 'todo_tasks'
const THEME_KEY = 'todo_theme'

export function ToDoList() {
    const [tasks, setTasks] = useState(() => {
        const storedTasks = localStorage.getItem(STORAGE_KEY)
        return storedTasks ? JSON.parse(storedTasks) : []
    });

    const [darkMode, setDarkMode] = useState(() => {
        return localStorage.getItem(THEME_KEY) === 'dark'
    })

    useEffect(() => {
        localStorage.setItem(STORAGE_KEY, JSON.stringify(tasks))
    }, [tasks]);

    useEffect(() => {
        localStorage.setItem(THEME_KEY, darkMode ? 'dark' : 'light')
        document.body.classList.toggle('dark', darkMode)
    }, [darkMode]);
    
    return (
        <>
            
            <TextInput setTasks={setTasks} />
            <DisplayText tasks={tasks} setTasks={setTasks} />
            <button
                onClick={() => setDarkMode(prev => !prev)}
            >
                {darkMode ? '☀️ Light Mode' : '🌙 Dark Mode'}
            </button>
        </>
    )
}