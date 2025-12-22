import './DisplayText.css';
import { DndContext } from '@dnd-kit/core';
import { SortableContext, verticalListSortingStrategy, arrayMove } from '@dnd-kit/sortable';
import { SortableItem } from './SortableItem';

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