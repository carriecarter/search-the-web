<template>
  <div>
    <h2>PNW National Park Campgrounds</h2>
    <ul>
      <Campground
        v-for="name in campground"
        :key="name"
        :campground="campground"
      />
    </ul>
  </div>
</template>

<script>
import Campground from './Campground';
export default {
  props: ['name', 'description'],
  components: {
    Campground
  }
};
</script>