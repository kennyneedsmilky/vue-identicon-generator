<template>
  <div>
    <div v-if="output === ''" width="100" height="100"></div>
    <div v-else-if="output === firstIdenticon" width="100" height="100"></div>
    <div v-else v-html="output"></div>
  </div>
</template>

<script>
export default {
  name: 'output-identicon',
  props: {
    output: String,
  },
  data() {
    return {
      firstIdenticon: `<svg xmlns="http://www.w3.org/2000/svg" width="100" height="100" viewBox="0 0 100 100"><path fill="#545454" d="M32.5 18.5a7,7 0 1,1 14,0a7,7 0 1,1 -14,0M53.5 18.5a7,7 0 1,1 14,0a7,7 0 1,1 -14,0M53.5 81.5a7,7 0 1,1 14,0a7,7 0 1,1 -14,0M32.5 81.5a7,7 0 1,1 14,0a7,7 0 1,1 -14,0M11.5 39.5a7,7 0 1,1 14,0a7,7 0 1,1 -14,0M74.5 39.5a7,7 0 1,1 14,0a7,7 0 1,1 -14,0M74.5 60.5a7,7 0 1,1 14,0a7,7 0 1,1 -14,0M11.5 60.5a7,7 0 1,1 14,0a7,7 0 1,1 -14,0"/><path fill="#d1757a" d="M8 18.5L18.5 8L29 18.5L18.5 29ZM81.5 8L92 18.5L81.5 29L71 18.5ZM92 81.5L81.5 92L71 81.5L81.5 71ZM18.5 92L8 81.5L18.5 71L29 81.5ZM29 29L50 29L50 50L29 50ZM36.6 42a5.5,5.5 0 1,0 10.9,0a5.5,5.5 0 1,0 -10.9,0M71 29L71 50L50 50L50 29ZM52.5 42a5.5,5.5 0 1,0 10.9,0a5.5,5.5 0 1,0 -10.9,0M71 71L50 71L50 50L71 50ZM52.5 58a5.5,5.5 0 1,0 10.9,0a5.5,5.5 0 1,0 -10.9,0M29 71L29 50L50 50L50 71ZM36.6 58a5.5,5.5 0 1,0 10.9,0a5.5,5.5 0 1,0 -10.9,0"/></svg>`
    }
  }
}
</script>

<style scoped>
  div {
    padding: none;
    border: 1px solid gray;
    border-radius: 10px;
    width: 100px;
    height: 100px;
  }
</style>