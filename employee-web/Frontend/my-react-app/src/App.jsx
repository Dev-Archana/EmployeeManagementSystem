
import { Routes, Route } from 'react-router-dom'
import './App.css'
import Header from './pages/header/Header'
import PostUser from './pages/employee/PostUser'
import NoMatch from './pages/noMatch/NoMatch'
import Dashboard from './pages/dashboard/Dashboard'

function App() {
  return (
    <>
      <Header />
      <Routes>
        <Route path="/employee" element={<PostUser />} />
        <Route path="/" element={<Dashboard />} />
        <Route path="*" element={<NoMatch />} />
      </Routes>
    </>
  )
}

export default App
