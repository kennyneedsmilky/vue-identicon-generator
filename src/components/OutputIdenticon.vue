<template>
  <div class="view">
    <h3>{{ title }} {{ identiconListNumber + 1 }}</h3>
    <div class="identicon" v-if="outputString === ''" width="100" height="100"></div>
    <div class="identicon" v-else-if="outputString === firstIdenticon" width="100" height="100"></div>
    <div class="identicon" v-else v-html="outputString"></div>
    <h4>Write your name here:</h4>
    <div class="input-module">
      <input type="text" maxlength="32" placeholder="ex: Kenny" v-model="inputString" @input="updateIdenticon" />
      <button class="download-button" :disabled=isDisabled @click="downloadIdenticon"><i class="i-download"></i></button>
    </div>
  </div>
</template>

<script>
export default {
  name: 'output-identicon',
  props: {
    identiconListNumber: Number,
  },
  data() {
    return {
      title: "Identicon Generator",
      firstIdenticon: `<svg xmlns="http://www.w3.org/2000/svg" width="100" height="100" viewBox="0 0 100 100"><path fill="#545454" d="M32.5 18.5a7,7 0 1,1 14,0a7,7 0 1,1 -14,0M53.5 18.5a7,7 0 1,1 14,0a7,7 0 1,1 -14,0M53.5 81.5a7,7 0 1,1 14,0a7,7 0 1,1 -14,0M32.5 81.5a7,7 0 1,1 14,0a7,7 0 1,1 -14,0M11.5 39.5a7,7 0 1,1 14,0a7,7 0 1,1 -14,0M74.5 39.5a7,7 0 1,1 14,0a7,7 0 1,1 -14,0M74.5 60.5a7,7 0 1,1 14,0a7,7 0 1,1 -14,0M11.5 60.5a7,7 0 1,1 14,0a7,7 0 1,1 -14,0"/><path fill="#d1757a" d="M8 18.5L18.5 8L29 18.5L18.5 29ZM81.5 8L92 18.5L81.5 29L71 18.5ZM92 81.5L81.5 92L71 81.5L81.5 71ZM18.5 92L8 81.5L18.5 71L29 81.5ZM29 29L50 29L50 50L29 50ZM36.6 42a5.5,5.5 0 1,0 10.9,0a5.5,5.5 0 1,0 -10.9,0M71 29L71 50L50 50L50 29ZM52.5 42a5.5,5.5 0 1,0 10.9,0a5.5,5.5 0 1,0 -10.9,0M71 71L50 71L50 50L71 50ZM52.5 58a5.5,5.5 0 1,0 10.9,0a5.5,5.5 0 1,0 -10.9,0M29 71L29 50L50 50L50 71ZM36.6 58a5.5,5.5 0 1,0 10.9,0a5.5,5.5 0 1,0 -10.9,0"/></svg>`,
      inputString: "",
      outputString: "",
      outputDataURL: "",
    }
  },
  computed: {
    isDisabled() {
      return this.inputString.length > 0 ? false : true;
    }
  },
  methods: {
    updateIdenticon() {
      this.outputString = this.$toSvg( this.inputString, 100);
    },
    downloadIdenticon() {
      // TODO fix this asap!
      if (this.outputString !== "") {
        const link = document.createElement(`a`);
        link.download = `identicon_${Date.now()}`;
        // link.href = this.outputString.toDataURL("image/png, 1.0");
        console.log(link);
        // link.click();
      }
    }
  }
}
</script>

<style scoped>
  h1,h2,h3,h4,h5,h6 {
    text-align: center;
  }

  .download-button {
    border: none;
    border-radius: 5px;
    background-color: #1c1cd6;
    box-shadow: 1px 1px 5px #808080;
    width: 2rem;
    min-width: 48px;
    height: 2rem;
    min-height: 48px;
    font-size: 1.75rem;
    color: #ffffff;
    transition: 0.1s;
  }

  .download-button:disabled {
    opacity: 0.25;
  }

  .download-button:active {
    background-color: #6666ff;
    box-shadow: 1px 1px 5px #000000;
    transform: scale(0.8);
  }

  .identicon {
    padding: none;
    border: 1px solid #808080;
    border-radius: 10px;
    width: 100px;
    height: 100px;
  }

  .input-module {
    display: flex;
    align-items: center;
  }

  .view {
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    align-items: center;
    padding: 20px;
    border-radius: 10px;
    background-color: #ffffff;
    box-shadow: 1px 1px 5px #808080;
    margin: 20px;
    width: calc(100% - 80px);
    max-width: 300px;
  }

  @media (hover: hover) {
    .download-button:hover {
      background-color: rgb(102, 102, 255);
      box-shadow: 1px 1px 5px #000000;
      transform: scale(0.8);
      cursor: pointer; 
    }

    .download-button:active {
      background-color: rgb(102, 102, 255);
      box-shadow: 1px 1px 5px #000000;
      transform: scale(0.5);
    }
  }
</style>