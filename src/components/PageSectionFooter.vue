<template>
  <div class="view">
    <p> &copy; {{ new Date().getFullYear() }} KenMil</p>
    <div>
      <select v-model="language" name="language" class="language" @change="setLanguage">
        <option value="en-US">{{ $t('languages.english') }}</option>
        <option value="ja-JP">{{ $t('languages.japanese') }}</option>
        <option value="es">{{ $t('languages.spanish') }}</option>
      </select>
      <select v-model="numberOfGenerators" name="Number-of-Generators" class="number-of-generators" @change="setGenerators">
          <option value="1">{{ $tc('PageSectionFooter.numberOfGenerators', 1) }}</option>
          <option value="2">{{ $tc('PageSectionFooter.numberOfGenerators', 2) }}</option>
          <option value="3">{{ $tc('PageSectionFooter.numberOfGenerators', 3) }}</option>
          <option value="4">{{ $tc('PageSectionFooter.numberOfGenerators', 4) }}</option>
          <option value="5">{{ $tc('PageSectionFooter.numberOfGenerators', 5) }}</option>
          <option value="6">{{ $tc('PageSectionFooter.numberOfGenerators', 6) }}</option>
          <option value="7">{{ $tc('PageSectionFooter.numberOfGenerators', 7) }}</option>
          <option value="8">{{ $tc('PageSectionFooter.numberOfGenerators', 8) }}</option>
          <option value="9">{{ $tc('PageSectionFooter.numberOfGenerators', 9) }}</option>
          <option value="10">{{ $tc('PageSectionFooter.numberOfGenerators', 10) }}</option>
      </select>
    </div>
  </div>
</template>

<script>
export default {
  name: 'page-section-footer',
  data() {
    return {
      numberOfGenerators: 1,
      language: window.navigator.language || navigator.userLanguage || this.$i18n.locale,
    }
  },
  methods: {
    setGenerators() {
      this.$emit('setGenerators', this.numberOfGenerators);
    },
    setLanguage() {
      this.$i18n.locale = this.language;
    }
  },
}
</script>

<style scoped>
  .number-of-generators, .language {
    padding: 5px;
    border: 1px solid #000000;
    border-radius: 10px;
    background-color: #ffffff;
    margin-left: 4px;
    margin-right: 4px;
    height: 36px;
    color: #000000;
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