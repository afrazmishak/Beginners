import { useEffect, useState } from "react"
import { TextInput } from "./components/TextInput"
import { DisplayText } from "./components/DisplayText"

const STORAGE_KEY = 'todo_tasks'

export function ToDoList() {
    const [tasks, setTasks] = useState(() => {
        const storedTasks = localStorage.getItem(STORAGE_KEY)
        return storedTasks ? JSON.parse(storedTasks) : []
    });

    useEffect(() => {
        localStorage.setItem(STORAGE_KEY, JSON.stringify(tasks))
    }, [tasks]);
    
    return (
        <>
            <TextInput setTasks={setTasks} />
            <DisplayText tasks={tasks} setTasks={setTasks} />
        </>
    )
}