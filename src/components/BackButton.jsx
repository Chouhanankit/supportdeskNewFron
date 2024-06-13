import React from 'react'
import { Link } from 'react-router-dom'

const BackButton = ({ url }) => {
    return (
        <>
            <Link to={url} className='btn btn-dark btn-sm my-2'>Back</Link>
        </>
    )
}

export default BackButton