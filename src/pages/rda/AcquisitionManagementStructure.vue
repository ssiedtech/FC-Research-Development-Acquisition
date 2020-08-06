<template>
  <Card>
    <h1 slot="Title">Acquisition Management Structure</h1>
    <div slot="MainContent">
      <p><b>Army Acquisition Executive (AAE)</b></p>
      <ul>
        <li>Supervises process</li>
        <li>  Establishes policy</li>
        <li>  Appoints PEOs</li>
        <li>  Approves baseline</li>
      </ul>
      <p><b>Program Executive Offices (PEO)</b></p>
      <ul>
        <li>Oversees program execution</li>
        <li>Reviews baseline</li>
      </ul>
      <p><b>Program Managers (PMs)</b></p>
      <ul>
        <li>Manages and executes program</li>
        <li>Develops baseline</li>
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
  name: 'AcquisitionManagementStructure',
  
  data() {
    return {
      Image: ''
    }
  }
  
}
</script>