<template>
  <div>
    <v-data-table
      :headers="headers"
      :items="todos"
      :items-per-page="dataPerPage"
      :page.sync="page"
      hide-default-footer
      :height="500"
      :fixed-header="true"
    ></v-data-table>
    <div>
      <v-pagination v-model="page" :total-visible="7" :length="numOfPages" @input="setPage"></v-pagination>
      <!-- <Pagination :page="page" :records="listLength"></Pagination> -->
    </div>
  </div>
</template>

<script>
import { getTodos } from "../api/index";
// import Pagination from "vue-pagination-2";

export default {
  name: "list",
  data() {
    return {
      todos: [],
      headers: [
        { text: "유저ID", value: "userId" },
        { text: "아이디", value: "id" },
        { text: "타이틀", value: "title" },
        { text: "completed", value: "completed" },
      ],
      page: 1,
      dataPerPage: 50,
    };
  },
  async created() {
    const { data } = await getTodos();
    this.todos = data;
  },
  methods: {
    setPage(page) {
      console.log(page);
    },
  },
  // components: {
  //   Pagination,
  // },
  computed: {
    numOfPages() {
      return Math.ceil(this.todos.length / this.dataPerPage);
    },
    listLength() {
      return this.todos.length;
    },
  },
  beforeRouteEnter(to, from, next) {
    console.log("beforeRouteEnter worked");
    console.log(to, from);
    console.log("------------------------------");
    next();
  },
};
</script>

<style scoped>
.v-data-table__wrapper {
  border-radius: 5px;
  min-height: 282px;
  border: 1px solid #aaaaaa;
}
</style>
