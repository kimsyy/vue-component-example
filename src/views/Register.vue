<template>
  <div>
    <h1 class='title'>회원가입</h1>

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
      <common-button :type="'primary'" @click.native="handleRegister">가입하기</common-button>
    </div>
  </div>
</template>

<script>
import CommonInput from '@/components/common/CommonInput.vue';
import CommonButton from '@/components/common/CommonButton.vue';

export default {
  components: {
    CommonInput,
    CommonButton,
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

<style scoped lang="scss">
  .title {
    @extend %title-comp;
  }
</style>