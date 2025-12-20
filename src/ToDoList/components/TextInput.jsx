import { useState } from 'react'
import './TextInput.css'

export function TextInput({ setTasks }) {
    const [inputValue, setInputValue] = useState('')

    const handleSubmit = () => {
        const trimmedValue = inputValue.trim()
        if (!trimmedValue) return;

        const newTask = {
            id: crypto.randomUUID(),
            text: trimmedValue,
            completed: false
        }

        setTasks(prev => [...prev, newTask])
        setInputValue('')
    }

    return (
        <div className='TextInputContainer'>
            <input 
                type="text" 
                placeholder="Add a new task …"
                className="ToDoList-InputTextBox"
                value={inputValue}
                onChange={(e) => setInputValue(e.target.value)}
                onKeyDown={(e) => e.key === 'Enter' && handleSubmit()}
            />

            <button 
                type="button"
                className="ToDoList-SubmitButton"
                onClick={handleSubmit}
                disabled={!inputValue.trim()}
            >Add</button>
        </div>
    )
}