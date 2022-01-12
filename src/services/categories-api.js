// Define a url
const apiUrl = 'http://localhost:8000/categories';

// Get all Categories
export const getCategories = () =>{
    return fetch(apiUrl, {method:'GET'}).then((response)=>{
        return response.json();
    });
}

// Get one Categories
export const getCategorie = (id) =>{
    return fetch(`${apiUrl}/${id}`, {method:'GET'}).then((response)=>{
        return response.json();
    });
}