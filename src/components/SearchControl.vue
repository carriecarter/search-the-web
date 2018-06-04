<template>
  <form @submit.prevent="getPark(campgrounds)">
    <label>State:</label>
    <input v-model="search"/>
    <button type="submit">Search</button>
  </form>
</template>

<script>
export default {
  data() {
    return { search: '' };
  },
  props: {
    onSearch: {
      type: Function,
      required: true
    }
  }
};
</script>