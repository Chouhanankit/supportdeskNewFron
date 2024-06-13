import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { loginUser } from '../features/auth/authSlice';
import { useNavigate } from 'react-router-dom'
import { toast } from 'react-toastify';


const Login = () => {

  const { user } = useSelector((state) => state.auth)

  const dispatch = useDispatch();
  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    email: "",
    password: "",
  })

  const { email, password } = formData

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(loginUser(formData))
  };

  useEffect(() => {
    if (user) {
      navigate("/")
    }

  }, [user])


  return (
    <>
      <div className="container p-5">
        <div className="card p-3">
          <h1 className='display-6 text-center' >LOGIN</h1>
          <form className='my-3' onSubmit={handleSubmit}>
            <input className='form-control my-2' type="email" placeholder='Enter Email' onChange={handleChange} value={email} name='email' />
            <input className='form-control my-2' type="password" placeholder='Enter Password' onChange={handleChange} value={password} name='password' />
            <button className='btn btn-success w-100'>LOGIN</button>
          </form>
        </div>
      </div>
    </>
  )
}

export default Login