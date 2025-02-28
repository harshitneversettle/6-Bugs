import { useState } from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Login from './components/Login'
import Chatbot from './components/Chatbot'
import MainPge from './components/MainPge'
import TeacherLogin from './components/TeacherLogin'
import StudentLogin from './components/StudentLogin'
import Signup_student from './components/Signup_student'
import Signup_teacher from './components/Signup_teacher'
import PredictPlacement from './components/PredictPlacement'
import Calendly from './components/Calendly'
import SearchPage from './components/SearchPage'

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<MainPge/>} />
          <Route path='/sign-up-student' element={<Signup_student/>} />
          <Route path='/sign-up-teacher' element={<Signup_teacher/>} />
          <Route path='/login' element={<Login/>} />
          <Route path='/chat-bot' element={<Chatbot/>} />
          <Route path='/teacher-login' element={<TeacherLogin/>} /> 
          <Route path='/student-login' element={<StudentLogin/>} />
          <Route path='/predict-placement' element={<PredictPlacement/>} />
          <Route path='/schedule-meet' element={<Calendly/>} />
          <Route path='/mentors' element={<SearchPage/>} />
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
