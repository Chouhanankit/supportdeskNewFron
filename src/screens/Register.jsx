import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { userRegister } from '../features/auth/authSlice'
import { useNavigate } from 'react-router-dom'

const Register = () => {

    const { user } = useSelector((state) => state.auth)

    const dispatch = useDispatch()
    const navigate = useNavigate()

    const [formData, setFormData] = useState({
        name: "",
        email: "",
        password: "",
    })

    const { name, email, password } = formData

    const handleChange = (e) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value
        });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        dispatch(userRegister(formData))
    }

    useEffect(() => {
        if (user) {
            navigate("/")
        }
    }, [user])

    return (
        <>
            <div className="container p-4">
                <div className="card p-3">
                    <h4 className='text-center display-6 my-3'>CREATE YOUR ID</h4>
                    <form onSubmit={handleSubmit}>
                        <input type="text" className='form-control' placeholder='Enter your name' name='name' onChange={handleChange} value={name} />
                        <input type="email" className='form-control my-2' placeholder='Gmail' name='email' onChange={handleChange} value={email} />
                        <input type="password" className='form-control my-2' placeholder='Password' name='password' onChange={handleChange} value={password} />
                        <button className='btn btn-success w-100 my-2'>Register</button>
                    </form>
                </div>
            </div>
        </>
    )
}

export default Register