import React from 'react'
import { Link } from 'react-router-dom'

const UserRow = ({ user }) => {

    return (
        <>
            <tr>
                <td>{user.name}</td>
                <td>{user.email}</td>
                <td>
                    <span className="badge text-bg-primary">10</span>
                </td>
                <td>
                    <Link to={'/userDetails'} className='btn btn-dark btn-sm'>View</Link>
                </td>
            </tr>
        </>
    )
}

export default UserRow