// This is to provide access to the Events collection on the backend
import tokenService from './tokenService';

const BASE_URL = '/api/deliveries'

export default {
    index,
    create
}

function index() {
    return fetch(BASE_URL).then(res => res.json());
}

function create(delivery) {
    const options = {
        method: 'POST',
        headers: {
            'Content-type': 'application/json',
            'Authorization':'Bearer ' + tokenService.getToken()
        },
        body: JSON.stringify(delivery)
    };
    return fetch(BASE_URL, options).then(res => res.json());
}