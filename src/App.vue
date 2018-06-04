<template>
  <div id="app">
    <h1>Hello! I'm App</h1>
    <Loading :loading="loading"/>
    <SearchControl :onSearch="handleSearch"/>
    <CampgroundList :campground="campground"/>
  </div>
</template>

<script>
import CampgroundList from './components/CampgroundList.vue';

export default {
  name: 'app',
  components: {
    CampgroundList
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
