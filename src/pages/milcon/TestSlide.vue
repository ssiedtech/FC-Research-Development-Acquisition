<template>
  <Card>
    <h1 slot="Title">Test Slide</h1>
    <div slot="MainContent">
      <p>
        Test Content
      </p>
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