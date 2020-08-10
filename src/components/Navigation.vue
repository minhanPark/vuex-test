<template>
  <div>
    <router-link to="/">인덱스 페이지</router-link>
    <router-link to="/list">리스트 페이지</router-link>
    <router-link to="/test">테스트 페이지</router-link>
    <router-link to="/edit">수정 페이지</router-link>
    <router-link to="/table">테이블 페이지</router-link>
  </div>
</template>

<script>
export default {};
</script>

<style scoped>
div {
  padding: 4px;
  background-color: #636e72;
}
a {
  color: #b2bec3 !important;
  text-decoration: none;
  padding: 8px 12px;
  margin: 0 10px;
}
.router-link-exact-active {
  color: #dfe6e9 !important;
  font-weight: bold;
}
</style>
