<template>
  <div class="results">
    <ul>
      <news 
        v-for="news in news"
        :key="news.url"
        :news="news"
      />
    </ul>
  </div>
</template>

<script>
import news from './NewsArticle';

export default {
  props: ['news'],
  components: {
    news
  }
};
</script>
<style>

.results {
  display: flex;
  flex-wrap: wrap;
}


</style>