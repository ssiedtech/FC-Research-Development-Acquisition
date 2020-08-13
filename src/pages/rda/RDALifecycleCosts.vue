<template>
  <Card>
    <h1 slot="Title">RDA Lifecycle Costs</h1>
    <div slot="MainContent">
      <div class="FundConceptWrapper">
        <figure>
          <img :src="Image" alt="Graphic flow chart" />
        </figure>
      </div>
    </div>
    <div slot="Notes">
      <h1>RDA Lifecycle Costs</h1>
      <br />
      <p>SSF falls under AWCF</p>
      <br />
      <p>The O&M Cost of a Major Weapon System is roughly 68-75% of a Program’s Life Cycle Cost.</p>
      <p>O&M consists of sustainment cost incurred form the initial system deployment through the end of system operations. This includes all costs of operating, maintaining, and supporting a fielded system.</p>
      <br />
      <p>O&S costs are funded from Military Personnel, Operations and Maintenance, Procurement, and occasionally RDT&E appropriations</p>
      <br />
      <p>With most of the costs for Army Acquisitions occurring during the O&M phase of their economic life, it’s imperative we get RDT&E and Procurement done RIGHT.</p>
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
  name: "RDALifecycleCosts",

  data() {
    return {
      Image: require("@/assets/RDA_Lifestyle_Costs.png")
    };
  }
};
</script>