<template>
  <div class="divSteps" :class="widthClass">
    <div
      class="step"
      v-for="(item,index) in parseInt(noOfSteps)"
      :key="index"
      :class="activeStep>=index+1?'activeStep':''"
    >
      <div class="noDiv">{{index+1}}</div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Steps",
  props: ["noOfSteps", "activeStep"],
  computed: {
    widthClass() {
      return (
        "Width" + parseInt(((this.activeStep - 1) / (this.noOfSteps - 1)) * 100)
      );
    }
  },
  data() {
    return {
      steps: 3
    };
  }
};
</script>

<style scoped>
.step {
  width: 30px;
  height: 30px;
  transform: rotate(45deg);
  display: inline-block;
  margin-left: 20%;
  background-color: #c4c4c4;
  z-index: 10;
  border-radius: 8px;
}

.step:first-child {
  margin-left: 0;
}
.divSteps {
  position: relative;
  display: inline;
}
.divSteps:after {
  content: " ";
  width: 100%;
  height: 2px;
  background-color: #c4c4c4;
  position: absolute;
  left: 0;
  top: -1px;
  z-index: -1;
}
.divSteps::before {
  content: " ";
  height: 2px;
  background: linear-gradient(264.32deg, #2af598 0%, #08aeea 100%);
  position: absolute;
  left: 0;
  top: -1px;
  z-index: 0;
}
.Width50::before {
  width: 50%;
}
.Width33::before {
  width: 33%;
}
.Width66::before {
  width: 66%;
}
.Width100::before {
  width: 100%;
}
.activeStep {
  background: linear-gradient(264.32deg, #2af598 0%, #08aeea 100%);
  border-radius: 8px;
  position: relative;
}
.activeStep:before {
  position: absolute;
  content: " ";
  width: 30px;
  height: 30px;
  -webkit-transform: rotate(45deg);
  transform: rotate(45deg);
  border: springgreen;
}
.noDiv {
  position: absolute;
  transform: rotate(-45deg);
  line-height: 42px;
  width: 42px;
  top: -6px;
  left: -6px;
  font-size: 20px;
  font-weight: 600;
  color: #828282;
  border-radius: 8px;
  text-align: center;
}

.activeStep .noDiv {
  color: white;
}
</style>
