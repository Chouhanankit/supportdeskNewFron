import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Link, useNavigate } from 'react-router-dom'


const Home = () => {

    const { user } = useSelector((state) => state.auth);
    const navigate = useNavigate()
    let isAdmin = !user ? false : user.isAdmin;

  
    useEffect(() => {
        if (!user) {
            navigate('/login')
        }
    }, [])


    return (
        <>
            <div className="container p-5">

                <div className="card p-3">
                    <h1 className='text-center display-6'>Welcome to {user?.name}</h1>
                    <span className='my-3'>
                        {
                            isAdmin ? (
                                <>
                                    <Link to={'/view-all-tickets'} className='btn btn-outline-dark w-100 my-2'>View All Tickets</Link>
                                    <Link to={'/view-all-user'} className='btn btn-outline-dark w-100'>View All User</Link>
                                </>
                            ) :
                                (

                                    <>
                                        <Link to={"/all-tickets"} className='btn btn-outline-dark w-100 ' >Create New Ticket</Link>
                                        <Link to={'/view-all-tickets'} className='btn btn-outline-dark w-100 my-2'>View All Tickets</Link>
                                    </>

                                )
                        }
                    </span>
                </div>

            </div>
        </>
    )
}

export default Home