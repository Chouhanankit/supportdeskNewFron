import axios from "axios"
const API_URL = "/api/admin"

const getUsers = async (token) => {
    const option = {
        headers: {
            Authorization: `Bearer ${token}`,
        },
    };
    const response = await axios.get("https://supportdesknew.onrender.com/api/admin/users", option)
    return response.data
}

const getTickets = async (token) => {
    const option = {
        headers: {
            Authorization: `Bearer ${token}`,
        },
    };
    const response = await axios.get("https://supportdesknew.onrender.com/api/admintickets", option)
    return response.data
}


const getTicket = async (token, id) => {
    const option = {
        headers: {
            Authorization: `Bearer ${token}`
        }
    }
    const response = await axios.get("https://supportdesknew.onrender.com/api/admin/tickets" + '/' + id, option)
    return response.data
}


const adminService = {
    getUsers,
    getTickets,
    getTicket
}

export default adminService