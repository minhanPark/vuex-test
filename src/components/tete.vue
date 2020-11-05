<template>
  <div id="Transaction">
    <TransactionSearchView
      v-bind:search="payload"
      v-on:findTransactionListEvent="findTransaction"
    />

    <v-tabs-items v-model="tab" class="tab">
      <v-tab-item v-for="item in items" :key="item">
        <v-card flat>
          <TransactionTabs
            v-on:transactionDetailTabEvent="transactionDetailTab"
          />
          <v-card-text>
            <div v-if="detailViewTabMove === ''">
              <TransactionDetailView
                v-bind:listData="showTransactionListData"
                v-on:moveChagebackEvent="moveChargebackEvent"
              />
            </div>
            <div v-if="detailViewTabMove === '거래건별'">
              <TransactionDetailView
                v-bind:listData="showTransactionListData"
                v-on:moveChagebackEvent="moveChargebackEvent"
              />
            </div>
          </v-card-text>
        </v-card>
      </v-tab-item>
    </v-tabs-items>
  </div>
</template>

<script>
import TransactionSearchView from "./TransactionSearch";
import TransactionDetailView from "./TransactionDetail";
import TransactionTabs from "./TransactionTab";
import { findTransactionList, findRoyalPayList } from "../../api/transaction";
import { moveChargeback } from "../../api/chargeback";

export default {
  name: "Transaction",

  data() {
    return {
      payload: [],
      transactionList: [], //전체 리스트
      information: [], //계약정보
      merchant: [], //가맹점정보
      payment: [],
      state: [],
      authenticate: [],
      showTransactionList: [],
      showTransactionListData: [],
      detailViewTabMove: "",
      tab: 0,
      items: ["거래건별"],
    };
  },
  methods: {
    transactionDetailTab(data) {
      this.detailViewTabMove = data;
    },

    async findTransaction(searchData) {
      console.log("data is", searchData);
      const {
        data: {
          payload: { code, data, message },
        },
      } = searchData.royalPay
        ? await findRoyalPayList(searchData)
        : await findTransactionList(searchData);
      console.log(code, message);
      console.log("data is", data);
      this.showTransactionListData = data.resource.map((data) => {
        const list = data.royalTransaction
          ? {
              name: "RoyalPay",
              acquireMerchantId: data.royalTransaction.merchantId,
              authorizationCode: data.royalTransaction.authorizationNum,
              transactionReferenceID:
                data.royalTransaction.transactionReferenceNum,
            }
          : {
              name: data.information.contract.merchant.name,
              acquireMerchantId: data.information.acquireMerchantId,
              ...data.payment,
            };
        return list;
      });
    },

    //데이터 재조회 후 바인딩 시 데이터 충돌 인한 에러 방지
    listDataClean() {
      let target = this;
      target.transactionList = []; //전체 리스트
      target.information = []; //계약정보
      target.merchant = []; //가맹점정보
      target.payment = [];
      target.state = [];
      target.authenticate = [];
      target.showTransactionList = [];
      target.showTransactionListData = [];
    },
    async moveChargebackEvent(item) {
      console.log("item is", item);
      const response = await moveChargeback(item);
      //TODO 차지백 성공한 다음에 공통 토스트 띄우기
      console.log(response);
    },
  },
  components: {
    TransactionSearchView,
    TransactionDetailView,
    TransactionTabs,
  },
};
</script>

<style scoped>
#detail {
  color: blue;
}
</style>
