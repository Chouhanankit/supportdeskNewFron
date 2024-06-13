import React, { useEffect } from 'react'
import BackButton from '../components/BackButton'
import { useDispatch, useSelector } from 'react-redux'
import { getTicket } from '../features/tickets/ticketSlice'
import { useParams } from 'react-router-dom'
import { adminTicket } from '../features/admin/adminSlice'

const SingleTicket = () => {
    const dispatch = useDispatch()
    const { ticket } = useSelector((state) => state.ticket)
    const { user } = useSelector((state) => state.auth);
    const { Ticket } = useSelector((state) => state.admin)
    const params = useParams()

    let admin = !user ? false : user.isAdmin;

    useEffect(() => {
        if (admin) {
            dispatch(adminTicket(params.id))
        } else {
            dispatch(getTicket(params.id))
        }
    }, [])

    return (
        <>
            <div className="container p-4">
                <BackButton url={"/view-all-tickets"} />
                <div className="card p-3">
                    <h5>Product Name: {ticket.product}</h5>
                    <h5>Status: <span className={
                        ticket.status === "open"
                            ? "badge rounded-pill text-bg-success"
                            : ticket.status === "new"
                                ? "badge rounded-pill text-bg-primary"
                                : "badge rounded-pill text-bg-danger"
                    }>{ticket.status}</span></h5>
                    <p>Description : {ticket.description}</p>
                    <p>Date : {new Date(ticket.updatedAt).toDateString("en-IN")} </p>
                </div>
                <button className='btn btn-sm btn-dark my-2'>Add Note</button>
                <h4>NOTES :</h4>
                <ul className='list-group my-3'>
                    <li className='list-group-item bg-secondary text-light'>User: Please Tell Me Status</li>
                    <li className='list-group-item'>Admin: Please Wait</li>
                </ul>
                {ticket.status === "closed" ? (
                    <button className="btn btn-danger w-100" disabled>
                        Close Ticket
                    </button>
                ) : (
                    <button className="btn btn-danger w-100">Close Ticket</button>
                )}
            </div>
        </>
    )
}

export default SingleTicket