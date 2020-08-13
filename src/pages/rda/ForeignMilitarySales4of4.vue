<template>
  <Card>
    <h1 slot="Title">Foreign Military Sales (4 of 4)</h1>
    <div slot="MainContent">
      <div class="FundConceptWrapper">
        <figure>
          <img :src="Image" alt="Graphic flow chart" />
        </figure>
      </div>
    </div>
    <div slot="Notes">
      <h1>Foreign Military Sales (4 OF 4)</h1>
      <br />
      <p>Once Approved, AMC will find the equipment. Pulling from inventory, producing new inventory, or utilizing commercial activities (contracts) are all available to AMC</p>
      <br />
      <p>DFAS – INDY establishes the Trust Fund in the Federal Reserve</p>
      <br />
      <p>This trust fund is what units will pull from to execute requirements. This is now “no-year” money and may be used to fund anything related to the Foreign Military Sale (Transport of Equipment, TDY for Soldiers to go train other country, Maintenance</p>
    </div>
  </Card>
</template>
<style scoped>
.ollist > li {
  margin-bottom: 0;
}

.FundConceptWrapper {
  width: 100%;
  height: auto;
  display: flex;
  flex-direction: row;
  justify-content: center;
}

.FundConceptWrapper > figure {
  max-width: calc(1467px / 2);
}

.FundConceptWrapper > figure > img {
  width: 80%;
  max-width: calc(1467px / 2);
  height: auto;
}
</style>
<script>
import Card from "../../components/Card.vue";

export default {
  components: {
    Card
  },
  name: "ForeignMilitarySales4of4",

  data() {
    return {
      Image: require("@/assets/Foreign_Military_Sales_(4 of 4.png")
    };
  }
};
</script>