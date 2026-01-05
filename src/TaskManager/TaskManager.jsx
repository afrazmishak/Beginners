import { useState, useEffect } from "react"
import TaskForm from "./components/TaskForm"
import { TaskList } from "./components/TaskList"

export default function TaskManager () {
    const [tasks, setTasks] = useState([])

    const fetchTasks = async () => {
        const res = await fetch('http://localhost:5000/tasks')
        const data = await res.json()
        setTasks(data)
    }

    useEffect(() => {
        fetchTasks()
    }, [])

    return (
        <>
            <TaskForm onTaskAdded={fetchTasks} />
            <TaskList  tasks={tasks}/>
        </>
    )
}