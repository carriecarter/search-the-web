<template>
 <section class="story">
    <h3>{{news.title}}</h3>
    <a :href="news.url">{{news.source.name}}</a>
    <img
      :src="news.urlToImage"
      :key="news.description" 
    >
 </section> 
</template>

<script>

export default {
  props: ['news']
};


</script>


<style>
h3 {
  font-family: Georgia, 'Times New Roman', Times, serif;
  color:darkolivegreen;
  font-size: 1.8em;
  max-width: 450px;
  letter-spacing: 1px;
}

img {
  max-width: 600px;;
  float: left;
}

.story {
  padding: 10px;
  text-align: left;
  float: right;
}



</style>
