<template>
  <Card>
    <h1 slot="Title">Defense Acquisition Board (DAB)</h1>
    <div slot="MainContent">
      <ul>
        <li>Senior DoD forum on all acquisition matters</li>
        <li>Chaired by the Defense Acquisition Executive (DAE) – USD (AT&L)</li>
        <li>Reviews Major Defense Acquisition Programs (MDAPs)</li>
      </ul>
    </div>
  </Card>
</template>
<style scoped>


</style>
<script>
import Card from '../../components/Card.vue';

export default {

  components: {
    Card
  },
  name: 'DefenseAcquisitionBoardDAB',
  
  data() {
    return {
      Image: ''
    }
  }
  
}
</script>