<template>
  <div>
    <slot></slot>
	</div>
</template>

<script>
export default {
	name: 'CommonRadioGroup',

	props: {
		name: {
			type: String,
			value: '',
		},

		value: {
      type: String,
      default: '',
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
		updateValue(val) {
			this.inputVal = val;
		}
	},
}
</script>

<style scoped lang="scss">
</style>