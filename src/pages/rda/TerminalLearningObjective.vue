<template>
  <Card>
    <h1 slot="Title">Terminal Learning Objective</h1>
    <div slot="MainContent">
      <p>
        <b>Action</b>
        <br />Identify the Research, Development, and Acquisition (RDA) System.
      </p>

      <p>
        <b>Condition</b>
        <br />FC Leaders in a classroom environment working individually and as a member of a small group, using AR 1-1, AR 5-22, DA Pam 70-3, Army Management Structured Guide, self-study exercises, personal experiences, practical exercises, handouts, and discussion.
      </p>

      <p>
        <b>Standard</b>
        <br />- Define Army research and development objectives without error
<br>- Identify the Requirements Generation Process (RGP) without error
<br>- Identify RDA appropriations without error
<br>- Identify foreign military sales without error
      </p>
    </div>
    <div slot="Notes">
      <h1>TERMINAL LEARNING OBJECTIVE</h1>
      <br />
      <p>Note: State the TLO</p>
      <br />
      <p>Safety Requirements: Everyone is responsible for safety. A thorough risk assessment must be completed prior to every mission or operation.</p>
      <br />
      <p>Risk Assessment Level: Low</p>
      <p>Environmental Considerations: NOTE: It is the responsibility of all Soldiers and DA civilians to protect the environment from damage.</p>
      <p>Environmental protection is not just the law but the right thing to do. It is a continual process and starts with deliberate planning. Always be alert to ways to protect our environment during training and missions. In doing so you will contribute to the sustainment of our training resources while protecting people and the environment from harmful effects.</p>
      <br />
      <p>Evaluation: Students will take a comprehensive test at the end of Week 1. Students must score 80% or higher and International officers must score 70% or higher.</p>
    </div>
  </Card>
</template>
<style scoped>
</style>
<script>
import Card from "../../components/Card.vue";

export default {
  components: {
    Card
  },
  name: "TerminalLearningObjective",

  data() {
    return {
      Image: ""
    };
  }
};
</script>