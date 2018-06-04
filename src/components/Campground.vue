<template>
  <li>
    <h3>{{name}}</h3>
    <p>{{description}}</p>
    <p>{{toilets}}</p>
  </li>
</template>

<script>
export default {
  props: ['name', 'description']
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
