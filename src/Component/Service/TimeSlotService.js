import axios from "axios";

const BASE_SLOTS_URL = "http://localhost:8085/slots"

class TimeSlotService {

    getBookedSlots(id){
        return axios.get(`${BASE_SLOTS_URL}/getByDoctorId/${id}`);
    };

}

export default new TimeSlotService();