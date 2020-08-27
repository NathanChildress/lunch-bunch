/* We'll add this later to handle fetch calls to our server on our Yelp requests*/
const BASE_URL = '/api/restaurants'


export default {
    index,
    getRestaurant,
}

function index() {
    return fetch(BASE_URL).then(res => res.json());
}

function getRestaurant() {
    return fetch(BASE_URL).then(res => res.json());
}