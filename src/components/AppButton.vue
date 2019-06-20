<template>
  <button
    class="app-button"
    :class="loading?'loading':''"
    @click="$emit('click',$event)"
  >{{btnText}}</button>
</template>

<script>
export default {
  name: "AppButton",
  props: {
    text: String,
    loading: {
      type: Boolean,
      default: false
    }
  },
  computed: {
    btnText() {
      return this.loading ? "" : this.text;
    }
  }
};
</script>

<style lang="scss" scoped>
.app-button {
  width: 150px;
  background-color: $fourth;
  height: 100%;
  border-radius: 3px;
  outline: none;
  color: white;
  cursor: pointer;
  &.loading {
    background-image: url("../assets/loader.svg");
    height: 45px;
    background-position: center;
    background-repeat: no-repeat;
    background-size: 25px;
  }
}
</style>
