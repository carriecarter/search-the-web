<template>
  <div id="app">
    <h1>Hello! I'm App</h1>
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
    handleSearch(keyword) {
      this.loading = true;

      getNews(keyword).then(data => {
        this.news = data.articles;
        this.loading = false;
      });
    }
  }  
};

</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
