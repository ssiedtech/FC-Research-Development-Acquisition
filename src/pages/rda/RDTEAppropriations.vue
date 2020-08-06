<template>
  <Card>
    <h1 slot="Title">RDT&E Appropriations</h1>
    <div slot="MainContent">
      <div class="ContentWrapper">
        <div class="TextWrapper">
          <ul>
            <li>Research, Development, Test & Evaluation (2040)</li>
            <li>Available for two years</li>
            <li>FYDP Program 6 (RDT&E)</li>
          </ul>
          <p><b>Sub-Divided into Program Activities:</b></p>
          <ul>
            <li>Budget Activity 1 - Basic Research</li>
            <li>Budget Activity 2 - Exploratory Development</li>
            <li>Budget Activity 3 - Advance Development</li>
            <li>Budget Activity 4 - Demonstration and Validation</li>
            <li>Budget Activity 5 - Engineering & Manufacturing Development</li>
            <li>Budget Activity 6 - RDTE Management and Support</li>
            <li>Budget Activity 7 - Operational System Development</li>
          </ul>
        </div>
        <div class="FundConceptWrapper">
          <figure>
            <img :src="Image" alt="Graphic flow chart">
          </figure>
        </div>
      </div>

    </div>
  </Card>
</template>
<style scoped>
.ContentWrapper {
  display: flex;
  flex-direction: row;
  justify-content: center;

}
.TextWrapper {
  width: 50%;
}
ul {
  margin-bottom: 20px;
}
li {
  margin-bottom: 0;
}
.FundConceptWrapper {
  width: 50%;
  height: auto;
  display: flex;
  flex-direction: row;
  justify-content: center;
}

.FundConceptWrapper > figure {
  max-width: calc(1766px / 2);

}

.FundConceptWrapper > figure > img {
  width: 80%;
  max-width: calc(1766px / 2);
  height: auto;
}
@media screen and (max-width: 1600px) {
  .ContentWrapper {
    flex-direction: column;
  }
  .TextWrapper {
    width: 100%;
  }
  .FundConceptWrapper {
    width: 100%;
  }
}
</style>
<script>
import Card from '../../components/Card.vue';

export default {

  components: {
    Card
  },
  name: 'RDTEAppropriations',
  
  data() {
    return {
      Image: require('@/assets/RDT&E_Appropriations.png')
    }
  }
  
}
</script>