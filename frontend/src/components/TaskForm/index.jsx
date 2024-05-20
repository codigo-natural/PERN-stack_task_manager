import {
  Button,
  Card,
  CardContent,
  Grid,
  TextField,
  Typography
} from '@mui/material'
import { useState } from 'react';

export const Taskform = () => {
  const [task, setTask] = useState({
    title: '',
    description: ''
  })

  const handleSubmit = e => {
    e.preventDefault();
    console.log(task)
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
                type='submit'>
                Save
              </Button>
            </form>
          </CardContent>
        </Card>
      </Grid>
    </Grid>
  )
}
