<template>
  <div class="card-slider">
    <h4 class="cards-type">{{type}}</h4>
    <div class="card-container">
      <!-- <div class="card-container-slider" :style="{width:`${sliderWidth}px`,left:0}"> -->
      <button class="left slide-button" v-if="leftShow" @click="scrollSlider('left')"></button>
      <ul class="card-container-slider" :ref="identifier" @scroll="scrollByMouse">
        <AppCard v-for="item in typeData" :card-data="item" :key="item.id"/>
      </ul>
      <button class="right slide-button" @click="scrollSlider('right')" v-if="rightShow"></button>
      <!-- </div> -->
    </div>
  </div>
</template>

<script>
import AppCard from "@/components/AppCard.vue";
export default {
  name: "CardSlider",
  components: {
    AppCard
  },
  props: {
    type: {
      type: String
    },
    typeData: {
      type: Array,
      default: []
    }
  },
  mounted() {
    this;
  },
  computed: {
    sliderWidth() {
      return this.typeData.length * 320;
    },
    selector() {
      return this.$refs[this.identifier];
    },
    leftShow() {
      if (this.activeLength || this.scrollAmount) {
        return true;
      }
      return false;
    },
    rightShow() {
      if (this.scrollAmount + this.selectorWidth != this.sliderWidth) {
        return true;
      }
    }
  },
  methods: {
    scrollSlider(direction) {
      this.$nextTick(() => {
        var container = this.selector;
        // container.scrollLeft = container.scrollLeft + 200;
        this.sideScrollCalculate(container, direction, 10, 320, 32);
      });
    },
    sideScrollCalculate(element, direction, speed, distance, step) {
      let scrollAmount = 0;
      this.selectorWidth = this.selector.offsetWidth;
      var slideTimer = setInterval(() => {
        if (direction == "left") {
          element.scrollLeft -= step;
        } else {
          element.scrollLeft += step;
        }
        scrollAmount += step;
        this.scrollAmount = element.scrollLeft;
        if (scrollAmount >= distance) {
          window.clearInterval(slideTimer);
        }
      }, speed);
    },
    scrollByMouse() {
      this.selectorWidth = this.selector.offsetWidth;
      this.scrollAmount = this.selector.scrollLeft;
    }
  },
  data() {
    return {
      identifier: `ul${+new Date()}`,
      activeLength: 0,
      scrollAmount: 0,
      selectorWidth: 0
    };
  }
};
</script>

<style lang="scss">
.card-slider {
  color: $textColor;
  width: 80%;
  margin: 0 auto;
  margin-top: 30px;
  .cards-type {
    margin-bottom: 20px;
  }
  .card-container {
    position: relative;
    height: 266px;
    overflow: hidden;
  }
  .card-container-slider {
    overflow: hidden;
    overflow-x: scroll;
    width: 100%;
    white-space: nowrap;
    transform: translateZ(0);
    padding: 0;
    scroll-padding: 50px;
    margin-bottom: -18px;
    transition: all 0.2s;
  }
  ul::-webkit-scrollbar {
    display: none;
  }
  .slide-button {
    padding: 0;
    background-color: rgba(0, 0, 0, 0.5);
    background-position: 50%;
    background-repeat: no-repeat;
    height: 100%;
    width: 50px;
    color: transparent;
    border: 0 none;
    position: absolute;
    z-index: 1;
    top: 0;
    outline: 0 none;
    opacity: 1;
    border-radius: 0;
    transition: opacity 0.25s ease, background-color 0.25s ease;

    &:hover {
      background-color: rgba(0, 0, 0, 0.75);
    }

    &.right {
      background-image: url("data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTgiIGhlaWdodD0iMzIiIHZpZXdCb3g9IjAgMCAxOCAzMiIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48cGF0aCBkPSJNMTQuNzYzIDE3LjIzN3YtMi40NzRsLTE0IDE0Yy0uNjg0LjY4My0uNjg0IDEuNzkgMCAyLjQ3NC42ODMuNjg0IDEuNzkuNjg0IDIuNDc0IDBsMTQtMTRjLjY4NC0uNjgzLjY4NC0xLjc5IDAtMi40NzRsLTE0LTE0QzIuNTU0LjA4IDEuNDQ3LjA4Ljc2My43NjNjLS42ODQuNjgzLS42ODQgMS43OSAwIDIuNDc0bDE0IDE0eiIgZmlsbC1ydWxlPSJub256ZXJvIiBmaWxsPSIjRUZGMUYxIi8+PC9zdmc+");
      right: 0;
    }

    &.left {
      background-image: url("data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTgiIGhlaWdodD0iMzIiIHZpZXdCb3g9IjAgMCAxOCAzMiIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48cGF0aCBkPSJNMy4yMzcgMTcuMjM3di0yLjQ3NGwxNCAxNGMuNjg0LjY4My42ODQgMS43OSAwIDIuNDc0LS42ODMuNjg0LTEuNzkuNjg0LTIuNDc0IDBsLTE0LTE0Yy0uNjg0LS42ODMtLjY4NC0xLjc5IDAtMi40NzRsMTQtMTRjLjY4My0uNjg0IDEuNzktLjY4NCAyLjQ3NCAwIC42ODQuNjgzLjY4NCAxLjc5IDAgMi40NzRsLTE0IDE0eiIgZmlsbC1ydWxlPSJub256ZXJvIiBmaWxsPSIjRUZGMUYxIi8+PC9zdmc+");
    }
  }
}
</style>
