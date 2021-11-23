<template>
  <div class="view">
    <h3>{{ title }}</h3>
    
    <div>
      <output-identicon :output="svgString"></output-identicon>
    </div>

    <div class="input">
      <h4>Write your name here:</h4>
      <input type="text" maxlength="20" placeholder="ex: Kenny" v-model="inputMsg" @input="updateIdenticon" />
    </div>

  </div>
</template>

<script>
// Components
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
      svgString: "",
    }
  },
  methods: {
    updateIdenticon() {
      this.svgString = this.$toSvg( this.inputMsg, 100);
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

  h2,h3,h4 {
    padding: 10px;
  }

  input {
    padding: 0 10px;
    border: 1px solid gray;
    border-radius: 10px;
    margin: 10px;
    height: 32px;
    font-size: 16px;
    font-weight: bold;
  }

  input:focus {
    border: 1px solid whitesmoke;
    outline: none;
    outline-style: solid;
    outline-color: rgb(255, 0, 43);
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
