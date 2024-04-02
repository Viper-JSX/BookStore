import axios from "axios";

const token = localStorage.getItem("token");
console.log("Impelementing token", token)
const axiosClient = axios.create({ baseURL: "http://localhost:1337/api/" /*our server URL*/, headers: { Authorization: `Bearer ${token}` } /*JWT token*/ });

export default axiosClient;