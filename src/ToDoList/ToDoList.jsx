import { useEffect, useState } from "react"
import './ToDoList.css'
import { TextInput } from "./components/TextInput"
import { DisplayText } from "./components/DisplayText"
import { Footer } from "./components/Footer"

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
        <div className="ToDoLayout">
            <div className="FixedInput">
                <TextInput setTasks={setTasks} />
            </div>

            <div className="ScrollableList">
                <DisplayText tasks={tasks} setTasks={setTasks} />
            </div>

            <div>
                <Footer />
            </div>

            <button
                className="DarkModeToggle"
                onClick={() => setDarkMode(prev => !prev)}
            >
                {darkMode ? '☀️' : '🌙'}
            </button>
        </div>
    )
}