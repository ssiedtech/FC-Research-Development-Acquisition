<template>
  <Card>
    <h1 slot="Title">Requirements Generation Process</h1>
    <div slot="MainContent">
      <p>
        <b>DOtMLPF-P: TRADOC system used to identify and prioritize Army requirements.</b>
      </p>
      <ul>
        <li>
          <b>D</b>octrine
        </li>
        <li>
          <b>O</b>rganizations
        </li>
        <li>
          <b>T</b>raining
        </li>
        <li>
          <b>M</b>aterial
        </li>
        <li>
          <b>L</b>eader Development
        </li>
        <li>
          <b>P</b>ersonnel
        </li>
        <li>
          <b>F</b>acilities
        </li>
        <li>
          <b>P</b>olicy
        </li>
      </ul>
    </div>
    <div slot="Notes">
      <h1>REQUIREMENTS GENERATION PROCESS (RGP)</h1>
      <br />
      <p>The system we use to develop requirements is Requirements Generation Process (RGP)</p>
      <br />
      <p>Bullet 1 - (Spells out DOTMLPF)</p>
      <br />
      <p>Try to ID Army needs to see if they can be satisfied with a non-material solution</p>
      <p>- Only buy new equipment if the problem can’t be solved with D, O, T, L, P or F</p>
      <p>Ex: Doctrine (Napolenic tactics of Civil War - need ID’d by users - equipment not issue it was doctrine) - don’t focus money on wrong area</p>
      <br />
      <p>Training - EEO - sexual harassment - do we need to buy equipment - no just need new training.</p>
      <br />
      <p>Organizations - BDE CDR’s complained not enough Scout Platoons - so now each BDE at Ft. Lewis is given a Scout Company - Not equipment problem - organizational issue</p>
      <p>Don’t spend money if we don’t need to</p>
    </div>
  </Card>
</template>
<style scoped>
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
  name: "RequirementsGenerationProcess",

  data() {
    return {
      Image: ""
    };
  }
};
</script>