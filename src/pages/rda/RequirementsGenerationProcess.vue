<template>
  <Card>
    <h1 slot="Title">Requirements Generation Process</h1>
    <div slot="MainContent">
      <p>
        <b>
          DOtMLPF-P: TRADOC system used to identify and prioritize Army requirements. 
        </b>
      </p>
      <ul>
        <li><b>D</b>octrine</li>
        <li><b>O</b>rganizations</li>
        <li><b>T</b>raining</li>
        <li><b>M</b>aterial</li>
        <li><b>L</b>eader Development</li>
        <li><b>P</b>ersonnel</li>
        <li><b>F</b>acilities</li>
        <li><b>P</b>olicy</li>
      </ul>
    </div>
  </Card>
</template>
<style scoped>
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
  name: 'RequirementsGenerationProcess',
  
  data() {
    return {
      Image: ''
    }
  }
  
}
</script>