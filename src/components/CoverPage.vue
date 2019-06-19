<template>
  <div class="cover-page">
    <Header :isHome="true"/>
    <div class="cover-content">
      <div class="v-align">
        <h1>Rent. Borrow. Stuff.</h1>
        <div class="browse-filter">
          <div class="browse-item P10">
            <input
              type="text"
              v-model="itemType"
              class="input-type"
              placeholder="Search Bicycles, Cameras, Books, Bikes, Clothes, etc."
            >
          </div>
          <div class="browse-item">
            <multi-select
              v-model="selectedOptions"
              :options="cities"
              placeholder="Location"
              label="name"
              track-by="name"
              class="multi-select"
            >
              <template slot="clear" slot-scope="props">
                <div
                  class="multiselect__clear"
                  v-if="selectedOptions!=null?selectedOptions.lengt:false"
                  @mousedown.prevent.stop="clearAll(props.search)"
                ></div>
              </template>
              <template slot="caret">
                <span></span>
              </template>
              <span slot="noResult">Sorry, No results found</span>
              <span slot="noOptions">Please enter the name</span>
            </multi-select>
          </div>
          <div class="browse-item browse-item-last">
            <date-picker
              v-model="daterange"
              range
              type="date"
              lang="en"
              format="YYYY-MM-DD"
              :clearable="false"
              :shortcuts="false"
              range-separator="to"
              input-class="date-picker"
              class="date-picker-parent"
              :popup-style="popupStyle"
            ></date-picker>
          </div>
          <div class="browse-btn">
            <AppButton text="Browse"/>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import MultiSelect from "vue-multiselect";
import DatePicker from "vue2-datepicker";
import Header from "@/components/Header.vue";
import AppButton from "@/components/AppButton.vue";
import { getCities } from "@/queries/list-item";

export default {
  name: "CoverPage",
  components: {
    Header,
    MultiSelect,
    DatePicker,
    AppButton
  },
  data() {
    return {
      itemType: "",
      searchText: "",
      selectedOptions: [],
      daterange: [this.getTomorrow(1), this.getTomorrow(2)],
      popupStyle: {
        top: "initial",
        left: ""
      },
      cities: []
    };
  },
  methods: {
    select(val) {
      console.log("Selected");
    },
    getTomorrow(type) {
      const tomorrow = new Date();
      tomorrow.setDate(tomorrow.getDate() + type);
      return tomorrow;
    },
    close() {
      // this.isLoading = false;
      // this.options = [];
      // this.selectedOptions = [];
    }
  },
  apollo: {
    cities: getCities
  }
};
</script>

<style scoped lang="scss">
@import url(https://unpkg.com/vue-multiselect@2.1.0/dist/vue-multiselect.min.css);

.cover-page {
  height: 100vh;
  position: relative;
  z-index: 100;

  &::after {
    background-image: linear-gradient(
      to left bottom,
      #352f44,
      #332d42,
      #312b3f,
      #2f293d,
      #2d273b,
      #2c253d,
      #2c2240,
      #2b2042,
      #2c1c49,
      #2d1850,
      #2f1257,
      #310a5d
    );
    -webkit-clip-path: polygon(0 0, 100% 0, 100% 80%, 0% 100%);
    clip-path: polygon(0 0, 100% 0, 100% 80%, 0% 100%);
    content: " ";
    position: absolute;
    top: 0;
    left: 0;
    height: 100%;
    width: 100%;
  }

  .cover-content {
    width: 80%;
    margin: 0 auto;

    .v-align {
      width: 80%;
      z-index: 100;
    }
  }

  .browse-filter {
    height: 60px;
    background-color: #fff;
    border-radius: 5px;

    .browse-item {
      width: 28%;
      display: inline-block;
      height: 30px;
      margin-top: 15px;
      // padding: 0 10px;
      border-right: 1px solid #808080cf;
      vertical-align: top;

      .input-type {
        width: 100%;
        height: 100%;
        background: transparent;
        color: $textColor;
      }
    }

    .browse-item-last {
      border-right: none;
      width: 28%;
    }

    .browse-btn {
      display: inline-block;
      margin-left: 15px;
      height: 40px;
      margin-top: 10px;
    }
  }

  .P10 {
    padding: 0 10px;
  }
}

@media (max-width: 576px) {
  .cover-page {
    .browse-filter {
      height: auto;
      background: none;

      .browse-item {
        width: 100%;
        margin-bottom: 20px;
        display: block;
        background: #fff;
        border-radius: 5px;
        height: 40px;
      }

      .browse-btn {
        margin-left: 0;
        margin-top: 0;
        width: 100%;

        .app-button {
          width: 100%;
        }
      }
    }

    &:after {
      clip-path: polygon(0 0, 100% 0, 100% 90%, 0% 100%);
    }
  }
}
</style>
