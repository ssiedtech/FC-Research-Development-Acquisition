<template>
  <Card>
    <h1 slot="Title">Describe The Process or Identifying Army RDA Needs</h1>
    <div slot="MainContent">
      <ul>
        <li>How does the Army determine when to develop new weapon systems?</li>
      </ul>
    </div>
    <div slot="Notes">
      <h1>DESCRIBE THE PROCESS FOR IDENTIFYING ARMY RDA NEEDS</h1>
      <br />
      <p>How does it all start? How do we know what systems we need?</p>
      <br />
      <p>The Army has a process!</p>
      <br />
      <p>Who are the representatives of users needs? TRADOC</p>
      <br />
      <p>Part of TRADOC is combat developers - each branch has their own - decides what the branch needs</p>
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
  name: "DescribeTheProcessorIdentifyingArmyRDANeeds",

  data() {
    return {
      Image: ""
    };
  }
};
</script>