<template>
  <Card>
    <h1 slot="Title">The Acquisition Dilemma</h1>
    <div slot="MainContent">
      <div class="FundConceptWrapper">
        <figure>
          <img :src="Image" alt="Graphic flow chart" />
        </figure>
      </div>
    </div>
    <div slot="Notes">
      <h1>THE ACQUISITION DILEMMA</h1>
      <br />
      <p>Today’s readiness vs. Tomorrow’s modernization</p>
      <br />
      <p>- Spend money on legacy systems or future systems</p>
      <br />
      <p>The Army needs to decide whether we field the whole Army with certain equipment (M1A2 tank) or split up the units of who gets fielded and share money with investments.</p>
      <br />
      <p>PPBES helps answer resourcing issues by forcing us to program</p>
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
  max-width: calc(1046px / 2);
}

.FundConceptWrapper > figure > img {
  width: 80%;
  max-width: calc(1046px / 2);
  height: auto;
}
</style>
<script>
import Card from "../../components/Card.vue";

export default {
  components: {
    Card
  },
  name: "TheAcquisitionDilemma",

  data() {
    return {
      Image: require("@/assets/The_Acquisitions_Dilemma.png")
    };
  }
};
</script>