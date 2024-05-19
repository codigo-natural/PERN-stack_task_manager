import { BrowserRouter, Route, Routes } from 'react-router-dom'
import { Tasklist } from './components/TaskList'
import { Taskform } from './components/TaskForm'

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Tasklist />} />
        <Route path='/task/new' element={<Taskform />} />
        {/* Add more routes */}
      </Routes>
    </BrowserRouter>
  )
}

export default App
