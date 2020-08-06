<template>
  <Card>
    <h1 slot="Title">Foreign Military Sales (3 of 4)</h1>
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
import Card from '../../components/Card.vue';

export default {

  components: {
    Card
  },
  name: 'ForeignMilitarySales3of4',
  
  data() {
    return {
      Image: require('@/assets/Foreign Military Sales (3 of 4).png')
    }
  }
  
}
</script>