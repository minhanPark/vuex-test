<template>
  <div>
    index page
    {{getState}}
    <p>{{getAuth}}</p>
    <p>{{getLanguage}}</p>
    <p>{{getInformation.name}}</p>
    <p>{{getInformation.weather}}</p>
    <button v-on:click="handleLogOut">{{handleButtonText}}</button>
    {{getStateLang}}
    <div>
      <select name="language" id="language" class="language-select" v-model="getStateLang">
        <option value="ko_KR">한국어</option>
        <option value="en_US">English</option>
      </select>
    </div>
  </div>
</template>

<script>
import { mapGetters } from "vuex";

export default {
  name: "index",
  data() {
    return {
      getStateLang: this.$store.state.language.language,
    };
  },
  computed: {
    ...mapGetters({
      getAuth: "auth/getLoginStatus",
      getLanguage: "language/getLanguage",
      getInformation: "auth/getInformation",
    }),
    getState() {
      console.log(this.$store);
      return this.$store.state;
    },
    handleButtonText() {
      return this.getAuth ? "로그아웃" : "로그인";
    },
  },
  methods: {
    handleLogOut() {
      this.$store.commit("auth/login", !this.getAuth);
    },
    handleLanguage(newLanguage) {
      this.$store.commit("language/setLanguage", newLanguage);
    },
  },
  watch: {
    getStateLang(newLanguage) {
      console.log(newLanguage);
      this.handleLanguage(newLanguage);
    },
  },
};
</script>

<style scoped>
button {
  color: white;
  background-color: black;
}
</style>
