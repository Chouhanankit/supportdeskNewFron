import React, { useEffect } from 'react'
import TicketRow from '../components/TicketRow'
import BackButton from '../components/BackButton'
import { useDispatch, useSelector } from 'react-redux'
import { getTickets } from '../features/tickets/ticketSlice'
import { adminTickets } from '../features/admin/adminSlice'



const ViewAllTickets = () => {

    const dispatch = useDispatch();
    const { tickets, isLoading } = useSelector((state) => state.ticket);
    const { user } = useSelector((state) => state.auth);
    const { Tickets } = useSelector((state) => state.admin)

    let admin = !user ? false : user.isAdmin;
    
    useEffect(() => {
        if (admin) {
            dispatch(adminTickets())
        } else {
            dispatch(getTickets())
        }
    }, [])
    
    if (isLoading) {
        return (
            <h1 className="text-center display">Loading...</h1>
        )
    }

    

    return (
        <div className="container p-4">
            <h1 className='text-center display-6 my-3'>All Tickets</h1>
            <BackButton url={"/"} />
            <div className="card p-3">
                <table className="table">
                    <thead>
                        <tr>
                            <th scope="col">Date</th>
                            <th scope="col">Product</th>
                            <th scope="col">Status</th>
                            <th scope="col"></th>
                        </tr>
                    </thead>
                    {!user.isAdmin ?
                        <tbody>
                            {
                                tickets.map((ticket) => <TicketRow key={ticket._id} ticket={ticket} />)
                            }
                        </tbody> :
                        <tbody>
                            {
                                Tickets.map((ticket) => <TicketRow key={ticket._id} ticket={ticket} />)
                            }
                        </tbody>
                    }
                </table>
            </div>
        </div>
    )
}

export default ViewAllTickets