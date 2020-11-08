<template>
  <div class="common-col" :style="{ flexGrow: this.span }">
    <slot></slot>
  </div>
</template>

<script>
export default {
  name: 'CommonCol',
  
  props: {
    span: {
      type: Number,
      default: 0,
    }
  },
}
</script>

<style scoped lang="scss">
</style>