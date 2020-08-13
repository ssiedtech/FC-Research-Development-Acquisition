<template>
  <Card>
    <h1 slot="Title">Defense Acquisition System</h1>
    <div slot="MainContent">
      <div class="FundConceptWrapper">
        <figure>
          <img :src="Image" alt="Graphic flow chart" />
        </figure>
      </div>
      <p>
        <b>5 Phases</b>
      </p>
      <ul>
        <li>3 Milestone Decisions – A, B, C</li>
        <li>Milestone Decision Reviews authorize movement to next phase</li>
        <li>The Type & Scope of Acquisition will determine the Authority for these reviews</li>
      </ul>
    </div>
    <div slot="Notes">
      <h1>Defense Acquisition System</h1>
      <br />
      <p>Milestone Decision Reviews (Pictured by A,B, & C) must be accomplished before moving to a new phase. We don’t want to rush to production on something before the technology is “mature”. Milestone Decision Authority (MDA) will authorize movement to the next phase based on technology maturity and risk.</p>
      <br />
      <p>Models vary slightly depending on the type of acquisition—Developing software is going to be much different than a new munition or a new vehicle.</p>
      <br />
      <p>(IOC – Initial Operating Capability)</p>
      <p>(FOC – Full Operating Capability)</p>
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
  max-width: calc(1813px / 2);
}

.FundConceptWrapper > figure > img {
  width: 80%;
  max-width: calc(1813px / 2);
  height: auto;
}
ul > li {
  margin-bottom: 0;
}
</style>
<script>
import Card from "../../components/Card.vue";

export default {
  components: {
    Card
  },
  name: "DefenseAcquisitionSystem",

  data() {
    return {
      Image: require("@/assets/Defense_Acquisition_System_1.png")
    };
  }
};
</script>