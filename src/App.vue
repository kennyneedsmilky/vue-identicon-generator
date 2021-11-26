<template>
  <div class=page-view>
    <div class="identicon-list">
      <page-section-header></page-section-header>
      <output-identicon v-for="identicon in identiconList" :key="identicon" :identiconListNumber="identicon"></output-identicon>
      <page-section-footer @setGenerators="setGeneratorNumbers"></page-section-footer>
    </div>
  </div>
</template>

<script>
// Components
import OutputIdenticon from "./components/OutputIdenticon.vue";
import PageSectionHeader from "./components/PageSectionHeader.vue";
import PageSectionFooter from "./components/PageSectionFooter.vue";
export default {
  name: 'App',
  components: {
    OutputIdenticon,
    PageSectionHeader,
    PageSectionFooter,
  },
  data() {
    return {
      title: "Identicon Generator",
      identiconQuantity: 1,
    }
  },
  computed: {
    identiconList() {
      const identiconListArray = [];
      for (let i = 0; i < this.identiconQuantity; i++) {
        identiconListArray.push(i);
      }
      return identiconListArray;
    },
  },
  methods: {
    setGeneratorNumbers(num) {
      this.identiconQuantity = Number(num);
    }
  },
}
</script>

<style>
  @import url("./assets/css/kenmil.css");

  * {
    padding: 0;
    margin: 0;
    font-family: Arial, Helvetica, sans-serif;
    -ms-overflow-style: none;  /* Internet Explorer 10+ */
    scrollbar-width: none;  /* Firefox */
  }

  ::-webkit-scrollbar { /* Chrome, Safari, newer versions of Opera */
    width: 10px;
  }

  ::-webkit-scrollbar-track { /* color of the tracking area */
    background: #000000;
  }

  ::-webkit-scrollbar-thumb {
    border: 1px solid #ffffff;    /* creates padding around scroll thumb */
    border-radius: 10px;            /* roundness of the scroll thumb */
    background-color: #6666ff;    /* color of the scroll thumb */
  }

  a {
    color: #ffffff;
    transition: 0.1s;
  }

  a:active {
    transform: scale(1.1);
  }

  body {
    display: flex;
    justify-content: center;
    align-items: center;
    background-color: #f5f5f5;
  }

  h1,h2,h3,h4,h5,h6 {
    padding: 0.5rem;
  }

  input {
    padding: 0 10px;
    border: 1px solid #808080;
    border-radius: 10px;
    margin: 10px;
    width: calc(100% - 20px);
    height: 2rem;
    min-height: 48px;
    font-size: 1.25rem;
    font-weight: bold;
  }

  input:focus {
    border: 1px solid #f5f5f5;
    outline: none;
    outline-style: solid;
    outline-color: #ff002b;
  }

  .identicon-list {
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    width: 100%;
  }

  .page-view {
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    align-items: center;
    margin: 48px 0;
    width: 100vw;
  }

  @media (hover: hover) {
    a:hover {
      transform: scale(1.1);
    }
  }
</style>
