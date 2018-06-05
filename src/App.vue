<template>
  <div id="app">
    <h1>News Coverage Search</h1>
    <Loading :loading="loading"/>
    <SearchControl :onSearch="handleSearch"/>
    <NewsList :news="news"/>
  </div>
</template>

<script>
import SearchControl from './components/SearchControl';
import NewsList from './components/NewsList';
import Loading from './components/Loading';
import { getNews } from './services/api';

// eslint-disable-next-line
console.log(process.env.VUE_APP_API_KEY);

export default {
  data() {
    return {
      news: null,
      loading: false
    };
  },

  components: {
    NewsList,
    SearchControl,
    Loading
  },

  methods: {
    handleSearch(topic) {
      this.loading = true;

      getNews(topic).then(data => {
        this.news = data.articles;
        this.loading = false;
      });
    }
  }  
};

</script>

<style>
#app {
  font-family: Georgia, 'Times New Roman', Times, serif;
  text-align: center;
  color: darkolivegreen;
  margin-top: 40px;
}
</style>
