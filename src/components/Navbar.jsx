import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Link, useNavigate } from 'react-router-dom'
import { logOut } from '../features/auth/authSlice'

const Navbar = () => {
    const dispatch = useDispatch()
    const navigate = useNavigate()
    const { user } = useSelector((state) => state.auth)

    const handleOut = () => {
        dispatch(logOut())
    }

    useEffect(() => {
        if (!user) {
            navigate('/login')
        }
    }, [user])

    return (
        <>
            <nav className="navbar bg-secondary">
                <div className="container-fluid">
                    <Link to={"/"} className="navbar-brand mb-0 h1 text-warning fs-3">Support-Desk</Link>
                    <span className='float-end'>
                        {
                            !user ?
                                (
                                    <>
                                        <Link to={"/register"} className='btn btn-sm btn-success'>Register</Link>
                                        <Link to={"/login"} className='btn btn-sm btn-primary mx-2'>Login</Link>
                                    </>
                                ) : (

                                    <button className='btn btn-sm btn-danger' onClick={handleOut} >Logout</button>
                                )
                        }
                    </span>
                </div>
            </nav>
        </>
    )
}

export default Navbar