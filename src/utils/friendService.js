import tokenService from './tokenService';

const BASE_URL = '/api/users/';

function getUser() {
  return tokenService.getUserFromToken();
}






export default {
  getUser,

};