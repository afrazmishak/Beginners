import './TextInput.css'

export function TextInput() {
    return (
        <div className='TextInputContainer'>
            <input 
                type="text" 
                placeholder="Add a new task…"
                className="ToDoList-InputTextBox"
            />

            <button 
                type="submit" 
                className="ToDoList-SubmitButton"
            >Add</button>
        </div>
    )
}