<template>
  <div id="app">
    <h1>Hello! I'm App</h1>
    <CampgroundList :campground="campground"/>
  </div>
</template>

<script>
import CampgroundList from './components/CampgroundList';
import Campground from './components/Campground';
import { getCampground } from './services/api';

// eslint-disable-next-line
console.log(process.env.VUE_APP_API_KEY);

export default {
  data() {
    return {
      name: null,

    };
  },

  components: {
    CampgroundList,
    Campground,
  },

  methods: 
    getCampground(name).then(data => {
      this.name = data.data;
      this.loading = false;
    }),
  
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
