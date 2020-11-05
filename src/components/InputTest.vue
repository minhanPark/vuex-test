<template>
  <div>
    <input type="checkbox" v-bind:value="value" v-on:click="toggleCheckbox" />
  </div>
</template>

<script>
export default {
  props: ["value"],
  methods: {
    toggleCheckbox() {
      this.$emit("input", !this.value);
    },
  },
};
</script>

<style>
</style>