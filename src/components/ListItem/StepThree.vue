<template>
  <div class="details-container">
    <h3 class="stepHeading">Step 3</h3>
    <div class="detail-item">
      <h4 class="detail-text">Rental Price</h4>
      <b-form-group
        id="fieldset-1"
        label-for="input-1"
        :state="!errors.has('price')"
        :invalid-feedback="errors.first('price')"
      >
        <b-form-input
          placeholder="Price you want to rent it for"
          id="input-1"
          type="number"
          name="price"
          v-validate="'required'"
          v-model="price"
          trim
        ></b-form-input>
      </b-form-group>
    </div>
    <div class="detail-item">
      <h4 class="detail-text">Security Price</h4>
      <b-form-group
        id="fieldset-1"
        label-for="input-1"
        :state="!errors.has('caution')"
        :invalid-feedback="errors.first('caution')"
      >
        <b-form-input
          placeholder="How much security money"
          id="input-1"
          type="number"
          name="caution"
          v-validate="'required'"
          v-model="caution"
          trim
        ></b-form-input>
      </b-form-group>
    </div>
    <div>
      <app-button text="Next" class="navButton" @click="next"/>
    </div>
  </div>
</template>

<script>
import { UPDATE_LISTING_STEP } from "@/store/list-item/mutation-types";

export default {
  name: "StepThree",
  data() {
    return {
      price: null,
      caution: null
    };
  },
  methods: {
    next() {
      this.$validator.validateAll().then(async res => {
        if (res) {
          this.$store.commit(`listing/${UPDATE_LISTING_STEP}`, {
            step: "StepThree",
            data: {
              price: this.price,
              caution: this.caution
            }
          });
          this.$emit("stepClick", 4);
        }
      });
    }
  }
};
</script>

<style>
</style>
