import axios from "axios";

const BASE_APPOINTMENT_URL = "http://localhost:8085/appointment";

class AppointmentService {

    createAppointment(data){
        return axios.post(`${BASE_APPOINTMENT_URL}/createAppointment`, data)
    }

    getAppointmentsList(id, user){
        return axios.get(`${BASE_APPOINTMENT_URL}/getByUserId/${id}/${user}`)
    }

    cancelAppointment(id, data){
        return axios.patch(`${BASE_APPOINTMENT_URL}/cancelById/${id}`, data)
    }

    getAppointmentById(id){
        return axios.get(`${BASE_APPOINTMENT_URL}/getById/${id}`);
    }

    rescheduleAppointment(id, data){
        return axios.patch(`${BASE_APPOINTMENT_URL}/rescheduleById/${id}`, data);
    }
}

export default new AppointmentService();