<template>
  <Card>
    <h1 slot="Title">Program Executive Officer (PEO) Structure</h1>
    <div slot="MainContent">
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
  max-width: calc(1426px / 2);

}

.FundConceptWrapper > figure > img {
  width: 80%;
  max-width: calc(1426px / 2);
  height: auto;
}

</style>
<script>
import Card from '../../components/Card.vue';

export default {

  components: {
    Card
  },
  name: 'ProgramExecutiveOfficerPEOStructure',
  
  data() {
    return {
      Image: require('@/assets/Program Executive Officer (PEO) Structure.png')
    }
  }
  
}
</script>