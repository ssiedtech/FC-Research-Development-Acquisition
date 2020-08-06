<template>
  <Card>
    <h1 slot="Title">Tracking RDTE</h1>
    <div slot="MainContent">
      <p><b>How to track and control RDTE Funding </b></p>
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
  max-width: calc(1825px / 2);

}

.FundConceptWrapper > figure > img {
  width: 80%;
  max-width: calc(1825px / 2);
  height: auto;
}

</style>
<script>
import Card from '../../components/Card.vue';

export default {

  components: {
    Card
  },
  name: 'Tracking RDTE',
  
  data() {
    return {
      Image: require('@/assets/Tracking_RDT&E.png')
    }
  }
  
}
</script>