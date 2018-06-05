<template>
  <form @submit.prevent="onSearch(search)">
    <label><strong>NEWS:</strong></label>
    <input v-model="search" onSearch="this.value=''" placeholder="Land And Water Conservation Fund"/>
    <button type="submit">SEARCH</button>
  </form>
</template>

<script>
export default {
  data() {
    return {
      search: ''
    };
  },
  props: {
    onSearch: {
      type: Function,
      required: true
    }
  }
};
</script>

<style>
form {
  display: flex;
  justify-content: center;
  margin-top: 20%;
}
</style>