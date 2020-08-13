<template>
  <Card>
    <h1 slot="Title">Foreign Military Sales Process</h1>
    <div slot="MainContent">
      <div class="FundConceptWrapper">
        <figure>
          <img :src="Image" alt="Graphic flow chart" />
        </figure>
      </div>
    </div>
    <div slot="Notes">
      <h1>Foreign Military Sales Process</h1>
      <br />
      <p>HTAR CHP 11</p>
      <br />
      <p>U.S. Army Security Assistance Command (USASAC).</p>
      <br />
      <p>USASAC is responsible for managing security assistance programs and Foreign Military Sales (FMS) for the Army.</p>
      <br />
      <p>Security assistance is a national program supervised and directed by the State Department. In conjunction with the White House, Congress, and the Treasury Department, military security assistance programs are executed by the DOD. The FMS program is the U.S. government's program for transferring defense articles, services and training to other sovereign nations and international organizations. Under FMS, the U.S. government procures defense articles on behalf of the foreign customer.</p>
      <br />
      <p>The President designates countries and international organizations eligible to participate in FMS. The Department of State makes those recommendations and approves individual programs on a case-by-case basis.</p>
      <br />
      <p>Countries approved to participate in this program may obtain defense articles and services by paying with their own national funds or with funds provided through U.S. government-sponsored assistance programs.</p>
      <br />
      <p>In carrying out the Army security assistance mission, USASAC calls on all AMC Life Cycle Management Commands (LCMC), as well as other DOD agencies and U.S. industry. Each sale of equipment to overseas customers comprises the same “total package” of quality materiel, facilities, spare parts, training, publications, technical documentation, maintenance support, and other services that AMC provides to U.S. Army units.</p>
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
  max-width: calc(1753px / 2);
}

.FundConceptWrapper > figure > img {
  width: 80%;
  max-width: calc(1753px / 2);
  height: auto;
}
</style>
<script>
import Card from "../../components/Card.vue";

export default {
  components: {
    Card
  },
  name: "ForeignMilitarySalesProcess",

  data() {
    return {
      Image: require("@/assets/Foreign_Military_Process.png")
    };
  }
};
</script>