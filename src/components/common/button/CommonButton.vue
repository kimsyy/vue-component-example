<template>
  <div :class="[`${type}`, 'wrap-btn']">
		<button class="btn">
			<slot></slot>
		</button>
  </div>
</template>

<script>
export default {
	name: 'CommonButton',
	
  props: {
    type: {
      type: String,
      default: 'basic', // 'basic' || 'primary'
    }  
  },
}
</script>

<style scoped lang="scss">
	.wrap-btn {
		display: inline-block;

		.btn {
			cursor: pointer;
			min-width: 80px;
			padding: 10px;
			border: 1px solid $basic-color;
			border-radius: 4px;
			outline: none;
			transition: all .1s linear;
			opacity: 1;

			&:hover {
				opacity: .7;
			}
		}

		&.basic {
			.btn {
				color: #666;
				border-color: $basic-color;
				background-color: #fff;

				&:hover {
					color: #fff;
					border-color: $primary-color;
					background-color: $primary-color;
				}
			}
		}

		&.primary {
			.btn {
				color: #fff;
				border-color: $primary-color;
				background-color: $primary-color;

				&:hover {
					color: #666;
					border-color: $basic-color;
					background-color: #fff;
				}
			}
		}
	}
</style>