import { useEffect, useState } from "react"
import { Button, Card, CardContent, Typography } from '@mui/material'

export const Tasklist = () => {
  const [tasks, setTasks] = useState([])
  const loadTasks = async () => {
    const response = await fetch('http://localhost:3000/tasks')
    const data = await response.json()
    setTasks(data)
  }

  const handleDelete = async (id) => {
    try {
      await fetch(`http://localhost:3000/task/${id}`, {
        method: 'DELETE',
      })
      setTasks(tasks.filter(task => task.id !== id))
    } catch (error) {
      console.log(error)
    }
  }

  useEffect(() => {
    loadTasks()
  }, [])
  return (
    <>
      <h1>Task list</h1>
      {
        tasks.map(task => (
          <Card
            style={{ marginBottom: '.7rem', backgroundColor: '#1e272e' }}
            key={task.id}>
            <CardContent style={{ display: 'flex', justifyContent: 'space-between' }}>
              <div style={{ color: 'white' }}>
                <Typography>{task.title}</Typography>
                <Typography>{task.Description}</Typography>
              </div>
              <div>
                <Button
                  variant="contained"
                  color="inherit"
                  onClick={() => console.log('edit')}
                >
                  Edit
                </Button>
                <Button
                  variant="contained"
                  color="warning"
                  onClick={() => console.log(handleDelete(task.id))}
                  style={{ marginLeft: '.5rem' }}
                >
                  Delete
                </Button>
              </div>
            </CardContent>
          </Card>
        ))
      }
    </>
  )
}
