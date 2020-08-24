<template>
  <div id="ErrorModal">
    <!--오류 모달-->
    <v-dialog v-model="dialog" persistent>
      <!--persistent: 검은 영역 눌러도 안 닫힘-->

      <!--버튼 영역-->
      <template v-slot:activator="{ on, attrs }">
        <v-btn
          color="pink"
          dark
          v-bind="attrs"
          v-on="on"
          style="margin: 0 auto; left: 50%;"
        >ErrorModal</v-btn>
      </template>
      <!--끝: 버튼 영역-->

      <!--오류 모달 영역-->
      <v-card class="modal error-modal">
        <!--타이틀-->
        <!--.v-card-title 기본값은 남색 배경,
            클래스에 .yellow-background = 노란 배경,
        .v-card-title 클래스에 .pink-background = 분홍 배경-->
        <v-card-title class="yellow-background">
          400
          <v-btn class="close-icon-button" @click="dialog = false"></v-btn>
        </v-card-title>
        <!-- <slot name="header"></slot> -->

        <!--컨텐츠-->
        <v-card-text>
          text text text text text text text text text text
          <!-- <slot name="content"></slot> -->
        </v-card-text>
      </v-card>
      <!--끝: 오류 모달 영역-->
    </v-dialog>
    <!--끝: 오류 모달-->
  </div>
</template>

<script>
export default {
  name: "ErrorModal",

  data() {
    return {
      dialog: false,
    };
  },
};
</script>

<style scoped>
.modal {
  min-width: 250px;
  max-width: 1200px;
  color: #333;
  z-index: 100;
  border-radius: 10px !important;
  background-color: #fff;
}
</style>