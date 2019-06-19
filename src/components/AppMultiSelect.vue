<template>
  <div class="detail-item">
    <h4 class="detail-text">{{placeholder}}</h4>
    <multi-select
      :options="options"
      placeholder="Category"
      label="name"
      track-by="name"
      class="multi-select"
      :allow-empty="false"
      @select="onSelect"
      v-model="value"
      ref="multiSelect"
    >
      <span slot="noResult">Sorry, No results found</span>
      <span slot="noOptions">Please enter the name</span>
    </multi-select>
    <label class="invalid-feedback DB">{{error}}</label>
  </div>
</template>

<script>
import MultiSelect from "vue-multiselect";
export default {
  name: "AppMultiSelect",
  components: {
    MultiSelect
  },
  props: {
    options: {
      type: Array
    },
    placeholder: {
      type: String
    },
    name: {
      type: String
    },
    error: {
      type: String
    },
    index: {
      type: Number,
      default: 1
    }
  },
  data() {
    return {
      value: ""
    };
  },
  methods: {
    onSelect(values) {
      this.$emit("selected", {
        name: this.name,
        option: values,
        idx: this.index
      });
    }
  }
};
</script>

<style lang="scss">
.multi-select .multiselect__single {
  height: 36px;
  line-height: 36px;
}
.details-container {
  .multiselect {
    border: 1px solid #ced4da;
    border-radius: 5px;
  }
  .multiselect__tags {
    padding: 0 10px;
    height: 36px;

    input {
      height: 100%;
    }
    .multiselect__placeholder {
      height: 100%;
      line-height: 36px;
    }
  }
  .multi-select .multiselect__content-wrapper {
    margin-top: 1px;
  }
}
</style>
