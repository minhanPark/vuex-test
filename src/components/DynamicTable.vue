<template>
  <div class="wrapper">
    <VueTableDynamic :params="params" ref="table"></VueTableDynamic>
  </div>
</template>

<script>
import VueTableDynamic from "vue-table-dynamic";

const random = () => {
  return parseInt(Date.now() + Math.random() * 10000000)
    .toString(16)
    .slice(-6);
};

export default {
  data() {
    return {
      params: {
        data: [
          [
            "Index",
            `Data1`,
            `Data2`,
            `Data3`,
            `Data4`,
            `Data5`,
            `Data6`,
            `Data1`,
            `Data2`,
            `Data3`,
            `Data4`,
            `Data5`,
            `Data6`,
          ],
        ],
        header: "row",
        border: true,
        stripe: true,
        columnWidth: [
          { column: 0, width: 100 },
          { column: 2, width: 400 },
        ],
        fixed: 0,
      },
    };
  },
  mounted() {
    for (let i = 0; i < 5; i++) {
      this.params.data.push([
        i + 1,
        `${random()}`,
        `${random()}`,
        `${random()}`,
        `${random()}`,
        `${random()}`,
        `${random()}`,
        `${random()}`,
        `${random()}`,
        `${random()}`,
        `${random()}`,
        `${random()}`,
        `${random()}`,
      ]);
    }
  },
  components: {
    VueTableDynamic,
  },
};
</script>

<style scoped>
.wrapper {
  width: 50%;
}
</style>
