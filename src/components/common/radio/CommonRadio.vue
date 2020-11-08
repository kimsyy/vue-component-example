<template>
  <div @click="handleClickRadio" class="wrap-radio" :class="{ on: this.$parent.inputVal === this.value}">
    <span class="circle"></span>
    <span class="txt">
      <slot></slot>
    </span>
  </div>
</template>

<script>
export default {
	name: 'CommonRadio',

	props: {
    value: {
			type: String,
			default: '',
    },
  },

  methods: {
    handleClickRadio() {
      this.$parent.updateValue(this.value);
    }
  },
}
</script>

<style scoped lang="scss">
  .wrap-radio {
    position: relative;
    display: inline-block;
    margin-right: 5px;
    padding: 4px 4px 4px 25px;

    .circle {
      position: absolute;
      display: inline-block;
      top: 2px;
      left: 0;
      width: 18px;
      height: 18px;
      border-radius: 50%;
      background-color: $basic-color;

      &:after {
        content: '';
        position: absolute;
        top: 3px;
        left: 3px;
        width: 12px;
        height: 12px;
        border-radius: 50%;
        background-color: $primary-color;
        transition: transform .1s linear;
        transform: scale(0);
      }
    }

    &.on {
      .txt {
        color: $primary-color;
      }

      .circle {
        &:after {
          transform: scale(1);
        }
      }
    }
  }
</style>