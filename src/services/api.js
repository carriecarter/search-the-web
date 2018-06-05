

export function getNews(keyword) {
  // eslint-disable-next-line
  const apiKey = process.env.VUE_APP_API_KEY;
  const url = 'https://newsapi.org/v2/everything?q=' + 
  encodeURIComponent(keyword) +
  '&apiKey=' + apiKey; 

  return fetch(url)
    .then(response => response.json());
}

