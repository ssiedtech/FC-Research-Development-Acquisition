<template>
  <Card>
    <h1 slot="Title">Tracking Procurement</h1>
    <div slot="MainContent">
      <p>
        <b>Budget Line Item Number (BLIN)</b>
      </p>
      <ul>
        <li>How we track and control Procurement Appropriations</li>
        <li>Tied to a specific procurement program / item</li>
      </ul>
      <div class="FundConceptWrapper">
        <figure>
          <img :src="Image" alt="Graphic flow chart" />
        </figure>
      </div>
    </div>
    <div slot="Notes">
      <h1>Tracking Procurement</h1>
      <br />
      <p>Budget-Line-Item-Number is a number assigned by the Program Manager and it is the number that is used to track and control Procurement Appropriations.</p>
      <br />
      <p>Where would you go to find this number?</p>
    </div>
  </Card>
</template>
<style scoped>
ul {
  margin-bottom: 20px;
}
li {
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
  max-width: calc(1850px / 2);
}

.FundConceptWrapper > figure > img {
  width: 80%;
  max-width: calc(1850px / 2);
  height: auto;
}
</style>
<script>
import Card from "../../components/Card.vue";

export default {
  components: {
    Card
  },
  name: "TrackingProcurement",

  data() {
    return {
      Image: require("@/assets/Tracking_Procurement.png")
    };
  }
};
</script>