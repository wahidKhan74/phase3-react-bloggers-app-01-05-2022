// Define a url
const apiUrl = 'http://localhost:8000/posts';

// Get all post
export const getPosts = () =>{
    return fetch(apiUrl, {method:'GET'}).then((response)=>{
        return response.json();
    });
}

// Get one posts
export const getPost = (postId) =>{
    return fetch(`${apiUrl}/${postId}`, {method:'GET'}).then((response)=>{
        return response.json();
    });
}

// Create a post
export const addPosts = (post) =>{
    const headers = {'Content-Type':'application/json'};
    const body = JSON.stringify(post);
    return fetch(apiUrl, { method:'POST', headers:headers, body:body }).then((response)=>{
        return response.json();
    });
}


// Delete a post
export const deletePosts = (postId) =>{
    const headers = {'Content-Type':'application/json'};
    return fetch(`${apiUrl}/${postId}`, { method:'DELETE'}).then((response)=>{
        return response.json();
    });
}


// Update a post
export const updatePosts = (post) =>{
    const headers = {'Content-Type':'application/json'};
    const body = JSON.stringify(post);
    return fetch(`${apiUrl}/${post.id}`, { method:'PUT', headers:headers, body:body }).then((response)=>{
        return response.json();
    });
}