<template>
  <Card>
    <h1 slot="Title">Foreign Military Sales (1 of 4)</h1>
    <div slot="MainContent">
      <div class="FundConceptWrapper">
        <figure>
          <img :src="Image" alt="Graphic flow chart" />
        </figure>
      </div>
    </div>
    <div slot="Notes">
      <h1>FOREIGN MILITARY SALES (1 of 4)</h1>
      <br />
      <p>We spend all this money to make a product, why sell it to another country?</p>
      <br />
      <p>Security assistance, a national program administered by the State Department, is a major component of U.S. foreign policy. United States Army Security Assistance Command (USASAC), located at Redstone Arsenal, serves 140 allied countries and multinational organizations.</p>
      <br />
      <p>This is a $160 Billion dollar industry designed to implement national policy</p>
    </div>
  </Card>
</template>
<style scoped>
.FundConceptWrapper {
  width: 100%;
  height: auto;
  display: flex;
  flex-direction: row;
  justify-content: center;
}

.FundConceptWrapper > figure {
  max-width: calc(1731px / 2);
}

.FundConceptWrapper > figure > img {
  width: 80%;
  max-width: calc(1731px / 2);
  height: auto;
}
</style>
<script>
import Card from "../../components/Card.vue";

export default {
  components: {
    Card
  },
  name: "ForeignMilitarySales1of4",

  data() {
    return {
      Image: require("@/assets/Foreign_Military_Sales_(1 of 4).png")
    };
  }
};
</script>