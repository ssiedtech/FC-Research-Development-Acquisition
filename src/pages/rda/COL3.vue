<template>
  <Card>
    <div slot="Title">Check on Learning</div>
    <div slot="Qs"><p>
<br>Q. What does TRADOC system used to identify and prioritize Army requirements?
<br>
<br>Q. Name the DEFENSE ACQUISITION BOARD (DAB) Members?
<br>
<br>Q. There are ____ Program Executive Officer (PEO) in the Army.    </p>
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
  max-width: calc(1406px / 2);
}

.FundConceptWrapper > figure > img {
  width: 80%;
  max-width: calc(1406px / 2);
  height: auto;
}
</style>
<script>
import Card from "../../components/COL.vue";

export default {
  components: {
    Card
  },
  name: "FlowofFunds",

  data() {
    return {
      Image: require("@/assets/Flow of Funds_2.png")
    };
  }
};
</script>