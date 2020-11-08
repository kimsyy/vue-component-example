<template>
  <form class="wrap-form">
    <slot></slot>
  </form>
</template>

<script>
export default {
  name: 'CommonForm',
  
  props: {
    labelWidth: {
      type: Number,
      default: 150,
    }
  },
}
</script>

<style scoped lang="scss">
  .wrap-form {
    padding: 20px;
  }
</style>