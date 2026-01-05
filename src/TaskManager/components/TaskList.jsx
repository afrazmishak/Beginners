import { useState, useEffect } from "react"

export function TaskList ({ tasks }) {
    return (
        <div>
            {tasks.map(task => (
                <div key={task.id}>
                    <h3>{task.title}</h3>
                    <p>{task.description}</p>
                </div>
            ))}
        </div>
    )
}