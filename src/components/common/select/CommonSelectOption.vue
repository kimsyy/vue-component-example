<template>
  <li 
    class="item" 
    @click="handleClickItem" 
    :class="{ selectItem: this.$parent.selectVal === this.value }"
  >
    {{label}}
  </li>
</template>

<script>
export default {
  props: {
    label: {
      type: String, 
      default: '',
    },

    value: {
      type: String, 
      default: '',
    },

  },

  methods: {
    handleClickItem() {
      this.$parent.updateValue(this.value);
    }
  },
}
</script>

<style scoped lang="scss">
  .item {
    cursor: pointer;
    min-width: 100px;
    padding: 10px;

    &:hover {
      color: #fff;
      background-color: $basic-color;
    }

    &.selectItem {
      color: $primary-color;
      background-color: $basic-color;
    }
  }
</style>