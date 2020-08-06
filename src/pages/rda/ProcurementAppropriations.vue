<template>
  <Card>
    <h1 slot="Title">Procurement Appropriations</h1>
    <div slot="MainContent">
      <ul>
        <li>Available for up to three years</li>
        <li>Annual or multi-year programs</li>
        <li>Direct or Customer Funded Programs</li>
      </ul>
      <p><b>Army Procurement Appropriations</b></p>
      <ul>
        <li>2031 - Aircraft, Army</li>
        <li>2032 - Missiles, Army</li>
        <li>2033 - Weapons & Tracked Combat Vehicles, Army</li>
        <li>2034 - Ammunition, Army</li>
        <li>2035 - Other Procurement, Army</li>
      </ul>
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

</style>
<script>
import Card from '../../components/Card.vue';

export default {

  components: {
    Card
  },
  name: 'ProcurementAppropriations',
  
  data() {
    return {
      Image: ''
    }
  }
  
}
</script>