<template>
  <Card>
    <h1 slot="Title">Requirements Determination</h1>
    <div slot="MainContent">
      <div class="FundConceptWrapper">
        <figure>
          <img :src="Image" alt="Graphic flow chart" />
        </figure>
      </div>
    </div>
    <div slot="Notes">
      <h1>Requirements Determination</h1>
      <br />
      <p>Just a different way to look at it</p>
      <ol>
        <li>Determine your needs and requirements from the 1st column</li>
        <li>Develop a Mission Needs Statement (MNS) - ID’s everything that we need this to do</li>
        <li>Goes through DOTMLPF (Doctrine, Organization, Training, Material, Leadership, Personnel & Facilities) and if it is a validated material need - take MNS and</li>

        <ol>
          <li>
            <p>Assign an acquisition category (MDAP ACAT - Major Defense Acquisition Program)</p>
            <p>- This identifies who makes decisions (ie DAB, ASARC, PEO)</p>
            <p>- MNS is used to develop the Operational Requirements Document (ORD)</p>
            <p>- This is what we need to develop - the “Tech spec’s”</p>
          </li>
          <li>
            <p>Update the RDA plan</p>
            <p>- Starts to get $ programmed in the form of MDEPs</p>
          </li>
        </ol>
        <li>Senior review is conducted on all equipment needs</li>
        <li>Funding decisions are made through POM and BES</li>
        <li>AMP (Army Modernization Plan) gets revised and start to spend $ on R, D & testing</li>
        <li>AMP feeds back into column one needs and requirements (1st one on top)</li>
      </ol>
    </div>
  </Card>
</template>
<style scoped>
p,
li {
  font-size: 1rem !important;
  font-weight: inherit !important;
}

.FundConceptWrapper {
  width: 100%;
  height: auto;
  display: flex;
  flex-direction: row;
  justify-content: center;
}

.FundConceptWrapper > figure {
  max-width: calc(1219px / 2);
}

.FundConceptWrapper > figure > img {
  width: 80%;
  max-width: calc(1219px / 2);
  height: auto;
}
</style>
<script>
import Card from "../../components/Card.vue";

export default {
  components: {
    Card
  },
  name: "RequirementsDetermination",

  data() {
    return {
      Image: require("@/assets/Requirements_Determination.png")
    };
  }
};
</script>