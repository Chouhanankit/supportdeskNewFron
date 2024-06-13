import React from 'react'
import BackButton from '../components/BackButton'
import DetailsRow from '../components/DetailsRow'

const UserDetails = () => {
    return (
        <>
            <div className="container p-5">
                <BackButton url={"/view-all-user"} />
                <div className="card p-4">
                    <div className="card-title text-center h2 text-warning">User Details</div>
                    <h4 className='card-text my-3' >Name: Ankit Chouhan</h4>
                    <p>Email: ankitchouhan@gmail.com</p>
                    <p>Total Tickets :
                        <span className="badge text-bg-primary m-2">10</span>
                    </p>
                    <span>
                        Remove The User :
                        <button className='btn btn-sm btn-danger w-25 mx-2'>Delete</button>
                    </span>
                </div>
            </div>


            <div className="container p-5">
                <h1 className='text-center display-6 my-3'>All Tickets</h1>
                <table className="table">
                    <thead>
                        <tr>
                            <th scope="col">Date</th>
                            <th scope="col">Product</th>
                            <th scope="col">Status</th>
                            <th scope="col"></th>
                        </tr>
                    </thead>
                    <tbody>
                        {/* {
                            Tickets.map((ticket) => <DetailsRow key={ticket._id} ticket={ticket} />)
                        } */}
                        <DetailsRow />
                    </tbody>
                </table>
            </div>

        </>
    )
}

export default UserDetails