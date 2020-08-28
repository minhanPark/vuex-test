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
    <button v-on:click="handleToken">토큰해석</button>
  </div>
</template>

<script>
import { mapGetters } from "vuex";
import jwt from "jsonwebtoken";
import axios from "axios";

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
    async handleToken() {
      // const token =
      //   "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiIxMjM0NTY3ODkwIiwibmFtZSI6IkpvaG4gRG9lIiwiaWF0IjoxNTE2MjM5MDIyLCJyb2xlIjoibWFuYWdlciIsImVtYWlsIjoicnVubmlud2FnZXJAZ21haWwuY29tIn0.RgQ-93V2gkcAgbiYr4_lA9ZB8Dgwv46Fvo_ybKlJYyk";
      // const decoded = jwt.decode(token);
      const {
        data: {
          payload: {
            //code: statusCode,
            data,
            //message,
            // status
          },
        },
      } = await axios.put(
        "http://optatumplatform.iptime.org:20000/api/authenticate/login",
        { username: "jieun@gmail.com", password: "1234" }
      );
      console.log(data.accessTicket);
      console.log(jwt.decode(data.accessTicket, { complete: true }));
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
