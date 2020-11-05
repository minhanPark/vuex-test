<template>
  <div>
    <div>테스트 페이지</div>
    <p v-if="getAuth">로그인되어 있는 상태입니다.</p>
    <p v-else>로그인 되어 있지 않은 상태입니다.</p>
    <p>{{`현재 언어는 ${getLanguage}입니다.`}}</p>
    <SubmitButton>버튼을 통해서 전송하기</SubmitButton>
    <BaseLayout>
      <template v-slot:header>
        <h1>페이지 타이틀입니다.</h1>
      </template>
      <template v-slot:default>
        <div>메인 부분입니다.</div>
      </template>
      <template v-slot:footer>
        <div>푸터 부분</div>
      </template>
    </BaseLayout>
    <user-select>
      <template v-slot:header="{ user }">{{user}}</template>
    </user-select>
    <CommonModal v-if="showModal"></CommonModal>
    <FormTest v-bind:person="person"></FormTest>
    <InputTest v-model="checked"></InputTest>
    <button v-on:click="handleClick">클릭</button>
  </div>
</template>

<script>
import { mapGetters } from "vuex";
import SubmitButton from "../components/SubmitButton.vue";
import BaseLayout from "../components/BaseLayout.vue";
import UserSelect from "../components/UserSelect.vue";
import CommonModal from "../components/CommonModal.vue";
import FormTest from "../components/FormTest";
import InputTest from "../components/InputTest";

export default {
  name: "Test",
  data() {
    return {
      showModal: true,
      person: {},
      checked: true,
    };
  },
  computed: {
    ...mapGetters({
      getAuth: "auth/getLoginStatus",
      getLanguage: "language/getLanguage",
    }),
  },
  components: {
    SubmitButton,
    BaseLayout,
    UserSelect,
    CommonModal,
    FormTest,
    InputTest,
  },
  beforeRouteEnter(to, from, next) {
    console.log("beforeRouteEnter worked");
    console.log(to, from);
    console.log("------------------------------");
    next();
  },
  beforeRouteLeave(to, from, next) {
    console.log("beforeRouteLeave worked");
    console.log(to, from);
    console.log("------------------------------");
    next();
  },
  methods: {
    handleClick() {
      console.log("클릭");
      this.person = {
        name: "박민한",
        age: "30",
        nickname: "runningwater",
      };
    },
  },
};
</script>

<style>
</style>