<template>
  <div>
    <h1>Vuex</h1>
    <p>{{$store.state.language.language}}</p>
    <Child></Child>
  </div>
</template>

<script>
import Child from "./components/Child.vue";

export default {
  name: "App",
  components: {
    Child,
  },
};
</script>

<style>
</style>
