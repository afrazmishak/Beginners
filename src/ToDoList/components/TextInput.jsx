import { useState } from 'react'
import './TextInput.css'

export function TextInput({ setTasks }) {
    const [inputValue, setInputValue] = useState('')

    const handleSubmit = () => {
        if (!inputValue.trim()) return;

        setTasks(prev => [...prev, inputValue])
        setInputValue('')
    }

    return (
        <div className='TextInputContainer'>
            <input 
                type="text" 
                placeholder="Add a new task…"
                className="ToDoList-InputTextBox"
                value={inputValue}
                onChange={(e) => setInputValue(e.target.value)}
            />

            <button 
                type="button"
                className="ToDoList-SubmitButton"
                onClick={handleSubmit}
            >Add</button>
        </div>
    )
}