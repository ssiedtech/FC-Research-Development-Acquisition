<template>
  <Card>
    <h1 slot="Title">Army Acquisition Executive (AAE)</h1>
    <div slot="MainContent">
      <ul>
        <li>Assistant Secretary of the Army for Acquisition, Logistics, & Technology ASA (AL&T)</li>
        <li>Reviews and approves the Army position at each milestone before the DAB review</li>
        <li>Oversees implementation of the Foreign Military Sales program</li>
      </ul>
      <div class="FundConceptWrapper">
        <figure>
          <img :src="Image" alt="Graphic flow chart" />
        </figure>
      </div>
    </div>
    <div slot="Notes">
      <h1>ARMY ACQUISITION EXECUTIVE (AAE)</h1>
      <br />
      <p>AAE is also the ASA (ALT)</p>
      <br />
      <p>Works the Army’s acquisition programs</p>
      <br />
      <p>Serves as the Milestone Decision Authority (MDA) for Acquisition Categories (ACAT) IC and II</p>
      <p>(I = >$355M RDTE or > $2.1B APA (Army Procurement Appropriation)</p>
      <p>C = Component - meaning just the Army will get the equipment)</p>
      <p>II = $136M - $355M RDTE or $636M - $2.1B APA</p>
      <br />
      <p>Army Systems Acquisitions Review Council (ASARC)</p>
      <p>It is the same as the DAB but at Army level</p>
      <br />
      <p>Chaired by Army Acquisition Executive (AAE)</p>
      <br />
      <p>Assigns the Milestone Decision Authority (MDA) for Acquisition Categories (ACAT) III & IV</p>
      <br />
      <p>Army’s senior-level advisory body for ACAT IC and II programs and ACAT ID programs (DAB managed) prior to a DAB</p>
      <br />
      <p>Convenes at formal milestones to determine a system’s readiness to enter the next phase of the materiel acquisition cycle. Formal Milestones at A/B/C</p>
      <br />
      <p>ASARC Members</p>
      <p>Co-chaired by ASA (ALT) and Vice Chief of Staff of Army</p>
      <p>ASA FMC - Resourcing</p>
      <p>CDR, AMC - logistics</p>
      <p>CDR, TRADOC - Represents user, developer, trainer</p>
      <p>G3 - Planner</p>
      <p>G4 - Sustainer</p>
      <p>DUSA (OR) Operational Readiness</p>
      <p>Special - as needed - (ie - if Av system have an Av guy on board)</p>
      <br />
      <p>Representatives are from all stages of the life cycle system</p>
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
  max-width: calc(1479px / 2);
}

.FundConceptWrapper > figure > img {
  width: 80%;
  max-width: calc(1479px / 2);
  height: auto;
}
</style>
<script>
import Card from "../../components/Card.vue";

export default {
  components: {
    Card
  },
  name: "ArmyAcquisitionExecutiveAAE",

  data() {
    return {
      Image: require("@/assets/Army_Acquisition_Executive(AAE).png")
    };
  }
};
</script>