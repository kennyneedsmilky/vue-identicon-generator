<template>
  <div>
    <svg width="100" height="100" :data-jdenticon-value="output"></svg>
  </div>
</template>

<script>
export default {
  name: 'output-identicon',
  props: {
    output: String,
  },
}
</script>

<style scoped>
  svg {
    border: 2px solid gray;
  }
</style>