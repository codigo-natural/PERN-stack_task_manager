import { AppBar, Box, Button, Container, Toolbar, Typography } from '@mui/material'
import { Link, useNavigate } from "react-router-dom"

export const Navbar = () => {
  const navigate = useNavigate()
  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static" color='transparent'>
        <Container>
          <Toolbar>
            <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
              <Link to="/" style={{ color: '#ffff' }}>Tasks App - Pern Stack</Link>
            </Typography>
            <Button
              variant='outlined'
              color='inherit'
              style={{ color: '#fff' }}
              onClick={() => navigate('/tasks/new')}
            >
              Create Task
            </Button>
          </Toolbar>
        </Container>
      </AppBar>
    </Box>
  )
}
