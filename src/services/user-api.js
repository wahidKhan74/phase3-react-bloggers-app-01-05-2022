// Define a url
const apiUrl = 'http://localhost:8000/users';

// Get one user
export const getUser = (email) =>{
    return fetch(`${apiUrl}?email=${email}`, {method:'GET'}).then((response)=>{
        return response.json();
    });
}