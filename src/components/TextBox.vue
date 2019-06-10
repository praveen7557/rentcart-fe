<template>
  <div class="input-container">
    <input v-model="content" @input="handleInput" :placeholder="placeholder">
  </div>
</template>

<script>
export default {
  prop: {
    value: {
      type: String
    },
    placeholder: {
      type: String
    }
  },
  data() {
    return {
      content: this.value
    };
  },
  methods: {
    handleInput(e) {
      this.$emit("input", this.content);
    }
  }
};
</script>

<style lang="scss" scoped>
.input-container {
  height: 40px;
  border: 1px solid #310a5d;
  padding: 5px 5px;
  border-radius: 5px;
  input {
    width: 100%;
    height: 100%;
  }
}
</style>
