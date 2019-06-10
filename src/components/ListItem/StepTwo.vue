<template>
  <div class="details-container">
    <h3 class="stepHeading">Step 2</h3>
    <app-multi-select
      :placeholder="item.placeholder"
      :name="item.name"
      :options="item.options"
      @selected="multiSelected"
      :error="item.error"
      v-for="(item,idx) in categoriesData"
      :index="idx"
      :key="item.id"
    />
    <div class="detail-item">
      <h4 class="detail-text">Describe your item</h4>
      <b-form-group
        :state="!errors.has('description')"
        :invalid-feedback="errors.first('description')"
      >
        <b-form-textarea
          id="textarea"
          v-model="description"
          placeholder="Add a detailed description"
          rows="3"
          max-rows="4"
          v-validate="'required'"
          name="description"
        ></b-form-textarea>
      </b-form-group>
    </div>
    <div>
      <AppButton text="Next" class="navButton" @click="next"/>
    </div>
  </div>
</template>

<script>
import AppMultiSelect from "../AppMultiSelect.vue";
import AppButton from "@/components/AppButton.vue";
import { UPDATE_LISTING_STEP } from "@/store/list-item/mutation-types";
import { getCategories, getSubCategories } from "@/queries/list-item";

export default {
  name: "StepTwo",
  components: {
    AppMultiSelect,
    AppButton
  },
  mounted() {
    this.getCategories();
  },
  data() {
    return {
      categoriesOptions: [],
      categoriesData: [
        {
          name: "category",
          placeholder: "Category",
          options: [],
          selected: null,
          error: "",
          id: +new Date()
        }
      ],
      description: ""
    };
  },
  methods: {
    async multiSelected(obj) {
      this.categoriesData[obj.idx].selected = obj.option;
      this.categoriesData[obj.idx].error = "";
      if (obj.name == "category") {
        let subCats = await this.$apollo.query({
          query: getSubCategories,
          variables: {
            id: obj.option.id
          }
        });
        subCats = subCats.data.subCategories;
        if (this.categoriesData.length == 2) {
          this.categoriesData.splice(1, 1);
        }
        if (subCats.length !== 0) {
          let next = {
            name: "subCategory",
            placeholder: "Sub Category",
            selected: null,
            error: "",
            id: +new Date()
          };
          next.options = subCats;
          this.categoriesData.push(next);
        }
      } else {
      }
    },
    validateFields() {
      if (!this.categoriesData[0].selected) {
        this.categoriesData[0].error = "Category is required";
        return false;
      }
      return true;
    },
    next() {
      this.$validator.validateAll().then(async res => {
        if (this.validateFields() && res) {
          this.$store.commit(`listing/${UPDATE_LISTING_STEP}`, {
            step: "StepTwo",
            data: {
              categories: this.categoriesData,
              description: this.description
            }
          });
          this.$emit("stepClick", 3);
        }
      });
    },
    getCategories() {
      this.$apollo
        .query({
          query: getCategories
        })
        .then(res => {
          this.categoriesData[0].options = res.data.categories;
        });
    }
  }
};
</script>

<style lang="scss">
</style>
