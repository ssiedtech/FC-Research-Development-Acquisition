<template>
  <Card>
    <h1 slot="Title">RDA Appropriations</h1>
    <div slot="MainContent">
      <p>
        <b>Research, Development, Test, and Evaluation (RDT & E)</b>
      </p>
      <ul>
        <li>2040</li>
        <li>Available for 2 Years</li>
        <li>Tracked through a Program Element (PE)</li>
      </ul>
      <p>
        <b>Army Procurement Appropriation (APA)</b>
      </p>
      <ul>
        <li>2031 through 2035</li>
        <li>Available for up to 3 Years</li>
        <li>Tracked through a Budget Line-Item Number (BLIN)</li>
      </ul>
    </div>
    <div slot="Notes">
      <h1>RDA APPROPRIATIONS</h1>
      <br />
      <p>Start out spending RDTE money</p>
      <p>- 2 year money - includes CIV pay, TDY, Travel</p>
      <br />
      <p>Then switch to APA’s when we actually buy it</p>
      <p>- 3 year money</p>
      <p>- 5 APA’s (They are 2031-2035)</p>
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
  name: "RDAAppropriationsText",

  data() {
    return {
      Image: ""
    };
  }
};
</script>