import React, { useEffect } from 'react'
import UserRow from '../components/UserRow'
import BackButton from '../components/BackButton'
import { useDispatch, useSelector } from 'react-redux'
import { adminTickets, getAllUsers } from '../features/admin/adminSlice'

const ViewAllUser = () => {

    const { users } = useSelector((state) => state.admin);
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(getAllUsers())
        dispatch(adminTickets())
    }, [])

    return (
        <>
            <div className="container p-4">
                <h1 className='text-center display-6 my-3'>All Tickets</h1>
                <BackButton url={"/"} />
                <div className="card p-3">
                    <table className="table">
                        <thead>
                            <tr>
                                <th scope="col">Name</th>
                                <th scope="col">Email</th>
                                <th scope="col">Total Tickets</th>
                                <th scope="col"></th>
                            </tr>
                        </thead>
                        <tbody>
                            {
                                users.map((user) => <UserRow key={user._id} user={user} />)
                            }
                        </tbody>
                    </table>
                </div>
            </div>
        </>
    )
}

export default ViewAllUser