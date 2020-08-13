<template>
  <Card>
    <h1 slot="Title">Tracking RDTE</h1>
    <div slot="MainContent">
      <p>
        <b>How to track and control RDTE Funding</b>
      </p>
      <div class="FundConceptWrapper">
        <figure>
          <img :src="Image" alt="Graphic flow chart" />
        </figure>
      </div>
    </div>
    <div slot="Notes">
      <h1>Tracking RDTE</h1>
      <br />
      <p>Functional Area and/or Program Element are how we track, manage and control funding for RDTE $.</p>
      <br />
      <p>Provides a comprehensive approach to:</p>
      <p>Accounting—reporting to Congress</p>
      <p>Estimating—Justifying future requests</p>
      <p>Identifying, and Allocating Resources</p>
      <br />
      <p>Ties into FYDP and is the same as the Functional Area</p>
      <br />
      <p>Show students the J-Books and the Program Elements used to Justify RDT&E requests.</p>
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
  max-width: calc(1825px / 2);
}

.FundConceptWrapper > figure > img {
  width: 80%;
  max-width: calc(1825px / 2);
  height: auto;
}
</style>
<script>
import Card from "../../components/Card.vue";

export default {
  components: {
    Card
  },
  name: "Tracking RDTE",

  data() {
    return {
      Image: require("@/assets/Tracking_RDT&E.png")
    };
  }
};
</script>