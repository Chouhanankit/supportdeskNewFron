import React from 'react'
import Navbar from './components/Navbar'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Home from './screens/Home'
import Login from './screens/Login'
import Register from './screens/Register'
import NewTicket from './screens/NewTicket'
import ViewAllTickets from './screens/ViewAllTickets'
import ViewAllUser from './screens/ViewAllUser'
import SingleTicket from './screens/SingleTicket'
import { ToastContainer } from 'react-toastify';
import UserDetails from './screens/UserDetails'


const App = () => {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/login' element={<Login />} />
        <Route path='/register' element={<Register />} />
        <Route path='/all-tickets' element={<NewTicket />} />
        <Route path='/view-all-tickets' element={<ViewAllTickets />} />
        <Route path='/view-all-user' element={<ViewAllUser />} />
        <Route path='/ticket/:id' element={<SingleTicket />} />
        <Route path='/userDetails' element={<UserDetails />} />
      </Routes>
      <ToastContainer />
    </BrowserRouter>
  )
}

export default App