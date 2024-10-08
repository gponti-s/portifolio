export async function getUserById(){
    try {
        const token = localStorage.getItem('token');
        const response = await fetch("http://localhost:5000/api/user/66facd5f967fe5ba32daf584", {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json',
                'Authorization': `Bearer ${token}`
            },
        });

        if (!response.ok) {
            throw new Error('Failed to fetch user');
        }

        const data = await response.json();
        console.log('User Data:', data);
        return data;
    } catch (error) {
        console.error('Error fetching user:', error);
        throw error;
    }
}

export async function getAllUsers(){
    try {
        const token = localStorage.getItem('token');
        console.log("TOKEN>>>>>>> ",token)
        const response = await fetch("http://localhost:5000/api/user/", {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json',
                'Authorization': `Bearer ${token}`
            },
        });

        if (!response.ok) {
            throw new Error('Failed to fetch user');
        }

        const data = await response.json();
        console.log('User Data:', data);
        return data;
    } catch (error) {
        console.error('Error fetching user:', error);
        throw error;
    }
}

export async function loginUser(username, password){
    try {
        const response = await fetch("http://localhost:5000/api/user/login", {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({ 
                "username": username,
                "password": password }),
        });

        if (!response.ok) {
            throw new Error('Login failed');
        }

        const responseBody = await response.json();
        console.log('Login Response:', responseBody);
        localStorage.setItem('token', responseBody);
        return true;
    } catch (error) {
        console.error('Login Error:', error);
        //throw error;
        return false;
    }
};