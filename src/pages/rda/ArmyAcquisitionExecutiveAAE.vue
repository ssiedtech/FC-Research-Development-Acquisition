<template>
  <Card>
    <h1 slot="Title">Army Acquisition Executive (AAE)</h1>
    <div slot="MainContent">
      <ul>
        <li>Assistant Secretary of the Army for Acquisition, Logistics, & Technology ASA (AL&T)</li>
        <li>Reviews and approves the Army position at each milestone before the DAB review</li>
        <li>Oversees implementation of the Foreign Military Sales program</li>
      </ul>
      <div class="FundConceptWrapper">
        <figure>
          <img :src="Image" alt="Graphic flow chart">
        </figure>
      </div>
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
  max-width: calc(1479px / 2);

}

.FundConceptWrapper > figure > img {
  width: 80%;
  max-width: calc(1479px / 2);
  height: auto;
}

</style>
<script>
import Card from '../../components/Card.vue';

export default {

  components: {
    Card
  },
  name: 'ArmyAcquisitionExecutiveAAE',
  
  data() {
    return {
      Image: require('@/assets/Army_Acquisition_Executive(AAE).png')
    }
  }
  
}
</script>