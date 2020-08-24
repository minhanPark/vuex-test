<template>
  <v-app>
    <div>
      <Navigation></Navigation>
      <router-view></router-view>
    </div>
    <Spinner :loading="loadingStatus"></Spinner>
  </v-app>
</template>

<script>
import Navigation from "./components/Navigation.vue";
import Spinner from "./components/Spinner.vue";
import Bus from "./utils/bus";

export default {
  name: "App",
  components: {
    Navigation,
    Spinner,
  },
  data() {
    return {
      loadingStatus: false,
    };
  },
  methods: {
    startSpinner() {
      this.loadingStatus = true;
    },
    endSpinner() {
      this.loadingStatus = false;
    },
  },
  created() {
    Bus.$on("start:spinner", this.startSpinner);
    Bus.$on("end:spinner", this.endSpinner);
  },
  beforeDestroy() {
    Bus.$off("start:spinner", this.startSpinner);
    Bus.$off("end:spinner", this.endSpinner);
  },
};
</script>
