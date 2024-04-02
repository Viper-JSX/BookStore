import axiosClient from "../axios/client";

const getUserById = async (userId) => {
    const response = await axiosClient.get(`/users/${userId}`);
    const user = response.data?.user || null; //returns either user or null

    console.log("Getting user by id: ", user);
    return user;
}

export default getUserById;