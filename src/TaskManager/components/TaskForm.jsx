import { useState } from 'react'
import '../components/TaskForm.css'

export default function TaskForm () {
    const [title, setTitle] = useState('')
    const [description, setDescription] = useState('')

    const handleAddTask = async () => {
        if (!title) return alert ('Title required')
        
            await fetch ('http://localhost:5000/tasks', {
                method: 'POST',
                headers: {
                    'Content-Type' : 'application/json'
                },
                body: JSON.stringify({
                    title,
                    description
                })
            })

            setTitle('')
            setDescription('')
    }

    return (
        <div className='TaskContainer'>

            <h1>Task Manager</h1>
            
            <input 
                type="text" 
                placeholder="Task Title" 
                className='TaskComponents TaskTitle'
                value={title}
                onChange={e => setTitle(e.target.value)}                
            />

            <textarea 
                name="textdescription" 
                placeholder='Task Description' 
                className='TaskComponents TaskDescription' 
                rows={3}
                value={description}
                onChange={e => setDescription(e.target.value)}
            ></textarea>

            <button 
                className='TaskComponents TaskAddButton'
                onClick={handleAddTask}                
            >Add</button>
        </div>
    )
}