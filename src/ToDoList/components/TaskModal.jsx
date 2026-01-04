import './TaskModal.css'

export default function TaskModal({ task, onClose }) {
    return (
        <div className="ModalOverlay" onClick={onClose}>
            <div
                className="ModalContent"
                onClick={(e) => e.stopPropagation()}
            >
                <h2 className="ModalHeading">Task Details</h2>

                <p className="ModalText">{task.text}</p>

                <p className="ModalStatus"><strong>Status:</strong> {task.completed ? 'Completed' : 'Active'}</p>

                <button className="ModalButton EditModalButton">Edit</button>

                <button className="ModalButton CloseModalButton" onClick={onClose}>Close</button>
            </div>
        </div>
    )
}