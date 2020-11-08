<template>
  <div class="wrap-form-item">
    <label :style="{ width: this.$parent.labelWidth + 'px' }">{{label}}</label>
    <div class="item">
      <slot></slot>
    </div>
  </div>
</template>

<script>
export default {
  name: 'CommonFormItem',

  props: {
    label: {
      type: String,
      default: '',
    }
  },
}
</script>

<style scoped lang="scss">
  .wrap-form-item {
    display: flex;
    align-items: center;
    margin-bottom: 20px;

    label {
      flex-shrink: 0;
    }

    .item {
      flex-grow: 1;
    }
  }
</style>