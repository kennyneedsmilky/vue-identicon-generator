<template>
  <div class="view">
    <p> &copy; {{ new Date().getFullYear() }} KenMil</p>
    <select v-model="numberOfGenerators" name="Number of Generators" class="number-of-generators" @change="setGenerators">
        <option value="1">1 Generator</option>
        <option value="2">2 Generators</option>
        <option value="3">3 Generators</option>
        <option value="4">4 Generators</option>
        <option value="5">5 Generators</option>
        <option value="6">6 Generators</option>
        <option value="7">7 Generators</option>
        <option value="8">8 Generators</option>
        <option value="9">9 Generators</option>
        <option value="10">10 Generators</option>
    </select>
  </div>
</template>

<script>
export default {
  name: 'page-section-footer',
  data() {
    return {
      numberOfGenerators: 1,
    }
  },
  methods: {
    setGenerators() {
      this.$emit('setGenerators', this.numberOfGenerators);
    }
  },
}
</script>

<style scoped>
  .number-of-generators {
    padding: 5px;
    border: 1px solid #000000;
    border-radius: 10px;
    background-color: #ffffff;
    height: 36px;
    font-weight: bold;
    text-align: center;
  }

 .view {
    position: fixed;
    left: 0;
    bottom: 0;
    z-index: 1001;
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 0 5px;
    border: 1px solid #ffffff;
    border-radius: 10px;
    background-color: #1c1cd6;
    box-shadow: 0px -1px 5px #808080;
    width: calc(100vw - 22px);
    height: 48px;
    color: #ffffff;
    font-weight: bold;
  }

  @media  (max-width: 700px) {
    .view {
      width: calc(100vw - 12px);
    }
  }
</style>