import './App.css'
import 'bootstrap/dist/css/bootstrap.min.css'
import Login from './Components/Login'
import {BrowserRouter, Routes, Route, useNavigate} from 'react-router-dom'
import Dashboard from './Components/Dashboard'
import Home from './Components/Home'
import Employee from './Components/Student'
import Category from './Components/Course'
import Profile from './Components/Profile'
import AddCategory from './Components/AddCourse'
import AddEmployee from './Components/AddStudent'
import EditEmployee from './Components/EditStudent'
import Start from './Components/Start'
import EmployeeLogin from './Components/StudentLogin'
import EmployeeDetail from './Components/StudentDetail'
import PrivateRoute from './Components/PrivateRoute'

function App() {
  return (
    <BrowserRouter>
    <Routes>
      <Route path='/' element={<Start />}></Route>
      <Route path='/adminlogin' element={<Login />}></Route>
      <Route path='/student_login' element={<StudentLogin />}></Route>
      <Route path='/student_detail/:id' element={<StudentDetail />}></Route>
      <Route path='/dashboard' element={
        <PrivateRoute >
          <Dashboard />
        </PrivateRoute>
      }>
        <Route path='' element={<Home />}></Route>
        <Route path='/dashboard/student' element={<Student />}></Route>
        <Route path='/dashboard/course' element={<Course />}></Route>
        <Route path='/dashboard/profile' element={<Profile />}></Route>
        <Route path='/dashboard/add_course' element={<AddCourse />}></Route>
        <Route path='/dashboard/add_student' element={<AddStudent />}></Route>
        <Route path='/dashboard/edit_student/:id' element={<EditStudent />}></Route>
      </Route>
    </Routes>
    </BrowserRouter>
  )
}

export default App
