<template>
  <div>
    <div>테스트 페이지</div>
    <p v-if="getAuth">로그인되어 있는 상태입니다.</p>
    <p v-else>로그인 되어 있지 않은 상태입니다.</p>
    <p>{{`현재 언어는 ${getLanguage}입니다.`}}</p>
  </div>
</template>

<script>
import { mapGetters } from "vuex";

export default {
  name: "Text",
  computed: {
    ...mapGetters({
      getAuth: "auth/getLoginStatus",
      getLanguage: "language/getLanguage",
    }),
  },
};
</script>

<style>
</style>