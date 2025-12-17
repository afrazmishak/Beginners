import './DisplayText.css';

export function DisplayText( {tasks}) {
    return (
        <div className="DisplayTextContainer">
            <ul className="DisplayTextList">
                {tasks.map((task, index) => (
                    <li key={index} className="DisplayTextLine">{task}</li>
                ))}
            </ul>
        </div>
    )
}