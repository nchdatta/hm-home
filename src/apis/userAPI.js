import api from "./api"

const getUsers = async (page, limit) => {
    try {
        const response = await api.get(`/user?page=${page}&limit=${limit}`);
        return response.data;
    } catch (error) { }
}
const deleteUser = async (userId) => {
    try {
        const response = await api.delete(`/user/delete/${userId}`);
        return response.data;
    } catch (error) { }
}
const getUser = async (email) => {
    try {
        const response = await api.get(`/user/${email}`);
        return response.data;
    } catch (error) { }
}
const updateUser = async (email, data) => {
    try {
        const response = await api.put(`/user/update-profile/${email}`, data);
        return response.data;
    } catch (error) { }
}
const createUser = async (data) => {
    try {
        const response = await api.post(`/user`, data);
        return response.data;
    } catch (error) { }
}

export { getUsers, deleteUser, getUser, updateUser, createUser };