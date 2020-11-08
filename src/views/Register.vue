<template>
  <div>
    <h1 class='title'>회원가입</h1>

    <div>
      <common-form :label-width="100">
        <common-form-item :label="'아이디'">
          <common-input
            v-model="form.id"
            :placeholder="'아이디'"
            :autoFocus="true"
          ></common-input>
        </common-form-item>

        <common-form-item :label="'비밀번호'">
          <common-input
            v-model="form.password"
            :type="'password'"
            :placeholder="'비밀번호'"
          ></common-input>
        </common-form-item>

        <common-form-item :label="'생일'">
          <common-select
            v-model="form.year"
            :placeholder="'년'"
          >
            <common-select-option
              v-for="(option, index) in optionsYear"
              :key="`${option.value}-${index}`"
              :label="option.label"
              :value="option.value">
            ></common-select-option>
          </common-select>
        </common-form-item>
      </common-form>
    </div>

    <div>
      <common-button :type="'primary'" @click.native="handleRegister">가입하기</common-button>
    </div>
  </div>
</template>

<script>

const OPTIONS_YEAR = [{
  value: '',
  label: '기본값'
},
  {
  value: '2000',
  label: '2000'
}, {
  value: '2001',
  label: '2001'
}];

export default {
  data() {
    return {
      form: {
        id: '',
        password: '',
        year: '',
      },

      optionsYear: OPTIONS_YEAR,
    }
  },

  methods: {
    handleRegister() {
      console.log(this.form)
    }
  },
}
</script>

<style scoped lang="scss">
  .title {
    @extend %title-comp;
  }
</style>