<template>
  <form @submit.prevent="onSearch(search)">
    <label>Topic:</label>
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
  margin-top: 5%;
}

input {
  padding: 10px;
  min-width: 200px;
}

label {
  padding-right: 10px;
  font-size: 1.5em;
  font-family: Arial, sans-serif;
  color: grey;
}

button {
  margin: 10px;
  background-color: darkgoldenrod;
  color: #fff;
  font-size: 1em;
}

button:active {
  color: blue;
}
</style>