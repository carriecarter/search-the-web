// url:
// 1) protocol (https://)
// 2) host server  (swapi.co)
// 3) path (/api/people)
// 4) search or query
//    - separated from path via "?"
//    - name=value pairs separted by "&"
//    - use "encodeURIComponent" to escape search values
//    ?APIKEY=abc123&search=name

export function getPark(campgrounds) {
  const url = 'https://developer.nps.gov/api/v1/campgrounds?stateCode=OR&stateCode=WA&fields=fireStovePolicy%2C%20amenities%2C%20campsites%2C%20contacts%2C%20description%2C%20images%2C&api_key=cFXrQfC362ZsvomvRFxaauWM5uk1GLq6MYWKs9x1' + encodeURIComponent(campgrounds);
  return fetch(url)
    .then(response => response.json());
}

