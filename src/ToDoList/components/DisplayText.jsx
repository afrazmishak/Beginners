import { useSortable } from '@dnd-kit/sortable';
import { CSS } from '@dnd-kit/utilities';

function SortableItem({ task, toggleComplete, handleDelete }) {
    const {
        attributes,
        listeners,
        setNodeRef,
        transform,
        transition,
    } = useSortable({ id: task.id });

    const style = {
        transform: CSS.Transform.toString(transform),
        transition
    };

    return (
        <li
            ref={setNodeRef}
            style={style}
            className="ToDoListContainer"
        >
            <span
                className={`Text ${task.completed ? 'Completed' : ''}`}
                onClick={() => toggleComplete(task.id)}
            >
                <span className="DragHandle" {...attributes} {...listeners}>
                    ☰
                </span>

                <span className="TaskText">{task.text}</span>

                <span 
                    className="EyeIcon"
                    onClick={(e) => {
                        e.stopPropagation();
                        alert(`Viewing task: ${task.text}`)
                    }}    
                >
                    👁️
                </span>
            </span>

            {!task.completed && (
                <button
                    className="DeleteButton"
                    onClick={() => handleDelete(task.id)}
                >
                    Delete
                </button>
            )}
        </li>
    )
}

export default SortableItem
import './DisplayText.css';

import { DndContext, closestCenter } from '@dnd-kit/core';
import {
    SortableContext,
    verticalListSortingStrategy,
    arrayMove
} from '@dnd-kit/sortable';

export function DisplayText({ tasks, setTasks }) {

    const handleDelete = (id) => {
        setTasks(prev =>
            prev.filter(task => task.id !== id)
        )
    }

    const toggleComplete = (id) => {
        setTasks(prev =>
            prev.map(task =>
                task.id === id
                    ? { ...task, completed: !task.completed }
                    : task
            )
        )
    }

    const handleDragEnd = (event) => {
        const { active, over } = event
        if (!over || active.id === over.id) return

        setTasks(prev => {
            const oldIndex = prev.findIndex(t => t.id === active.id)
            const newIndex = prev.findIndex(t => t.id === over.id)
            return arrayMove(prev, oldIndex, newIndex)
        })
    }

    return (
        <DndContext onDragEnd={handleDragEnd}>
            <SortableContext
                items={tasks.map(task => task.id)}
                strategy={verticalListSortingStrategy}
            >
                <ul className="ToDoList">
                    {tasks.map(task => (
                        <SortableItem
                            key={task.id}
                            task={task}
                            toggleComplete={toggleComplete}
                            handleDelete={handleDelete}
                        />
                    ))}
                </ul>
            </SortableContext>
        </DndContext>
    )
}