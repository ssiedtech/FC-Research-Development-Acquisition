<template>
  <Card>
    <h1 slot="Title">Foreign Military Sales (2 of 4)</h1>
    <div slot="MainContent">
      <p><b>Letter of Request (LOR)</b></p>
      <ol class="ollist">
        <li>Country Requests made through the State Department.</li>
        <li>Congress Notified of Sale.</li>
        <li>Army Subject Matter Experts advise political arm on appropriate capability.</li>
      </ol>
    </div>
  </Card>
</template>
<style scoped>
.ollist > li {
  margin-bottom: 0;
}


</style>
<script>
import Card from '../../components/Card.vue';

export default {

  components: {
    Card
  },
  name: 'ForeignMilitarySales2of4',
  
  data() {
    return {
      Image: ''
    }
  }
  
}
</script>