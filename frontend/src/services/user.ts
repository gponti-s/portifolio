import axios from 'axios';

const apiBaseURL = process.env.REACT_APP_URL_API_BASE;

export async function fetchUserById(id: string){
    try {
        const token = localStorage.getItem('token');
        const response = await axios.get(`${apiBaseURL}/user/${id}`, {
            headers: {
                'Content-Type': 'application/json',
                'Authorization': `Bearer ${token}`
            },
        });

        if (response.status !== 200) {
            throw new Error('Failed to fetch user');
        }

        const data = response.data;
        console.log('User Data:', data);
        return data;
    } catch (error) {
        console.error('Error fetching user:', error);
        throw error;
    }
}

export async function fetchAllUsers(){
    try {
        const token = localStorage.getItem('token');
        console.log("TOKEN>>>>>>> ",token)
        const response = await axios.get(`${apiBaseURL}/user/`, {
            headers: {
                'Content-Type': 'application/json',
                'Authorization': `Bearer ${token}`
            },
        });

        if (response.status !== 200) {
            throw new Error('Failed to fetch user');
        }

        const data = response.data;
        console.log('User Data:', data);
        return data;
    } catch (error) {
        console.error('Error fetching user:', error);
        throw error;
    }
}