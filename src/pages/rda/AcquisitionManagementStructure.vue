<template>
  <Card>
    <h1 slot="Title">Acquisition Management Structure</h1>
    <div slot="MainContent">
      <p>
        <b>Army Acquisition Executive (AAE)</b>
      </p>
      <ul>
        <li>Supervises process</li>
        <li>Establishes policy</li>
        <li>Appoints PEOs</li>
        <li>Approves baseline</li>
      </ul>
      <p>
        <b>Program Executive Offices (PEO)</b>
      </p>
      <ul>
        <li>Oversees program execution</li>
        <li>Reviews baseline</li>
      </ul>
      <p>
        <b>Program Managers (PMs)</b>
      </p>
      <ul>
        <li>Manages and executes program</li>
        <li>Develops baseline</li>
      </ul>
    </div>
    <div slot="Notes">
      <h1>ACQUISITION MANAGEMENT STRUCTURE</h1>
      <br />
      <p>This is the “Acquisition Chain of Command”</p>
      <br />
      <p>PM’s report to PEO’s report to AAE</p>
      <br />
      <p>PM’s take the ORD (Operational Requirements Document) and develops the program baseline (contains 3 things)</p>
      <p>
        1) Performance Requirements - Technical specs (ie 50Mph, 40 Tons, bullet
        size)
      </p>
      <p>2) Cost - How much will cost us</p>
      <p>3) Performance Cost Schedule - schedule of doing things</p>
      <br />
      <p>All interrelated - if want sooner will cost more to speed up processes</p>
      <br />
      <p>This is what gets reviewed at both formal and informal reviews</p>
      <br />
      <p>Baseline reviewed by PEO’s and approved by AAE</p>
    </div>
  </Card>
</template>
<style scoped>
ul {
  margin-bottom: 20px;
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
  name: "AcquisitionManagementStructure",

  data() {
    return {
      Image: ""
    };
  }
};
</script>