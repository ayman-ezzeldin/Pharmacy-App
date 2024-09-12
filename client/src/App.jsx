import { Routes, Route } from 'react-router-dom'
import AuthLayout from './components/auth/layout'
import Login from './pages/auth/login'
import Register from './pages/auth/register'
import './App.css'

function App() {

  return (
    <>
      <div className="flex flex-col overflow-hidden bg-white" >
        <h1>Header Component</h1>
        <Routes>
          <Route path="/" element={<div>Home page</div>} />
          <Route path="/auth" element={<AuthLayout />} >
            <Route path="login" element={<Login />} />
            <Route path="register" element={<Register />} />
          </Route>
        </Routes>
      </div>
    </>
  )
}

export default App
