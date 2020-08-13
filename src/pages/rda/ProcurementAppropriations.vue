<template>
  <Card>
    <h1 slot="Title">Procurement Appropriations</h1>
    <div slot="MainContent">
      <ul>
        <li>Available for up to three years</li>
        <li>Annual or multi-year programs</li>
        <li>Direct or Customer Funded Programs</li>
      </ul>
      <p>
        <b>Army Procurement Appropriations</b>
      </p>
      <ul>
        <li>2031 - Aircraft, Army</li>
        <li>2032 - Missiles, Army</li>
        <li>2033 - Weapons & Tracked Combat Vehicles, Army</li>
        <li>2034 - Ammunition, Army</li>
        <li>2035 - Other Procurement, Army</li>
      </ul>
    </div>
    <div slot="Notes">
      <h1>PROCUREMENT APPROPRIATIONS</h1>
      <br />
      <p>ARMY PROCUREMENT APPROPRIATIONS 2031-2035</p>
      <br />
      <p>Could be up to 3 year appropriations</p>
      <br />
      <p>Congress can fund procurement programs in either an annual or a multiyear basis.</p>
      <p>If annual - you buy only a limited number for that year and no commitment is made for future year purchases.</p>
      <p>If multiyear - A commitment is made in the first year to buy and fund the weapon system over several years</p>
      <br />
      <p>2 approaches for funding Procurement Programs</p>
      <br />
      <p>Most common is Direct Funded Program—material needs of the Army</p>
      <p>- Given money from Congress to buy something specific</p>
      <br />
      <p>Other method is Customer Funded Program--Materiel requirements placed on the Army by authorized customers, external to the Army</p>
      <p>- We own the M16 but the FBI wants it also so the FBI pays us money / also used Foreign Military Sales</p>
      <p>- We pay the Air Force for them to provide us with a capability</p>
      <br />
      <p>1. Aircraft Appropriation - Includes the procurement of aircraft, aircraft modifications, spares, repair parts, and related support equipment and facilities</p>
      <br />
      <p>2. Missile Appropriation - Includes the procurement of missiles, missiles modifications, spares, repair parts, and related support equipment and facilities.</p>
      <br />
      <p>3. Weapons and Tracked Combat Vehicles (WTCV) Appropriation - Includes tracked and combat vehicles, weapons, other combat vehicles, and repair parts.</p>
      <br />
      <p>Ammunition Appropriation - Includes procurement of ammunition end items, ammunition production base support, and ammunition demilitarization.</p>
      <br />
      <p>4. Other Procurement, Army (OPA) Appropriation - Covers three major categories:</p>
      <p>(1) Tactical and support vehicles</p>
      <p>(2) Communications and electronic equipment</p>
      <p>(3) Other support equipment.</p>
      <p>Remember the cutoff is $250,000.</p>
      <br />
      <p>5. Other Procurement, Army (OPA) Appropriation. OPA covers four major categories:</p>
      <p>(1) Tactical and support vehicles.</p>
      <p>(2) Communications and electronic equipment.</p>
      <p>(3) Other support equipment.</p>
      <p>(4) Initial spares.</p>
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
import Card from "../../components/Card.vue";

export default {
  components: {
    Card
  },
  name: "ProcurementAppropriations",

  data() {
    return {
      Image: ""
    };
  }
};
</script>