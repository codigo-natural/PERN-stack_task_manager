import {
  Button,
  Card,
  CardContent,
  CircularProgress,
  Grid,
  TextField,
  Typography
} from '@mui/material'
import { useState } from 'react';
import { useNavigate } from 'react-router-dom'

export const Taskform = () => {
  const [task, setTask] = useState({
    title: '',
    description: ''
  })
  const [loading, setLoading] = useState(false)

  const navigate = useNavigate()

  const handleSubmit = async e => {
    e.preventDefault();

    setLoading(true)

    const res = await fetch('http://localhost:3000/tasks', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(task)
    })
    const data = await res.json()

    setLoading(false)

    navigate('/')
  }

  const handleChange = e =>
    setTask({ ...task, [e.target.name]: e.target.value })

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
            Create Task
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

                // value={task.title}
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

                // value={task.description}
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
                {loading ? <CircularProgress color='inherit' size={24} /> : 'Create'}
              </Button>
            </form>
          </CardContent>
        </Card>
      </Grid>
    </Grid>
  )
}
