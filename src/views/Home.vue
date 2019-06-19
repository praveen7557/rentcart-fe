<template>
  <div class="home">
    <CoverPage/>
    <CardSlider type="Movies" :type-data="items"/>
    <!-- <div class="scroller"></div> -->
  </div>
</template>

<script>
import CoverPage from "@/components/CoverPage.vue";
import CardSlider from "@/components/CardSlider.vue";
import AppFooter from "@/components/AppFooter.vue";
import { getItems } from "@/queries/home";

export default {
  name: "home",
  components: {
    CoverPage,
    CardSlider,
    AppFooter
  },
  apollo: {
    items: getItems
  },
  data() {
    return {
      cardData: [
        {
          id: 1,
          images: [
            "https://cdn.vox-cdn.com/thumbor/wMyV95aDmiMifoFWyC6-5p0cYU4=/0x0:2700x1800/1200x800/filters:focal(1006x666:1438x1098)/cdn.vox-cdn.com/uploads/chorus_image/image/63231673/the_dark_knight_poster_crop_2700.0.jpg"
          ],
          name: "Dark Knight",
          price: "25",
          city: "JNTU"
        },
        {
          id: 1,
          images: [
            "https://cdn.vox-cdn.com/thumbor/wMyV95aDmiMifoFWyC6-5p0cYU4=/0x0:2700x1800/1200x800/filters:focal(1006x666:1438x1098)/cdn.vox-cdn.com/uploads/chorus_image/image/63231673/the_dark_knight_poster_crop_2700.0.jpg"
          ],
          name: "Dark Knight",
          price: "25",
          city: "JNTU"
        },
        {
          id: 1,
          images: [
            "https://cdn.vox-cdn.com/thumbor/wMyV95aDmiMifoFWyC6-5p0cYU4=/0x0:2700x1800/1200x800/filters:focal(1006x666:1438x1098)/cdn.vox-cdn.com/uploads/chorus_image/image/63231673/the_dark_knight_poster_crop_2700.0.jpg"
          ],
          name: "Dark Knight",
          price: "25",
          city: "JNTU"
        },
        {
          id: 1,
          images: [
            "https://cdn.vox-cdn.com/thumbor/wMyV95aDmiMifoFWyC6-5p0cYU4=/0x0:2700x1800/1200x800/filters:focal(1006x666:1438x1098)/cdn.vox-cdn.com/uploads/chorus_image/image/63231673/the_dark_knight_poster_crop_2700.0.jpg"
          ],
          name: "Dark Knight",
          price: "25",
          city: "JNTU"
        }
      ],
      items: []
    };
  }
};
</script>

<style>
.scroller {
  height: 300px;
}
</style>
