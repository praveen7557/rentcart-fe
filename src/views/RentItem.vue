<template>
  <div class="rental-item">
    <div class="item-details">
      <div class="left">
        <div class="img-carousel">
          <slider animation="fade" :autoplay="false">
            <slider-item v-for="(i, index) in item.images" :key="index">
              <img class="img" :src="i">
            </slider-item>
          </slider>
        </div>
      </div>
      <div class="right">
        <div class="content-details">
          <h3 class="item-name">{{item.name}}</h3>
          <h4 class="item-price">$ {{item.price}}/ day</h4>
          <div class="book-item">
            <label class="date-label">When do you want it?</label>
            <div class="date-select-container">
              <div class="date-type" @click="dateClick('start')">
                <div>{{startText}}</div>
                <date-picker
                  format="YYYY-MM-DD"
                  ref="startDatepicker"
                  v-model="startDate"
                  lang="en"
                  :not-before="notBeforeStartDay"
                  @change="startDateChanged"
                ></date-picker>
              </div>
              <span class="date-separator"></span>
              <div class="date-type end" @click="dateClick('end')">
                <div>{{endText}}</div>
                <date-picker
                  format="YYYY-MM-DD"
                  ref="endDatepicker"
                  v-model="endDate"
                  lang="en"
                  :not-before="notBeforeEndDay"
                ></date-picker>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { getItem } from "@/queries/rent-item";
import { Slider, SliderItem } from "vue-easy-slider";
import DatePicker from "vue2-datepicker";

export default {
  name: "RentItem",
  components: {
    Slider,
    SliderItem,
    DatePicker
  },
  mounted() {},
  computed: {
    itemId() {
      let name = this.$route.params.name;
      let idx = name.lastIndexOf("--rent--");
      return name.substr(idx + 8);
    },
    startText() {
      return this.startDate ? this.formatDate(this.startDate) : "Start Date";
    },
    endText() {
      return this.endDate ? this.formatDate(this.endDate) : "End Date";
    },
    notBeforeStartDay() {
      return new Date();
    },
    notBeforeEndDay() {
      return this.startDate ? this.startDate : new Date();
    }
  },
  data() {
    return {
      item: {},
      startDate: null,
      endDate: null
    };
  },
  apollo: {
    item: {
      query: getItem,
      variables() {
        return { id: this.itemId };
      }
    }
  },
  methods: {
    dateClick(type) {
      this.$refs[`${type}Datepicker`].showPopup();
    },
    formatDate(date) {
      var d = new Date(date),
        month = "" + (d.getMonth() + 1),
        day = "" + d.getDate(),
        year = d.getFullYear();

      if (month.length < 2) month = "0" + month;
      if (day.length < 2) day = "0" + day;

      return [year, month, day].join("-");
    },
    startDateChanged() {
      this.endDate = null;
    }
  }
};
</script>

<style lang="scss">
.rental-item {
  color: black;
  width: 80%;
  margin: 0 auto;
  padding: 30px 0;

  .item-details {
    .left {
      display: inline-block;
      width: 46%;
      vertical-align: top;
      margin-right: 5%;

      .img-carousel {
        height: 300px;

        .slider {
          border-radius: 5px;
        }

        .slider-item {
          text-align: center;
        }

        .img {
          width: 100%;
          height: 100%;
          object-fit: cover;
        }
      }
    }
    .right {
      display: inline-block;
      width: 45%;

      .content-details {
        padding: 20px;
        .item-name {
          font-size: 30px;
          font-weight: 600;
        }
        .item-price {
          margin-top: 10px;
        }
        .book-item {
          margin-top: 20px;
          .date-label {
            color: #808080;
          }
          .date-select-container {
            border: 1px solid #ccc;
            padding: 5px;
            border-radius: 3px;
            width: 65%;
            .date-type {
              width: 40% !important;
              text-align: center;
              display: inline-block;
            }
            .date-separator {
              width: 20%;
              text-align: center;
              display: inline-block;
              background-image: url("../assets/right-arrow.svg");
              background-position: center;
              background-size: 18px;
              background-repeat: no-repeat;
              height: 21px;
              vertical-align: top;
            }
            .mx-input-wrapper {
              display: none;
            }
            .mx-datepicker {
              display: block;
            }
          }
        }
      }
    }
  }
}

@media (max-width: 576px) {
  .rental-item {
    .item-details {
      .left,
      .right {
        display: block;
        width: 100%;

        .content-details {
          margin-top: 30px;
          padding: 0;
          .book-item {
            .date-select-container {
              width: 100%;
            }
          }
        }

        .mx-datepicker-popup {
          width: initial;
        }

        .date-type.end {
          .mx-datepicker-popup {
            left: -100px !important;
          }
        }
      }
    }
  }
}
</style>
