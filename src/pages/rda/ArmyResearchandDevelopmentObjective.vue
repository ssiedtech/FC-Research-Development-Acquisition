<template>
  <Card>
    <h1 slot="Title">Army Research and Development Objective</h1>
    <div slot="MainContent">
      <ul>
        <li>
          Develop superior weapons, equipment and technology to those of ANY potential enemy, in any environment, and under all conditions of war.
        </li>
        <li>
          Bottom Line: Equip the warfighter to win.
        </li>
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
  name: 'TestSlide',
  
  data() {
    return {
      Image: ''
    }
  }
  
}
</script>