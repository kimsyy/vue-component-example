<template>
    <div class="wrap-input" :class="{ onFocus: isFocus }">
      <input
        ref="input" 
        v-model="inputVal"
        :type="typeValue"        
        :placeholder="placeholder"
        @focus="isFocus = true"
        @blur="isFocus = false"/>

      <div class="wrap-side-btn">
        <span 
          class="btn-clear"
          v-show="value.length > 0"
          @click="handleClearValue"
        >
          <font-awesome-icon icon="times-circle" />
        </span>

        <span 
          class="btn-show-password"
          v-show="value.length > 0 && type === 'password'"
          @click="handleShowPassword"
        >
          <font-awesome-icon icon="eye" />
        </span>
      </div>
    </div>
</template>

<script>
export default {
  name: 'CommonInput',

  props: {
    type: {
      type: String, // 'text' || 'password'
      default: 'text',
    },
    
    value: {
      type: String,
      default: '',
    },

    placeholder: {
      type: String,
      default: '',
    },

    autoFocus: {
      type: Boolean,
      default: false,
    }
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

  data() {
    return {
      isFocus: false,
      typeValue: '',
    }
  },

  methods: {
    handleShowPassword() {
      this.typeValue === 'text' ? this.typeValue = 'password' : this.typeValue = 'text';
    },

    handleClearValue() {
      this.inputVal = '';
    }
  },
  
  created() {
    this.typeValue = this.type;

    this.$nextTick(() => {
      if (this.autoFocus) {
        this.$refs.input.focus();
      }
    });
  }
}
</script>

<style scoped lang="scss">
.wrap-input {
  position: relative;
  padding: 10px 55px 10px 10px;
  border: 1px solid #dcdfe6;
  border-radius: 4px;
  transition: border-color .2s linear;

  &.onFocus {
    border-color: #409eff;
  }

  input {
    box-sizing: border-box;
    display: inline-block;
    width: 100%;
    height: 20px;
    line-height: 20px;
    color:#606266;  
    outline: none;
    border: none;

    &::placeholder {
      opacity: .7;
    }
  }

  .wrap-side-btn {
    position: absolute;
    top: 10px;
    right: 10px;

    span {
      cursor: pointer;
      margin-left: 5px;
      opacity: .6;
      
      &:hover {
        opacity: 1;
      }
    }
  }
}
</style>
