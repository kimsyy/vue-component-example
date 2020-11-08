<template>
  <div class="common-row" :style="{ justifyContent: this.justify }">
    <slot></slot>
  </div>
</template>

<script>
export default {
  name: 'CommonRow',
  
  props: {
    justify: {
      type: String,
      default: '',
    }
  },
}
</script>

<style scoped lang="scss">
  .common-row {
    display: flex;
    margin-bottom: 20px;
  }
</style>