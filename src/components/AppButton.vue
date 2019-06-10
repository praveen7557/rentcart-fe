<template>
  <button class="app-button" @click="$emit('click',$event)">{{text}}</button>
</template>

<script>
export default {
  name: "AppButton",
  props: {
    text: String
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
}
</style>
