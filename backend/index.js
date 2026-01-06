const express = require('express')
const cors = require('cors')

const app = express()
const PORT = 5000

app.use(cors())

//EXPRESS.JSON() ALLOWS YOUR BACKEND TO READ JSON DATA SENT FROM THE CLIENT
app.use(express.json())

//CREATION OF TASK API WITH IN-MEMORY STORAGE
let tasks = []

app.get('/tasks', (req, res) => {
    res.json(tasks)
})

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

app.put('/tasks/:id', (req, res) => {
  const taskId = Number(req.params.id)
  const { title, description } = req.body

  const taskIndex = tasks.findIndex(task => task.id === taskId)

  if (taskIndex === -1) {
    return res.status(404).json({ error: 'Task not found' })
  }

  tasks[taskIndex] = {
    ...tasks[taskIndex],
    title: title ?? tasks[taskIndex].title,
    description: description ?? tasks[taskIndex].description
  }

  res.json(tasks[taskIndex])
})


app.listen(PORT, () => {
    console.log(`Server running on http://localhost:${PORT}`)
})