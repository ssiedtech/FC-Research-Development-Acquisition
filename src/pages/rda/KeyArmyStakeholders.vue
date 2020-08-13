<template>
  <Card>
    <h1 slot="Title">Key Army Stakeholders</h1>
    <div slot="MainContent">
      <div class="FundConceptWrapper">
        <figure>
          <img :src="Image" alt="Graphic flow chart" />
        </figure>
      </div>
    </div>
    <div slot="Notes">
      <h1>SSF - Key Army Stakeholders</h1>
      <br />
      <p>TRADOC</p>
      <p>Train today’s Army for war</p>
      <p>Represent the end user (the warfighter)</p>
      <p>Set the Army’s standards and requirements</p>
      <p>Develop doctrine (how the Army fights)</p>
      <p>Command assigned activities and installations</p>
      <br />
      <p>They work the requirements for what the warfighters need</p>
      <p>- Develop standards and requirements of how we fight</p>
      <br />
      <p>Army Futures Command</p>
      <br />
      <p>Futures Command generates requirements and supports the Program Managers, who fall under ASA (AL&T)</p>
      <br />
      <p>Each Futures Command subordinate organization currently exists as an organization within TRADOC, AMC, ASA (ALT)</p>
      <br />
      <p>Cross-Functional Teams link operational concepts to requirements and acquisition.</p>
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
  max-width: calc(1820px / 2);
}

.FundConceptWrapper > figure > img {
  width: 80%;
  max-width: calc(1820px / 2);
  height: auto;
}
</style>
<script>
import Card from "../../components/Card.vue";

export default {
  components: {
    Card
  },
  name: "KeyArmyStakeholders",

  data() {
    return {
      Image: require("@/assets/Key_Army_Stakeholders.png")
    };
  }
};
</script>