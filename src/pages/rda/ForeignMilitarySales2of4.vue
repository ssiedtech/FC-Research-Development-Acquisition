<template>
  <Card>
    <h1 slot="Title">Foreign Military Sales (2 of 4)</h1>
    <div slot="MainContent">
      <p>
        <b>Letter of Request (LOR)</b>
      </p>
      <ol class="ollist">
        <li>Country Requests made through the State Department.</li>
        <li>Congress Notified of Sale.</li>
        <li>Army Subject Matter Experts advise political arm on appropriate capability.</li>
      </ol>
    </div>
    <div slot="Notes">
      <h1>Foreign Military Sales (2 of 4)</h1>
      <br />
      <p>The Process</p>
      <p>The buyer Country has to approach the U.S. and ask for the ability to buy equipment.</p>
      <br />
      <p>Done through a LOR - Letter of Request - “We want to buy…”</p>
      <br />
      <p>It is presented through the Embassy’s (State Department).</p>
      <br />
      <p>Congress typically has to ‘concur’ with major actions as well</p>
      <br />
      <p>United States Army Security Assistance Command (USASAC)--With support by AMC, other Dept. of Defense agencies (Defense Security Cooperation Agency) and in partnership with U.S. industry, USASAC provides materiel, training, education and other services to help our allies strengthen their defensive capabilities, deter aggression, achieve regional stability and promote democratic values.</p>
    </div>
  </Card>
</template>
<style scoped>
.ollist > li {
  margin-bottom: 0;
}
</style>
<script>
import Card from "../../components/Card.vue";

export default {
  components: {
    Card
  },
  name: "ForeignMilitarySales2of4",

  data() {
    return {
      Image: ""
    };
  }
};
</script>