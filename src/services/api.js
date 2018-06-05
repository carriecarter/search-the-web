

export function getCampground(name) {
  const url = 'https://developer.nps.gov/api/v1/campgrounds?stateCode=OR&api_key=cFXrQfC362ZsvomvRFxaauWM5uk1GLq6MYWKs9x1' + encodeURIComponent(name);
  return fetch(url)
    .then(response => response.json());
}

