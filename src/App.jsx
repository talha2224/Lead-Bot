import './App.css'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import LandingPage from './pages/LandingPage'
import RegisterPage from './pages/Auth/RegisterPage'
import LoginPage from './pages/Auth/LoginPage'
import StepperPage from './pages/Stepper/StepperPage'
import Layout from './components/dashboard/Layout'
import Home from './pages/Dashboard/Home'
import { useContext } from 'react'
import Contacts from './pages/Dashboard/Contacts'

function App() {


  return (
    <BrowserRouter>
      <Routes>

        <Route path='/' element={<LandingPage />} />
        <Route path='/login' element={<LoginPage />} />
        <Route path='/register' element={<RegisterPage />} />
        <Route path='/company/info' element={<StepperPage />} />

        <Route path='/dashboard/' element={<Layout />}>
          <Route path='home' element={<Home />} />
          <Route path='contacts' element={<Contacts />} />
        </Route>

      </Routes>

    </BrowserRouter>
  )
}

export default App
