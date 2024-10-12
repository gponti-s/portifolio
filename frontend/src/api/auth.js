import axios from 'axios';

const apiBaseURL = process.env.REACT_APP_URL_API_BASE;

export async function loginUser(username, password){
    try {
        const response = await axios.post(`${apiBaseURL}/user/login`, { 
            "username": username,
            "password": password 
        });

        if (response.status !== 200) {
            throw new Error('Login failed');
        }

        const responseBody = response.data;
        console.log('Login Response:', responseBody);
        localStorage.setItem('token', responseBody);
        return true;
    } catch (error) {
        console.error('Login Error:', error);
        //throw error;
        return false;
    }
};