import './App.css'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import LandingPage from './pages/LandingPage'
import RegisterPage from './pages/Auth/RegisterPage'
import LoginPage from './pages/Auth/LoginPage'
import StepperPage from './pages/Stepper/StepperPage'

function App() {

  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<LandingPage />} />
        <Route path='/login' element={<LoginPage />} />
        <Route path='/register' element={<RegisterPage />} />
        <Route path='/company/info' element={<StepperPage />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App
