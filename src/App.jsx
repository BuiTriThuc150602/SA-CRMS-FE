import { Route, Routes, Navigate } from 'react-router-dom'
import LoginPage from './pages/LoginPage'


function App() {

  return (
    <Routes>
      <Route path="/login" element={<LoginPage />} />
    </Routes>
    
  )
}

export default App
