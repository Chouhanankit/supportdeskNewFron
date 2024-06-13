import axios from "axios"
const API_URL = '/api/ticket'

const fetchTickets = async (token) => {
    const option = {
        headers: {
            Authorization: `Bearer ${token}`
        }
    }
    const response = await axios.get("https://supportdesknew.onrender.com/api/ticket", option)
    return response.data
}

const fetchTicket = async (token, id) => {
    const option = {
        headers: {
            Authorization: `Bearer ${token}`
        }
    }
    const response = await axios.get("https://supportdesknew.onrender.com/api/ticket"+ "/" + id, option)
    return response.data
}

const createTicket = async (token, formData) => {
    const option = {
        headers: {
            Authorization: `Bearer ${token}`
        }
    }
    const response = await axios.post("https://supportdesknew.onrender.com/api/ticket", formData, option)
    return response.data

}
const ticketService = {
    fetchTickets,
    fetchTicket,
    createTicket,
};

export default ticketService;
