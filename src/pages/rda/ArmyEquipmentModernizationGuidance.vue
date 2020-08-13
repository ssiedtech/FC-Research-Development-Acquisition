<template>
  <Card>
    <h1 slot="Title">Army Equipment Modernization Guidance</h1>
    <div slot="MainContent">
      <div class="FundConceptWrapper">
        <figure>
          <img :src="Image" alt="Graphic flow chart" />
        </figure>
      </div>
    </div>
    <div slot="Notes">
      <h1>Army Equipment Modernization Guidance</h1>
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
  max-width: calc(1757px / 2);
}

.FundConceptWrapper > figure > img {
  width: 80%;
  max-width: calc(1757px / 2);
  height: auto;
}
</style>
<script>
import Card from "../../components/Card.vue";

export default {
  components: {
    Card
  },
  name: "ArmyEquipmentModernizationGuidance",

  data() {
    return {
      Image: require("@/assets/Army_Equipment_Modernization_Guidance.png")
    };
  }
};
</script>