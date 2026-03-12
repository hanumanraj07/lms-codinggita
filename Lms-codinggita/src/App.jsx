import './App.css'
import Login from './pages/Login'
import Landing from './pages/landing';
import StudentDashboard from './pages/StudentDashboard';
import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {

  return (

    <Routes>
      <Route path="/" element={<Landing />} />
      <Route path="/login" element={<Login />} />
      <Route path="/student-dashboard" element={<StudentDashboard />} />
    </Routes>

  )
}

export default App