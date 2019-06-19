<template>
  <div class="list-item-container">
    <Steps class="steps-list" :no-of-steps="4" :active-step="activeStep"/>
    <div class="steps-container">
      <component :is="currentComponent" @stepClick="stepClick"/>
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
    currentComponent() {
      switch (this.activeStep) {
        case 1:
          return StepOne;
          break;
        case 2:
          return StepTwo;
          break;
        case 3:
          return StepThree;
          break;
        case 4:
          return StepFour;
          break;
      }
    },
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
  padding: 50px 15%;
}
.steps-container {
  padding: 25px 0px;
}
</style>
