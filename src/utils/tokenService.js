

function setToken(token) {
    //attach token to localStorage
    if (token) {
        localStorage.setItem('token', token)
    } else {
        localStorage.removeItem('token')
    }
}

function getToken() {
    //handle grabbing the token from local storage
    let token = localStorage.getItem('token');
    if (token) {
        //check if expired, remove if it is
        const payload = JSON.parse(atob(token.split('.')[1]));
        //JWTs exp is expressed in seconds, must covert to milliseconds
        if (payload.exp < Date.now() / 1000) {
            localStorage.removeItem('token');
            token = null;
        }
    }
    return token
}

function removeToken() {
    localStorage.removeItem('token');
}



function getUserFromToken() {
    const token = getToken();
    return token ? JSON.parse(atob(token.split(".")[1])).user : null
}

export default {
    setToken,
    getToken,
    removeToken,
    getUserFromToken,
};