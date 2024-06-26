import {
  Button,
  Card,
  CardContent,
  CircularProgress,
  Grid,
  TextField,
  Typography
} from '@mui/material'
import { useState, useEffect } from 'react';
import { useNavigate, useParams } from 'react-router-dom'

export const Taskform = () => {
  const [task, setTask] = useState({
    title: '',
    description: ''
  })
  const [loading, setLoading] = useState(false)
  const [editing, setEditing] = useState(false)

  const navigate = useNavigate()
  const params = useParams()

  const handleSubmit = async e => {
    e.preventDefault();
    setLoading(true)

    if (editing) {
      await fetch(`http://localhost:3000/tasks/${params.id}`, {
        method: 'PUT',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(task)
      })
    } else {
      await fetch('http://localhost:3000/tasks', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
      })
    }

    setLoading(false)
    navigate('/')
  }

  const handleChange = e =>
    setTask({ ...task, [e.target.name]: e.target.value })

  const loadTask = async id => {
    const res = await fetch(`http://localhost/tasks${id}`)
    const data = await res.json()
    setEditing(true)

    setTask({
      title: data.title,
      description: data.description
    })
  }

  useEffect(() => {
    if (params.id) {
      loadTask(params.id)
    }
  }, [params.id])

  return (
    <Grid
      container
      direction="column"
      alignItems="center"
      justifyContent="center"
    >
      <Grid item xs={3}>
        <Card
          sx={{ mt: 5 }}
          style={{ backgroundColor: '#1e1e1e', padding: '1rem' }}
        >
          <Typography
            variant='5'
            textAlign='center'
            color='white'
          >
            {editing ? 'Edit Task' : 'Create Task'}
          </Typography>
          <CardContent>
            <form onSubmit={handleSubmit}>
              <TextField
                variant='filled'
                label='Write your title'
                sx={{
                  display: 'block',
                  margin: '.5rem 0'
                }}

                value={task.title}
                name='title'
                onChange={handleChange}
                inputProps={{ style: { color: '#fff' } }}
                InputLabelProps={{ style: { color: '#fff' } }}
              />

              <TextField
                variant='filled'
                label='Write your description'
                multiline
                rows={4}
                sx={{
                  display: 'block',
                  margin: '.5rem 0'
                }}

                value={task.description}
                name='description'
                onChange={handleChange}
                inputProps={{ style: { color: '#fff' } }}
                InputLabelProps={{ style: { color: '#fff' } }}
              />
              <Button
                variant='contained'
                color='primary'
                type='submit'
                disabled={!task.title || !task.description || loading}
              >
                {loading ? <CircularProgress color='inherit' size={24} /> : 'Save'}
              </Button>
            </form>
          </CardContent>
        </Card>
      </Grid>
    </Grid>
  )
}
