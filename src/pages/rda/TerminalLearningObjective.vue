<template>
  <Card>
    <h1 slot="Title">Terminal Learning Objective</h1>
    <div slot="MainContent">
      <p><b>Action</b><br>
      Identify the Research, Development, and Acquisition (RDA) System.</p>

      <p><b>Condition</b><br>
      Given a summary sheet containing DoD 5000.1, AR 1-1, AR 11-18, AR 5-22 and DA PAM 70-3. </p>

      <p><b>Standard</b><br>
      With 80% accuracy, determine research and development objective; verify history and background; recognize key players and review board; determine the acquisition process; and define acquisition resource management.</p>
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
  name: 'TerminalLearningObjective',
  
  data() {
    return {
      Image: ''
    }
  }
  
}
</script>