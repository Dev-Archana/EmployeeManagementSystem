
import { Routes, Route } from 'react-router-dom'
import Header from './pages/header/Header'
import NoMatch from './pages/noMatch/NoMatch'
import Dashboard from './pages/dashboard/Dashboard'
import PostUser from './pages/employee/PostUser'

function App() {
  return (
    <>
      <Header />
      <Routes>
        <Route path='/' element={<Dashboard />} />
        <Route path='*' element={<NoMatch />} />
        <Route path='/employee' element={<PostUser />} />
      </Routes>
    </>
  )
}

export default App
