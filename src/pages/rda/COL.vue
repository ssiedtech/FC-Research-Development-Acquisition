<template>
  <Card>
    <h1 slot="Title">Check on Learning</h1>
    <div slot="Qs">
      <p>Q: Who develops future force requirements?</p>
      <p>True / False.&nbsp; PEOs approve the baseline</p>
      <p>Q: Who develops the baseline?</p>
      <p>Q: Which acquisition category / categories require the AAE ASA (ALT) as the Milestone Decision Authority (MDA)?</p>
      <p>Which review board is used for acquisition category ACAT ID?</p>
      <p>Q:How do we manage and track RDT&amp;E Funding?</p>
      <p>How does a country request to buy US Equipment</p>
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
import Card from "../../components/COL.vue";

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