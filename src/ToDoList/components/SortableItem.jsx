import { useSortable } from '@dnd-kit/sortable';
import { CSS } from '@dnd-kit/utilities';
import './DisplayText.css';

export function SortableItem({ task, toggleComplete, handleDelete }) {
    const { attributes, listeners, setNodeRef, transform, transition } = useSortable({ id: task.id });

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