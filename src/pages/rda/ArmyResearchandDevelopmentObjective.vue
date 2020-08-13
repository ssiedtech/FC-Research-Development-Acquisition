<template>
  <Card>
    <h1 slot="Title">Army Research and Development Objective</h1>
    <div slot="MainContent">
      <ul>
        <li>Develop superior weapons, equipment and technology to those of ANY potential enemy, in any environment, and under all conditions of war.</li>
        <li>Bottom Line: Equip the warfighter to win.</li>
      </ul>
    </div>
    <div slot="Notes">
      <h1>ARMY RESEARCH AND DEVELOPMENT OBJECTIVE</h1>
      <br />
      <p>This is the goal of the whole RDA process:</p>
      <p>Development and acquisition of systems and equipment that are affordable and also supports the enforcement of the National Policy.</p>
      <p>Acquisition-includes planning, design, development, testing, contracting and production of systems and materials used in or in support of military operations.</p>
      <br />
      <p>WEAPON SYSTEM- equipment that moves, shoots, communicates on the battlefield.</p>
      <p>INFORMATION SYSTEM-combination of hardware/software that allow organizations or individuals to process, manage and store information in different configurations to support operations. (ex: STANFINS (Standard Financial System), GFEBS (General Fund Enterprise system)</p>
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
  name: "TestSlide",

  data() {
    return {
      Image: ""
    };
  }
};
</script>