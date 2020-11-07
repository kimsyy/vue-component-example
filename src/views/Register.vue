<template>
  <div>
    <h1>회원가입</h1>
    <div>
      <common-input
        v-model="form.id"
        :placeholder="'아이디'"
        :autoFocus="true"
      ></common-input>


      <common-input
        v-model="form.password"
        :type="'password'"
        :placeholder="'비밀번호'"
      ></common-input>

    </div>

    <div>
      <button @click="handleRegister">가입하기</button>
    </div>
  </div>
</template>

<script>
import CommonInput from '@/components/common/CommonInput.vue';

export default {
  components: {
    CommonInput
  },

  data() {
    return {
      form: {
        id: '',
        password: '',
      }
    }
  },

  methods: {
    handleRegister() {
      console.log(this.form)
    }
  },
}
</script>
