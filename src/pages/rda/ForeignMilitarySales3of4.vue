<template>
  <Card>
    <h1 slot="Title">Foreign Military Sales (3 of 4)</h1>
    <div slot="MainContent">
      <div class="FundConceptWrapper">
        <figure>
          <img :src="Image" alt="Graphic flow chart" />
        </figure>
      </div>
    </div>
    <div slot="Notes">
      <h1>Foreign Military Sales (3 OF 4)</h1>
      <br />
      <p>Goes to the USASEC (U.S. Army Security Assistant Command)</p>
      <br />
      <p>- They do background checks - verify policy</p>
      <br />
      <p>LOO—Letter of Offer. What the US will provide. May be different that original request. Security concerns, Political uncertainty, technological supremacy may play a factor in a different LOO than LOR.</p>
      <br />
      <p>If approved they will produce a LOA - Letter of Acceptance</p>
      <br />
      <p>Congress may also require notification of the pending sale</p>
    </div>
  </Card>
</template>
<style scoped>
.ollist > li {
  margin-bottom: 0;
}

.FundConceptWrapper {
  width: 100%;
  height: auto;
  display: flex;
  flex-direction: row;
  justify-content: center;
}

.FundConceptWrapper > figure {
  max-width: calc(725px / 2);
}

.FundConceptWrapper > figure > img {
  width: 80%;
  max-width: calc(725px / 2);
  height: auto;
}
</style>
<script>
import Card from "../../components/Card.vue";

export default {
  components: {
    Card
  },
  name: "ForeignMilitarySales3of4",

  data() {
    return {
      Image: require("@/assets/Foreign Military Sales (3 of 4).png")
    };
  }
};
</script>