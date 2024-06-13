import React from 'react'

const DetailsRow = ({ ticket }) => {


    return (
        <>
            <tr>
                <td>12-March-24</td>
                <td>iPhone</td>
                <td>
                    <span className="badge rounded-pill text-bg-primary"> new </span>
                </td>
                <td>
                    <button className='btn btn-dark btn-sm'>View</button>
                    <button className='btn btn-danger btn-sm mx-2'>Delete</button>
                </td>
            </tr>
        </>
    )
}

export default DetailsRow