<template>
  <div>
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

</style>