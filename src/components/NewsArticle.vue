<template>
 <section>
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
  font-family: Arial, Helvetica, sans-serif;
  color:darkolivegreen;
}



</style>
