import { Container } from "@mui/material"
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import { Navbar } from "./components/Navbar"
import { Taskform } from './components/TaskForm'
import { Tasklist } from './components/TaskList'

function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <Container>
        <Routes>
          <Route path="/" element={<Tasklist />} />
          <Route path='/tasks/new' element={<Taskform />} />
          {/* Add more routes */}
        </Routes>
      </Container>
    </BrowserRouter>
  )
}

export default App
