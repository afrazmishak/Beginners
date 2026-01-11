import { useState } from "react"

export function TaskList({ tasks, onTaskUpdated }) {
    const [editingId, setEditingId] = useState(null)
    const [editTitle, setEditTitle] = useState('')
    const [editDescription, setEditDescription] = useState('')

    const startEdit = task => {
        setEditingId(task.id)
        setEditTitle(task.title)
        setEditDescription(task.description)
    }

    const saveEdit = async id => {
        await fetch(`http://localhost:5000/tasks/${id}`, {
            method: 'PUT',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({
                title: editTitle,
                description: editDescription
            })
        })

        setEditingId(null)
        onTaskUpdated()
    }

    const deleteTask = async id => {
        await fetch(`http://localhost:5000/tasks/${id}`, {
            method: 'DELETE'
        })

        onTaskUpdated()
    }

    return (
        <div>
            {tasks.map(task => (
                <div key={task.id}>
                    {editingId === task.id ? (
                        <>
                            <input
                                value={editTitle}
                                onChange={e => setEditTitle(e.target.value)}
                            />

                            <textarea
                                value={editDescription}
                                onChange={e => setEditDescription(e.target.value)}
                            />

                            <button onClick={() => saveEdit(task.id)}>Save</button>
                            <button onClick={() => setEditingId(null)}>Cancel</button>
                        </>
                    ) : (
                        <>
                            <h3>{task.title}</h3>
                            <p>{task.description}</p>
                            <button onClick={() => startEdit(task)}>Edit</button>
                            <button onClick={() => deleteTask(task.id)}>Delete</button>
                        </>
                    )}
                </div>
            ))}
        </div>
    )
}