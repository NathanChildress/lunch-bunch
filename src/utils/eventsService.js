// This is to provide access to the Events collection on the backend
import tokenService from './tokenService';

const BASE_URL = '/api/events'

export default {
    getEvents,
    delEvent,
    create
}

function getEvents() {
    return fetch(BASE_URL).then(res => res.json());
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

function delEvent(eventId) {
    const options = {
        method: 'DELETE',
        headers: {
            'Content-type': 'application/json',
            'Authorization':'Bearer ' + tokenService.getToken()
        },
        body: eventId
    };
    console.log(BASE_URL + `/${eventId}/delete`);
    return fetch((BASE_URL + `/${eventId}/delete`), options).then(res => res.json());
}