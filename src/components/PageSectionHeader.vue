<template>
  <div class=view>
    <h2>{{ $t('PageSectionHeader.title') }}</h2>
    <div>
      <a href="https://github.com/kennyneedsmilky/vue-identicon-generator" target="_blank">
        <h2>
          <i class="i-branch"></i>
        </h2>
      </a>
    </div>
  </div>
</template>

<script>
export default {
  name: 'page-section-header',
  data() {
    return {

    }
  },
}
</script>

<style scoped>
  h1,h2,h3,h4,h5,i {
    color: #ffffff;
  }

  .view {
    position: fixed;
    left: 0;
    top: 0;
    z-index: 1000;
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 0 5px;
    border-right: 1px solid #ffffff;
    border-bottom: 1px solid #ffffff;
    border-left: 1px solid #ffffff;
    border-radius: 0 0 10px 10px;
    background-color: #1c1cd6;
    box-shadow: 0px 1px 5px #808080;
    width: calc(100vw - 22px);
    height: 48px;
  }

  .view div {
    display: flex;
  }

  @media  (max-width: 700px) {
    .view {
      width: calc(100vw - 12px);
    }
  }
</style>