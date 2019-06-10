<template>
  <div class="list-item-container">
    <Steps class="steps-list" :no-of-steps="4" :active-step="activeStep"/>
    <div class="steps-container">
      <StepOne @stepClick="stepClick" v-if="activeStep==1"/>
      <StepTwo @stepClick="stepClick" v-if="activeStep==2"/>
      <StepThree @stepClick="stepClick" v-if="activeStep==3"/>
      <StepFour @stepClick="stepClick" v-if="activeStep==4"/>
    </div>
  </div>
</template>

<script>
import Steps from "@/components/Steps.vue";
import StepOne from "@/components/ListItem/StepOne.vue";
import StepTwo from "@/components/ListItem/StepTwo.vue";
import StepThree from "@/components/ListItem/StepThree.vue";
import StepFour from "@/components/ListItem/StepFour.vue";
import { mapState } from "vuex";

export default {
  name: "ListItem",
  components: {
    Steps,
    StepOne,
    StepTwo,
    StepThree,
    StepFour
  },
  computed: {
    ...mapState("listing", ["stepData"])
  },
  data() {
    return {
      activeStep: 1
    };
  },
  methods: {
    stepClick(step) {
      this.activeStep = step;
    }
  }
};
</script>

<style lang="scss">
.list-item-container {
  padding: 30px 15%;
}
.steps-container {
  padding: 25px 0px;
}
</style>
