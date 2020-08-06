<template>
  <Card>
    <h1 slot="Title">RDA Appropriations</h1>
    <div slot="MainContent">
      <p><b>Research, Development, Test, and Evaluation (RDT & E)</b></p>
      <ul>
        <li>2040</li>
        <li>Available for 2 Years</li>
        <li>Tracked through a Program Element (PE)</li>
      </ul>
      <p><b>Army Procurement Appropriation (APA)</b></p>
      <ul>
        <li>2031 through 2035</li>
        <li>Available for up to 3 Years</li>
        <li>Tracked through a Budget Line-Item Number (BLIN)</li>
      </ul>
    </div>
  </Card>
</template>
<style scoped>
ul {
  margin-bottom: 20px;
}
ul > li {
  margin-bottom: 0;
}

</style>
<script>
import Card from '../../components/Card.vue';

export default {

  components: {
    Card
  },
  name: 'RDAAppropriationsText',
  
  data() {
    return {
      Image: ''
    }
  }
  
}
</script>