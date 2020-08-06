<template>
  <Card>
    <h1 slot="Title">Key Army Stakeholders</h1>
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
  max-width: calc(1820px / 2);

}

.FundConceptWrapper > figure > img {
  width: 80%;
  max-width: calc(1820px / 2);
  height: auto;
}

</style>
<script>
import Card from '../../components/Card.vue';

export default {

  components: {
    Card
  },
  name: 'KeyArmyStakeholders',
  
  data() {
    return {
      Image: require('@/assets/Key_Army_Stakeholders.png')
    }
  }
  
}
</script>