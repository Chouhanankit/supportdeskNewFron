import React, { useEffect, useState } from 'react'
import BackButton from '../components/BackButton'
import { useDispatch, useSelector } from 'react-redux'
import { addTicket } from '../features/tickets/ticketSlice';
import { useNavigate } from 'react-router-dom';

const NewTicket = () => {

    const dispatch = useDispatch();
    const navigate = useNavigate()
    const { user } = useSelector((state) => state.auth)
    const { isLoading, isSuccess, isError, message, ticket } = useSelector((state) => state.ticket)
    const [product, setProduct] = useState("")
    const [description, setDescription] = useState("")

    const handleSubmit = (e) => {
        e.preventDefault()
        dispatch(addTicket(
            {
                product,
                description
            }
        ))
    }

    useEffect(() => {
        
        if (ticket && isSuccess) {
            navigate(`/ticket/${ticket._id}`)
        }

        if (isError || message) {
            window.alert("Somthing Wrong")
        }
    }, [isSuccess, ticket])


    if (isLoading) {
        return (
            <div className="container p-5 text-center">
                <h1 className="display-1 text-secondary">Loading...</h1>
            </div>
        );
    }

    return (
        <>
            <div className="container p-5">
                <div className="card p-3">
                    <h4 className="text-center display-6">GENRATE NEW TICKET</h4>
                    <form onSubmit={handleSubmit}>
                        <input className='form-control my-2' type="text" value={user.name} disabled />
                        <input className='form-control my-2' type="email" value={user.email} disabled />
                        <select className='form-select my-2' onChange={(e) => setProduct(e.target.value)} >
                            <option selected value="iPhone" >iPhone</option>
                            <option value="iPad">iPad</option>
                            <option value="iMac">iMac</option>
                            <option value="Mackbook">Mackbook</option>
                        </select>
                        <textarea className='form-control' placeholder='Enter the description of issue' onChange={(e) => setDescription(e.target.value)} ></textarea>
                        <button className='btn btn-success w-100 my-2' >Raise a Ticket</button>
                    </form>
                </div>
                <BackButton url={"/"} />
            </div>
        </>
    )
}

export default NewTicket