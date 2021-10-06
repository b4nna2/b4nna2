import axios from 'axios';

// const usersUrl = 'http://localhost:3003/users';
const usersUrl = 'http://b6b8-3-108-92-91.ngrok.io/api/users2';

export const getUsers = async (id) => {
    id = id || '';
    return await axios.get(`http://b6b8-3-108-92-91.ngrok.io/api/users2/${id}`);
}

export const addUser = async (user) => {
    return await axios.post(`${usersUrl}/register2`, user);
}

export const deleteUser = async (id) => {
    return await axios.delete(`${usersUrl}/${id}`);
}

export const editUser = async (id, user) => {
    return await axios.patch(`${usersUrl}/${id}`, user)
}