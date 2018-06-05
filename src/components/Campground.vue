<template>
 <ul>
  <li>
    <h3>{{campground.name}}</h3>
  </li>
 </ul> 
</template>

<script>

export default {
  props: ['name']
};


</script>


<style>
h3 {
  margin: 40px 0 0;
  color: darkolivegreen;
  font-family: Cambria, Cochin, Georgia, Times, 'Times New Roman', serif;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #e69e18;
}
</style>
