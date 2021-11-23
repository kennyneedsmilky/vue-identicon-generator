<template>
  <div class="view">
    <h3>{{ title }}</h3>
    
    <div>
      <output-identicon :output="inputMsg"></output-identicon>
    </div>

    <div class="input">
      <h4>Write your name here:</h4>
      <input type="text" v-model="inputMsg" @input="updateIdenticon" />
    </div>

  </div>
</template>

<script>
require('./assets/js/jdenticon.min.js');
import OutputIdenticon from "./components/OutputIdenticon.vue";
export default {
  name: 'App',
  components: {
    OutputIdenticon
  },
  data() {
    return {
      title: "Identicon Generator",
      inputMsg: "",
    }
  },
  computed: {

  },
  methods: {
    updateIdenticon() {

    }
  },
}
</script>

<style>
  * {
    padding: 0;
    margin: 0;
    font-family: Arial, Helvetica, sans-serif;
  }

  body {
    display: flex;
    justify-content: center;
    align-items: center;
    background-color: whitesmoke;
    height: 100vh;
  }

  .view {
    padding: 20px;
    border-radius: 10px;
    background-color: white;
    box-shadow: 1px 1px 5px gray;
    max-width: 300px;
  }

  .view, .input {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
  }
</style>
