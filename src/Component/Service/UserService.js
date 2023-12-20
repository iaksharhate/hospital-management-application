import axios from "axios";

const USER_BASE_URL = "http://localhost:8085/user";

class UserService{

    createUser(data){
        return axios.post(`${USER_BASE_URL}/signup`, data);
    };

    userLogin(data){
        return axios.post(`${USER_BASE_URL}/login`, data);
    };

    getDoctorDetails(){
        return axios.get(`${USER_BASE_URL}/getDoctors`);
    };

    getUserDetails(id){
        return axios.get(`${USER_BASE_URL}/getUserById/${id}`);
    }

    getAllPatients(){
        return axios.get(`${USER_BASE_URL}/getPatients`)
    }

    updateUserDetails(id, data){
        return axios.put(`${USER_BASE_URL}/UpdateById/${id}`, data);
    }
};

export default new UserService();