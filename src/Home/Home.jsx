import { Link } from 'react-router-dom'

export default function Home() {
  return (
    <div style={{ padding: '2rem' }}>
      <h1>🚀 My Projects</h1>

      <ul>
        <li>
          <Link to="/todo-list">📝 To-Do List App</Link>
        </li>
      </ul>
    </div>
  )
}