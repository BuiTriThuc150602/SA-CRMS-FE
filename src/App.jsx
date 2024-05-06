import { Route, Routes, Navigate } from 'react-router-dom'
import LoginPage from './pages/LoginPage'
import EnrollmentPage from './pages/EnrollmentPage'


function App() {

  return (
    <Routes>
      <Route path="/login" element={<LoginPage />} />
      <Route path="/enrollment" element={<EnrollmentPage />} />
    </Routes>
    
  )
}

export default App
