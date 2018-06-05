<template>
  <div>
    <h2>CampgroundList</h2>
    <ul>
      <name 
        v-for="name in data"
        :key="name"
        :campgroundName="name"
      />
    </ul>
  </div>
</template>

<script>
import Campground from './Campground';

export default {
  props: ['name'],
  components: {
    Campground
  }
};

</script>

<style>



</style>