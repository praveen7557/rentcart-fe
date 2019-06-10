<template>
  <!-- <TextBox v-model="itemName" class="item-name"/> -->
  <div class="details-container">
    <h3 class="stepHeading">Step 1</h3>
    <div class="detail-item">
      <h4 class="detail-text">What's the item?</h4>
      <b-form-group
        id="fieldset-1"
        label-for="input-1"
        :state="!errors.has('name')"
        :invalid-feedback="errors.first('name')"
      >
        <b-form-input
          placeholder="Item Name"
          id="input-1"
          name="name"
          v-validate="'required'"
          v-model="itemName"
          trim
        ></b-form-input>
      </b-form-group>
    </div>
    <div class="detail-item">
      <h4 class="detail-text">Add Images</h4>
      <b-form-group
        id="fieldset-1"
        label-for="input-1"
        :state="!errors.has('images')"
        :invalid-feedback="errors.first('images')"
      >
        <b-form-file
          v-model="images"
          name="images"
          multiple
          v-validate="'required'"
          placeholder="Click/Drop to upload images"
          drop-placeholder="Drop file here..."
          @input="imagesChange"
        ></b-form-file>
      </b-form-group>
    </div>
    <div class="uploaded-images" v-if="previewImages">
      <img class="preview-image" :src="item" v-for="(item,idx) in previewImages" :key="idx">
    </div>
    <div>
      <AppButton text="Next" class="navButton" @click="next"/>
    </div>
  </div>
</template>

<script>
import { getImageUrl } from "@/shared/shared";
import AppButton from "@/components/AppButton.vue";
import { UPDATE_LISTING_STEP } from "@/store/list-item/mutation-types";

export default {
  name: "StepOne",
  components: {
    AppButton
  },
  computed: {},
  data() {
    return {
      itemName: "",
      images: [],
      previewImages: []
    };
  },
  methods: {
    async imagesChange(evt) {
      let imgs = await Promise.all(
        this.images.map(async e => {
          return await getImageUrl(e);
        })
      );
      this.previewImages = [...this.previewImages, ...imgs];
    },
    next() {
      this.$validator.validateAll().then(async res => {
        if (res) {
          this.$store.commit(`listing/${UPDATE_LISTING_STEP}`, {
            step: "StepOne",
            data: {
              itemName: this.itemName,
              images: this.previewImages
            }
          });
          this.$emit("stepClick", 2);
        }
      });
    }
  }
};
</script>

<style lang="scss">
.item-name {
  width: 300px;
}
.stepHeading {
  font-weight: 600;
  margin-bottom: 40px;
}
.details-container {
  width: 400px;
  color: $textColor;
  .detail-item {
    margin-bottom: 30px;
    .detail-text {
      margin-bottom: 20px;
    }
  }
}
.preview-image {
  height: 100px;
  width: 50%;
}
.custom-file {
  height: 100px;
  border: 1px solid #ced4da;
  border-radius: 5px;
  input {
    height: 100%;
  }
  label {
    border: none;
    height: 100%;
    text-align: center;
    line-height: 88px;
    &::after {
      height: 0;
      content: "" !important;
      background: none;
    }
  }
}
.navButton {
  height: 40px;
  font-size: 16px;
  line-height: 40px;
}
.uploaded-images {
  margin-bottom: 20px;
}
</style>
