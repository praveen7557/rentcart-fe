<template>
  <div class="details-container">
    <h3 class="stepHeading">Step 4</h3>
    <app-multi-select
      :placeholder="item.placeholder"
      :name="item.name"
      :options="item.options"
      @selected="multiSelected"
      :error="item.error"
      v-for="(item,idx) in cities"
      :index="idx"
      :key="item.id"
    />
    <div class="detail-item">
      <h4 class="detail-text">Address</h4>
      <b-form-group :state="!errors.has('address')" :invalid-feedback="errors.first('address')">
        <b-form-textarea
          id="textarea"
          v-model="address"
          placeholder="Add your address"
          rows="3"
          max-rows="4"
          v-validate="'required'"
          name="address"
        ></b-form-textarea>
      </b-form-group>
    </div>
    <div>
      <app-button text="Save" class="navButton" @click="save"/>
    </div>
  </div>
</template>

<script>
import AppMultiSelect from "../AppMultiSelect.vue";
import { UPDATE_LISTING_STEP } from "@/store/list-item/mutation-types";
import { getCities, getAreas, createItem } from "@/queries/list-item";
import { mapState } from "vuex";

export default {
  name: "StepFour",
  components: {
    AppMultiSelect
  },
  computed: {
    ...mapState("listing", ["stepData"])
  },
  mounted() {
    this.getCities();
  },
  data() {
    return {
      cities: [
        {
          name: "city",
          placeholder: "City",
          options: [],
          selected: null,
          error: ""
        }
      ],
      address: ""
    };
  },
  methods: {
    async multiSelected(obj) {
      this.cities[obj.idx].selected = obj.option;
      this.cities[obj.idx].error = "";
      if (obj.name == "city") {
        let areas = await this.$apollo.query({
          query: getAreas,
          variables: {
            id: obj.option.id
          }
        });
        areas = areas.data.areas;
        if (this.cities.length == 2) {
          this.cities.splice(1, 1);
        }
        if (areas.length !== 0) {
          let next = {
            name: "area",
            placeholder: "Area",
            selected: null,
            error: "",
            id: +new Date()
          };
          next.options = areas;
          this.cities.push(next);
        }
      } else {
      }
    },
    validateFields() {
      if (!this.cities[0].selected) {
        this.cities[0].error = "City is required";
        return false;
      }
      return true;
    },
    save() {
      this.$validator.validateAll().then(async res => {
        if (this.validateFields() && res) {
          this.$store.commit(`listing/${UPDATE_LISTING_STEP}`, {
            step: "StepFour",
            data: {
              cities: this.cities,
              address: this.address
            }
          });
          let data = this.stepData;
          let variables = {
            name: data.StepOne.itemName,
            images: data.StepOne.images,
            category:
              data.StepTwo.categories.length == 1 ||
              data.StepTwo.categories[1].selected == null
                ? data.StepTwo.categories[0].selected.id
                : data.StepTwo.categories[1].selected.id,
            description: data.StepTwo.description,
            price: parseInt(data.StepThree.price),
            caution: parseInt(data.StepThree.caution),
            city: data.StepFour.cities[0].selected.id,
            area: data.StepFour.cities[1].selected.id,
            address: data.StepFour.address
          };
          await this.$apollo.mutate({
            mutation: createItem,
            variables
          });
          this.$router.push("/");
        }
      });
    },
    getCities() {
      this.$apollo
        .query({
          query: getCities
        })
        .then(res => {
          this.cities[0].options = res.data.cities;
        });
    }
  }
};
</script>

<style>
</style>
