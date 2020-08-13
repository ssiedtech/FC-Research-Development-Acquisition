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
          <p>
            <b>Sub-Divided into Program Activities:</b>
          </p>
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
            <img :src="Image" alt="Graphic flow chart" />
          </figure>
        </div>
      </div>
    </div>
    <div slot="Notes">
      <h1>RDT&E PROGRAM</h1>
      <br />
      <p>High V is money</p>
      <br />
      <p>All RDTE money begins with a 6 (goes back to FYDP Program 6 – RDTE)</p>
      <br />
      <p>- Sub-divided into 7 activities (so BA is the 2d number - different from OMA)</p>
      <br />
      <p>- Ever hear of 6,1 or 6,5 money?</p>
      <br />
      <p>- Each of these 7 programs is a stage on the lifecycle</p>
      <br />
      <p>DOD is looking at reducing to 2 or 3 BA’s total - less hassle</p>
      <br />
      <p>The current RDT&E budget activities are as follows:</p>
      <br />
      <p>a. Budget Activity 1 − Basic Research. Basic research includes all efforts and experimentation directed toward increasing fundamental knowledge and understanding in those fields of the physical, engineering, environmental, and life sciences related to long term national security needs.</p>
      <br />
      <p>b. Budget Activity 2 − Applied Research. This activity translates promising basic research into solutions for broadly defined military needs, short of development projects. This type of effort may vary from systematic mission-directed research, which is beyond that in Budget Activity 1, to sophisticated breadboard hardware, study, programming, and planning efforts that establish the initial feasibility and practicality of proposed solutions to technological challenges. These funds are normally applied during the MSA phase of the DAS life-cycle.</p>
      <br />
      <p>C. Budget Activity 3 − Advanced Technology Development. This activity includes all efforts that have moved into the development and integration of hardware for field experiments and tests. The results of this type of effort are proof of technological feasibility and assessment of operability and production rather than the development of hardware for Service use. These funds are normally applied during the TMRR phase of the DAS life-cycle.</p>
      <br />
      <p>d. Budget Activity 4 − Advanced Component Development and Prototypes. This budget activity includes all efforts necessary to evaluate integrated technologies in as realistic an operating environment as possible, to assess the performance or cost reduction potential of advanced technology. These funds are normally applied during TMRR, but could be applied throughout the acquisition life-cycle.</p>
      <br />
      <p>e. Budget Activity 5 − System Development and Demonstration. This budget activity includes those projects in system development and demonstration, but not yet approved for LRIP at MS C. These funds are normally applied during the EMD phase of the DAS life-cycle.</p>
      <br />
      <p>f. Budget Activity 6 − RDT&E Management Support. Includes efforts directed toward support of RDT&E installations or operations required for use in general R&D and not allocable to specific R&D missions. Included are technical integration efforts, technical information activities, space programs, major test ranges, test facilities and general test instrumentation, target development, support of operational tests, international cooperative R&D, and R&D support.</p>
      <br />
      <p>g. Budget Activity 7 − Operational System Development. This activity includes R&D efforts directed toward development, engineering, and test of changes to fielded systems or systems already in procurement which alter the performance envelopes. Operational system development may include OT costs.</p>
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
import Card from "../../components/Card.vue";

export default {
  components: {
    Card
  },
  name: "RDTEAppropriations",

  data() {
    return {
      Image: require("@/assets/RDT&E_Appropriations.png")
    };
  }
};
</script>