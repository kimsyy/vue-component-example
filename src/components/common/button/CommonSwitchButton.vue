<template>
	<div class="wrap-switch" :class="{ on: inputVal }" @click="handleClickSwitch">
    <input type="checkbox" v-model="inputVal">
    <span class="switch"></span>
	</div>
</template>

<script>
export default {
	name: 'CommonSwitchButton',

	props: {
    value: {
      type: Boolean,
      default: false,
    },
  },
  
  computed: {
    inputVal: {
      get() {
        return this.value;
      },

      set(val) {
        this.$emit('input', val);
      }
    }
  },

  methods: {
    
    handleClickSwitch() {
      this.inputVal = !this.inputVal;
    }
  },
}
</script>

<style scoped lang="scss">
  .wrap-switch {
    cursor: pointer;
    vertical-align: middle;
    display: inline-block;
    position: relative;

    input {
      position: absolute;
      top: 0;
      left: 0;
      opacity: 0;
      width: 0;
      height: 0;
    }

    .switch {
      position: relative;
      display: inline-block;
      width: 40px;
      height: 20px;
      background-color: $basic-color;
      border-radius: 10px;
      border: 1px solid $basic-color;
      transition: all .3s;

      &:after {
        content: '';
        position: absolute;
        top: 2px;
        left: 2px;
        width: 16px;
        height: 16px;
        background-color: #fff;
        border-radius: 100%;
        transition: all .3s;
      }
    }

    &.on {
      .switch {
        background-color: $primary-color;
        border-color: $primary-color;

        &:after {
          left: 100%;
          margin-left: -18px;
        }
      }
    }
  }
</style>