const express = require('express')
const cors = require('cors')

const app = express()
const PORT = 5000

app.use(cors())

//EXPRESS.JSON() ALLOWS YOUR BACKEND TO READ JSON DATA SENT FROM THE CLIENT
app.use(express.json())

app.get('/', (req, res) => {
    res.send('Backend is running')
})

app.listen(PORT, () => {
    console.log(`Server running on http://localhost:${PORT}`)
})

//CREATION OF TASK API WITH IN-MEMORY STORAGE
let tasks = []

app.post('/tasks', (req, res) => {
    const { title, description } = req.body

    if(!title) {
        return res.status(400).json({error: 'Title is required' })
    }

    const newTask = {
        id: Date.now(),
        title,
        description
    }

    tasks.push(newTask)

    res.status(201).json(newTask)
})