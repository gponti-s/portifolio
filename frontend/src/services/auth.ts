import axios from 'axios';

const apiBaseURL = process.env.REACT_APP_API_URL || 'https://apiportifolio-production-97d4.up.railway.app/api';

export async function loginUser(email: string, password: string){
    try {
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
        //TODO: throw error;
        return false;
    }
};


interface SignInFormData {
    firstName: string;
    lastName: string;
    email: string;
    gender: string;
    country: string;
    birthDate: Date;
    password: string;
    confirmPassword: string;
}

interface SignInResult {
    success: boolean;
    message?: string;
}

export async function signIn(data: SignInFormData): Promise<SignInResult> {
    console.log("data", data);
    try {
        const response = await axios.post(`${apiBaseURL}/user/register`, {
            firstName: data.firstName,
            lastName: data.lastName,
            email: data.email,
            gender: data.gender,
            country: data.country,
            birthDate: data.birthDate,
            password: data.password,
            permissions: []
        });

        return {
            success: true,
            message: "Registration successful"
        };
    } catch (error) {
        if (axios.isAxiosError(error)) {
            return {
                success: false,
                message: error.response?.data?.message || "Registration failed"
            };
        }
        return {
            success: false,
            message: "An unexpected error occurred"
        };
    }
}