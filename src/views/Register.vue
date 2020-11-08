<template>
  <div>

    <common-row style="margin-bottom:0">
      <common-col :span="1">
        <h1 class='title'>회원가입</h1>
      </common-col>
    </common-row>
    
    <div>
      <common-form :label-width="80">
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
          <common-row style="margin-bottom:0">
            <common-col>
              <common-select
                style="width:100px"
                v-model="form.year"
                :placeholder="'년'"
              >
                <common-select-option
                  v-for="(option, index) in optionsYear"
                  :key="`${option.value}-${index}`"
                  :label="option.label"
                  :value="option.value">
                ></common-select-option
                >
              </common-select>
            </common-col>

            <common-col>
              <common-select
                style="margin-left:10px"
                v-model="form.month"
                :placeholder="'월'"
              >
                <common-select-option
                  v-for="(option, index) in optionsMonth"
                  :key="`${option.value}-${index}`"
                  :label="option.label"
                  :value="option.value">
                ></common-select-option
                >
              </common-select>
            </common-col>

            <common-col>
              <common-select
                style="margin-left:10px"
                v-model="form.day"
                :placeholder="'일'"
              >
                <common-select-option
                  v-for="(option, index) in optionsDay"
                  :key="`${option.value}-${index}`"
                  :label="option.label"
                  :value="option.value">
                ></common-select-option
                >
              </common-select>
            </common-col>
          </common-row>

        </common-form-item>
      </common-form>
    </div>

    <common-row :justify="'center'">
      <common-col>
        <common-button :type="'primary'" @click.native="handleRegister">가입하기</common-button>
      </common-col>
    </common-row>
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

const OPTIONS_MONTH = [{
  value: '',
  label: '기본값'
},
  {
  value: '1',
  label: '1'
}, {
  value: '2',
  label: '2'
}];

const OPTIONS_DAY = [{
  value: '',
  label: '기본값'
},
  {
  value: '1',
  label: '1'
}, {
  value: '2',
  label: '2'
}];

export default {
  data() {
    return {
      form: {
        id: '',
        password: '',
        year: '',
        month: '',
        day: '',
      },

      optionsYear: OPTIONS_YEAR,
      optionsMonth: OPTIONS_MONTH,
      optionsDay: OPTIONS_DAY,
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