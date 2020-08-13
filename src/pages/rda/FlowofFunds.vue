<template>
  <Card>
    <h1 slot="Title">Flow of Funds</h1>
    <div slot="MainContent">
      <div class="FundConceptWrapper">
        <figure>
          <img :src="Image" alt="Graphic flow chart" />
        </figure>
      </div>
    </div>
    <div slot="Notes">
      <h1>FLOW OF FUNDS</h1>
      <br />
      <p>USD (Comptroller)</p>
      <br />
      <p>ASA (ALT) are parallel because they can say hold up with the funds - they say when to go into the next phase of development / funding</p>
      <br />
      <p>From ASA FM&C either flows down to the MSC’s through AMC or to the PM’s through the PEO’s</p>
      <br />
      <p>Major Subordinate Command (MSC) examples - CECOM , AMCOM</p>
      <p>(AMC - Army Material Command)</p>
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
  max-width: calc(1406px / 2);
}

.FundConceptWrapper > figure > img {
  width: 80%;
  max-width: calc(1406px / 2);
  height: auto;
}
</style>
<script>
import Card from "../../components/Card.vue";

export default {
  components: {
    Card
  },
  name: "FlowofFunds",

  data() {
    return {
      Image: require("@/assets/Flow of Funds_2.png")
    };
  }
};
</script>