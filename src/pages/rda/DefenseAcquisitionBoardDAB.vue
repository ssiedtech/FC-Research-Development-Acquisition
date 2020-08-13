<template>
  <Card>
    <h1 slot="Title">Defense Acquisition Board (DAB)</h1>
    <div slot="MainContent">
      <ul>
        <li>Senior DoD forum on all acquisition matters</li>
        <li>Chaired by the Defense Acquisition Executive (DAE) – USD (AT&L)</li>
        <li>Reviews Major Defense Acquisition Programs (MDAPs)</li>
      </ul>
    </div>
    <div slot="Notes">
      <h1>Defense Acquisition Board (Dab)</h1>
      <br />
      <p>DAB is:</p>
      <p>Sr. DoD forum for acquisition matter.</p>
      <br />
      <p>Board meets to decide if the program will go forward or get cut at each A/B/C</p>
      <br />
      <p>Holds MDA for systems designated ACAT ID – its formal decision making authority</p>
      <br />
      <p>(ID: I = Expensive (>355M RDTE), D = DOD Level equipment)</p>
      <br />
      <p>DAB Members</p>
      <p>Undersecretary of Defense for Acquisition Technology and Logistics (Chair)</p>
      <p>Vice Chairman, Joint Chief of Staff (JCS) (Vice Chair)</p>
      <p>Assistant Secretary of Defense (Strategy and Requirements)</p>
      <p>Director of Operational Test and Evaluation</p>
      <p>Director Program Analysis and Evaluation (DPAE)</p>
      <p>Undersecretary of Defense, Comptroller</p>
      <p>Service Acquisition Executives (Army, Navy, Air Force)</p>
      <p>PEOs & PMs as needed</p>
      <br />
      <p>DAE:</p>
      <p>Is the senior procurement executive and the principal staff assistant and advisor to the SECDEF</p>
      <br />
      <p>Is also the USD (AT&L)</p>
      <br />
      <p>Chairs the Defense Acquisition Board</p>
      <br />
      <p>Can direct USD-Comptroller to withhold funds for a program.</p>
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
  name: "DefenseAcquisitionBoardDAB",

  data() {
    return {
      Image: ""
    };
  }
};
</script>