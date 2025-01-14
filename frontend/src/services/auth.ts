import axios from 'axios';

const apiBaseURL = process.env.REACT_APP_API_URL || 'https://apiportifolio-production-97d4.up.railway.app/api';

export async function loginUser(email: string, password: string){
    try {
        console.log(email)
        const response = await axios.post(`${apiBaseURL}/user/login`, { 
            "email": email,
            "password": password 
        });

        if (response.status !== 200) {
            throw new Error('Login failed');
        }

        const responseBody = response.data;
        console.log('Login Response:', responseBody);
        localStorage.setItem('token', responseBody.token);
        localStorage.setItem('userLogged', JSON.stringify(responseBody.userDTO));
        return true;
    } catch (error) {
        console.error('Login Error:', error);
        //throw error;
        return false;
    }
};