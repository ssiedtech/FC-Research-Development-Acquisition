<template>
  <Card>
    <h1 slot="Title">Program Executive Officer (PEO) Structure</h1>
    <div slot="MainContent">
      <div class="FundConceptWrapper">
        <figure>
          <img :src="Image" alt="Graphic flow chart" />
        </figure>
      </div>
    </div>
    <div slot="Notes">
      <h1>PEO STRUCTURE</h1>
      <br />
      <p>Only 12 PEO’s in the Army (Program Executive Officer)</p>
      <br />
      <p>They provide oversight / decision making by type of systems</p>
      <br />
      <p>AAESA (Army Acquisition Executive Support Agency) – Special Operating Agency - helps manage whole process</p>
      <p>- Funding flow through AAESA to PM’s and PEO’s</p>
      <br />
      <p>Take PEO Soldier for example: They manage the inventory of EVERYTHING a Soldier wears. They develop baseline specifications for everything from the approved APEL eyewear to the PT Uniforms. A Program Manager(PM) is assigned to each.</p>
      <br />
      <p>Every NSN item in the Army’s inventory is assigned to one of these PEO/PMs</p>
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
  max-width: calc(1426px / 2);
}

.FundConceptWrapper > figure > img {
  width: 80%;
  max-width: calc(1426px / 2);
  height: auto;
}
</style>
<script>
import Card from "../../components/Card.vue";

export default {
  components: {
    Card
  },
  name: "ProgramExecutiveOfficerPEOStructure",

  data() {
    return {
      Image: require("@/assets/Program Executive Officer (PEO) Structure.png")
    };
  }
};
</script>