import axios from "axios";

const BASE_APPOINTMENT_URL = "http://localhost:8085/appointment";

class AppointmentService {

    createAppointment(data){
        return axios.post(`${BASE_APPOINTMENT_URL}/createAppointment`, data)
    }
}

export default new AppointmentService();