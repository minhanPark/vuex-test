<template>
  <div class="container">
    <slot name="header" v-bind:user="user">{{user.lastName}}</slot>
  </div>
</template>

<script>
export default {
  data() {
    return {
      user: {
        firstName: "러닝",
        lastName: "워터",
        fullName: "러닝워터",
      },
    };
  },
};
</script>

<style scoped>
.container {
  padding: 5px;
  border: 1px solid red;
}
</style>