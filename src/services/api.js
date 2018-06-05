

export function getNews(topic) {
  // eslint-disable-next-line
  const apiKey = process.env.VUE_APP_API_KEY;
  const url = 'https://newsapi.org/v2/everything?q=' + 
  encodeURIComponent(topic) + '&apiKey=15e9271a605648f59925d68ed7bfb29f'; 

  return fetch(url)
    .then(response => response.json());
}

