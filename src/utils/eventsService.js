// This is to provide access to the Events collection on the backend
import tokenService from './tokenService';

const BASE_URL = '/api/events'

export default {
    index,
    create
}

function index() {
    return fetch(BASE_URL).then(res => res.json);
}

function create(event) {
    const options = {
        method: 'POST',
        headers: {
            'Content-type': 'application/json',
            'Authorization':'Bearer ' + tokenService.getToken()
        },
        body: JSON.stringify(event)
    };
    return fetch(BASE_URL, options).then(res => res.json());
}