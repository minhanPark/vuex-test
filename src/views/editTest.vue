<template>
  <div>
    <v-data-table :headers="headers" :items="desserts">
      <template v-slot:item.name="props">
        <v-edit-dialog
          :return-value.sync="props.item.name"
          @save="save(props.item)"
          @cancel="cancel"
          @open="open"
          @close="close"
        >
          {{props.item.name}}
          <template v-slot:input>
            <v-text-field v-model="props.item.name" label="Edit" single-line counter></v-text-field>
          </template>
        </v-edit-dialog>
      </template>
    </v-data-table>
  </div>
</template>

<script>
export default {
  data() {
    return {
      snack: false,
      snackColor: "",
      snackText: "",
      headers: [
        { text: "name", value: "name" },
        { text: "addNum", value: "count2" },
        { text: "foo", value: "count3" },
        { text: "bar", value: "count4" },
      ],
      desserts: [
        {
          name: "23",
          count2: "24",
          count3: "25",
          count4: "26",
        },
        {
          name: "25",
          count2: "25",
          count3: "25",
          count4: "25",
        },
        {
          name: "26",
          count2: "26",
          count3: "26",
          count4: "26",
        },
        {
          name: "27",
          count2: "27",
          count3: "27",
          count4: "27",
        },
        {
          name: "28",
          count2: "28",
          count3: "28",
          count4: "28",
        },
        {
          name: "23",
          count2: "24",
          count3: "25",
          count4: "26",
        },
        {
          name: "23",
          count2: "24",
          count3: "25",
          count4: "26",
        },
      ],
    };
  },
  methods: {
    save(item) {
      console.log(item);
      this.snack = true;
      item.count2 = Number(item.name) + 20;
      item.count3 = Number(item.name) + 30;
      item.count4 = Number(item.name) + 40;
      this.snackColor = "success";
      this.snackText = "Data saved";
    },
    cancel() {
      this.snack = true;
      this.snackColor = "error";
      this.snackText = "Canceled";
    },
    open() {
      this.snack = true;
      this.snackColor = "info";
      this.snackText = "Dialog opened";
    },
    close() {
      console.log("Dialog closed");
    },
  },
};
</script>

<style>
</style>