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
  font-size: 1.2em;
  max-width: 450px;
  letter-spacing: 1px;
}

a {
  font-family: Georgia, 'Times New Roman', Times, serif;
  color: darkgoldenrod;
  text-decoration: none;
  padding: 20px;
  display: block;
}

a:hover {
  color: #fff; 
  background-color: darkgoldenrod;
  
}

img {
  max-width: 400px;;
  border-bottom-left-radius: 20px;
  border-bottom-right-radius: 20px;
}

.story {
  padding: 30px;
  max-width: 400px;
}



</style>
