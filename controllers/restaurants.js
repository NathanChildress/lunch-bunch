
const fetch = require('node-fetch');

module.exports = {
    index,
    show,
}
const YELP_URL = `https://api.yelp.com/v3/businesses/search?location=`
const LOCATION_URL = `706+Mission+St,+San+Francisco,+CA,+U`

async function index (event) {
  const res = await fetch(`${YELP_URL}${LOCATION_URL}`);
  const json = await res.json();
  return json;
};

async function show (event) {
    const res = await fetch(`${YELP_URL}${LOCATION_URL}`);
    const json = await res.json();
    return json;
  };

