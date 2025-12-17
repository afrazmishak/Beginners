import { useState } from "react"
import { TextInput } from "./components/TextInput"
import { DisplayText } from "./components/DisplayText"

export function ToDoList() {
    const [tasks, setTasks] = useState([]);
    
    return (
        <div>
            <TextInput setTasks={setTasks} />
            <DisplayText tasks={tasks} />
        </div>
    )
}