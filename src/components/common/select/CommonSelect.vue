<template>
  <div
		:style="{ minWidth: wrapWidth + 'px' }"
		class="wrap-select" 
		:class="{ onFocus: isFocus }"
		@click="handleClickSelect"
	>
		<div class="select-input">
			<div class="txt">{{this.selectVal === '' ? this.placeholder : this.selectVal}}</div>
			<span class="icon-arrow">
				<font-awesome-icon icon="angle-down" />
			</span>
		</div>

		<div class="layer" :style="{ minWidth: wrapWidth + 'px' }" v-show="isFocus">
			<ul>
				<slot></slot>
			</ul>
		</div>
  </div>
</template>

<script>
export default {
  props: {
    placeholder: {
      type: String, 
      default: '',
		},
		
		value: {
      type: String,
      default: '',
    },
	},
	
	computed: {
    selectVal: {
      get() {
        return this.value;
      },

      set(val) {
        this.$emit('input', val);
      }
		},
  },

  data() {
    return {
			isFocus: false,
			wrapWidth: 150,
    }
	},
	
	methods: {
		handleClickSelect() {
			this.isFocus = !this.isFocus;
		},

		updateValue(value) {
			this.selectVal = value;
		}
	},
}
</script>

<style scoped lang="scss">
.wrap-select {
	position: relative;
	display: inline-block;

	&.onFocus {
		.select-input {
			border-color: $primary-color;

			.icon-arrow {
				transform: rotate(180deg);
			}
		}
	}

	.select-input {
		box-sizing: border-box;
		cursor: pointer;
		position: relative;
		padding: 10px 30px 10px 10px;
		border: 1px solid $basic-color;
		border-radius: 4px;
		transition: border-color .2s linear;

		&.onFocus {
			border-color: $primary-color;
		}

		.txt {
			box-sizing: border-box;
			display: inline-block;
			width: 100%;
			height: 20px;
			line-height: 20px;
			color:#606266;
			font-size: 14px;
			border: none;
		}
		
		.icon-arrow {
			position: absolute;
			top: 12px;
			right: 12px;
			opacity: .6;
			transform: rotate(0deg);
			transition: transform .2s linear;
		}
	}

	.layer {
		box-sizing: border-box;
		position: absolute;
		top: calc(100% + 5px);
		left: 0;
		padding: 5px 0;
		border: 1px solid $basic-color;
		border-radius: 4px;
		background-color: #fff;
		box-shadow: 0 2px 12px 0 rgba(0,0,0,.1);
	}
}
</style>