import { useState } from 'react'
import {BrowserRouter, Routes, Route} from 'react-router-dom'
import 'bootstrap/dist/css/bootstrap.min.css'
import Signup from './Signup'
import Login from './Login'
import SignupStudent from './SignupStudent'
import StudentHome from './StudentHome'
import AddProject from './AddProject'
import ProfessorHome from './ProfessorHome'
import DetaliiProiect from './DetaliiProiect'
import SuccessAddProject from './SuccessAddProject'
import ProfessorLogin from './ProfessorLogin'
import ProjectList from './ProjectList'
import DetaliiProiectStudent from './DetaliiProiectStudent'
import AdaugareNotaAnonima from './AdaugareNotaAnonima'
import SuccessAdaugareNota from './SuccessAdaugareNota'

function App() {
  return (
   <BrowserRouter>
   <Routes>
      <Route path='/register' element = {< Signup />}></Route>
      <Route path='/login' element = {< Login />}></Route>
      <Route path='/registerStudent' element = {< SignupStudent />}></Route>
      <Route path='/studentHome' element = {< StudentHome />}></Route>
      <Route path='/addProject' element = {< AddProject />}></Route>
      <Route path='/homeProfessor' element = {< ProfessorHome />}></Route>
      <Route path='/detaliiProiect' element = {< DetaliiProiect />}></Route>
      <Route path='/successAddProject' element = {< SuccessAddProject />}></Route>
      <Route path='/professorLogin' element = {< ProfessorLogin />}></Route>
      <Route path='/projectList' element = {< ProjectList />}></Route>
      <Route path='/detaliiProiectStudent' element = {< DetaliiProiectStudent />}></Route>
      <Route path='/adaugaNota' element = {< AdaugareNotaAnonima />}></Route>
      <Route path='/successAdaugareNota' element = {< SuccessAdaugareNota />}></Route>
   </Routes>
   </BrowserRouter>
  )
}

export default App
