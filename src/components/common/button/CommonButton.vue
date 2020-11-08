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
			opacity: 1;
			cursor: pointer;
			padding: 10px;
			font-weight: 500;
			border: 1px solid $basic-color;
			border-radius: 4px;
			outline: none;
			transition: opacity .1s linear;
		}

		&.basic {
			.btn {
				color: #666;
				border-color: $basic-color;
				background-color: #fff;
			}
		}

		&.primary {
			.btn {
				color: #fff;
				border-color: $primary-color;
				background-color: $primary-color;
			}
		}
	}
</style>