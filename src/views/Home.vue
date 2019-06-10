<template>
  <div class="home">
    <CoverPage/>
    <CardSlider type="Movies" :type-data="cardData"/>
    <div class="scroller"></div>
  </div>
</template>

<script>
import CoverPage from "@/components/CoverPage.vue";
import CardSlider from "@/components/CardSlider.vue";
import AppFooter from "@/components/AppFooter.vue";

export default {
  name: "home",
  components: {
    CoverPage,
    CardSlider,
    AppFooter
  },
  data() {
    return {
      cardData: [
        {
          id: 1,
          img:
            "https://cdn.vox-cdn.com/thumbor/wMyV95aDmiMifoFWyC6-5p0cYU4=/0x0:2700x1800/1200x800/filters:focal(1006x666:1438x1098)/cdn.vox-cdn.com/uploads/chorus_image/image/63231673/the_dark_knight_poster_crop_2700.0.jpg",
          title: "Dark Knight",
          cost: "25",
          location: "JNTU"
        },
        {
          id: 2,
          img: "https://tripped.s3.amazonaws.com/1556345010573.jpg",
          title: "End Game",
          cost: "50",
          location: "KPHB"
        },
        {
          id: 3,
          img:
            "https://s3.amazonaws.com/american-rivers-website/wp-content/uploads/2015/09/22182724/NW-rivers-threatened-by-Red-Flat-Systems_KenMorrish-header.jpg",
          title: "Truman Show",
          cost: "20",
          location: "Cyber City"
        },
        {
          id: 4,
          img: "https://i.redd.it/8lqquvltc4k01.jpg",
          title: "F.R.I.E.N.D.S",
          cost: "40",
          location: "Everywhere"
        },
        {
          id: 1,
          img:
            "https://cdn.vox-cdn.com/thumbor/wMyV95aDmiMifoFWyC6-5p0cYU4=/0x0:2700x1800/1200x800/filters:focal(1006x666:1438x1098)/cdn.vox-cdn.com/uploads/chorus_image/image/63231673/the_dark_knight_poster_crop_2700.0.jpg",
          title: "Dark Knight",
          cost: "25",
          location: "JNTU"
        },
        {
          id: 2,
          img: "https://tripped.s3.amazonaws.com/1556345010573.jpg",
          title: "End Game",
          cost: "50",
          location: "KPHB"
        },
        {
          id: 3,
          img:
            "https://s3.amazonaws.com/american-rivers-website/wp-content/uploads/2015/09/22182724/NW-rivers-threatened-by-Red-Flat-Systems_KenMorrish-header.jpg",
          title: "Truman Show",
          cost: "20",
          location: "Cyber City"
        },
        {
          id: 4,
          img: "https://i.redd.it/8lqquvltc4k01.jpg",
          title: "F.R.I.E.N.D.S",
          cost: "40",
          location: "Everywhere"
        },
        {
          id: 1,
          img:
            "https://cdn.vox-cdn.com/thumbor/wMyV95aDmiMifoFWyC6-5p0cYU4=/0x0:2700x1800/1200x800/filters:focal(1006x666:1438x1098)/cdn.vox-cdn.com/uploads/chorus_image/image/63231673/the_dark_knight_poster_crop_2700.0.jpg",
          title: "Dark Knight",
          cost: "25",
          location: "JNTU"
        },
        {
          id: 2,
          img: "https://tripped.s3.amazonaws.com/1556345010573.jpg",
          title: "End Game",
          cost: "50",
          location: "KPHB"
        },
        {
          id: 3,
          img:
            "https://s3.amazonaws.com/american-rivers-website/wp-content/uploads/2015/09/22182724/NW-rivers-threatened-by-Red-Flat-Systems_KenMorrish-header.jpg",
          title: "Truman Show",
          cost: "20",
          location: "Cyber City"
        },
        {
          id: 4,
          img: "https://i.redd.it/8lqquvltc4k01.jpg",
          title: "F.R.I.E.N.D.S",
          cost: "40",
          location: "Everywhere"
        },
        {
          id: 1,
          img:
            "https://cdn.vox-cdn.com/thumbor/wMyV95aDmiMifoFWyC6-5p0cYU4=/0x0:2700x1800/1200x800/filters:focal(1006x666:1438x1098)/cdn.vox-cdn.com/uploads/chorus_image/image/63231673/the_dark_knight_poster_crop_2700.0.jpg",
          title: "Dark Knight",
          cost: "25",
          location: "JNTU"
        },
        {
          id: 2,
          img: "https://tripped.s3.amazonaws.com/1556345010573.jpg",
          title: "End Game",
          cost: "50",
          location: "KPHB"
        },
        {
          id: 3,
          img:
            "https://s3.amazonaws.com/american-rivers-website/wp-content/uploads/2015/09/22182724/NW-rivers-threatened-by-Red-Flat-Systems_KenMorrish-header.jpg",
          title: "Truman Show",
          cost: "20",
          location: "Cyber City"
        },
        {
          id: 4,
          img: "https://i.redd.it/8lqquvltc4k01.jpg",
          title: "F.R.I.E.N.D.S",
          cost: "40",
          location: "Everywhere"
        },
        {
          id: 1,
          img:
            "https://cdn.vox-cdn.com/thumbor/wMyV95aDmiMifoFWyC6-5p0cYU4=/0x0:2700x1800/1200x800/filters:focal(1006x666:1438x1098)/cdn.vox-cdn.com/uploads/chorus_image/image/63231673/the_dark_knight_poster_crop_2700.0.jpg",
          title: "Dark Knight",
          cost: "25",
          location: "JNTU"
        },
        {
          id: 2,
          img: "https://tripped.s3.amazonaws.com/1556345010573.jpg",
          title: "End Game",
          cost: "50",
          location: "KPHB"
        },
        {
          id: 3,
          img:
            "https://s3.amazonaws.com/american-rivers-website/wp-content/uploads/2015/09/22182724/NW-rivers-threatened-by-Red-Flat-Systems_KenMorrish-header.jpg",
          title: "Truman Show",
          cost: "20",
          location: "Cyber City"
        },
        {
          id: 4,
          img: "https://i.redd.it/8lqquvltc4k01.jpg",
          title: "F.R.I.E.N.D.S",
          cost: "40",
          location: "Everywhere"
        },
        {
          id: 1,
          img:
            "https://cdn.vox-cdn.com/thumbor/wMyV95aDmiMifoFWyC6-5p0cYU4=/0x0:2700x1800/1200x800/filters:focal(1006x666:1438x1098)/cdn.vox-cdn.com/uploads/chorus_image/image/63231673/the_dark_knight_poster_crop_2700.0.jpg",
          title: "Dark Knight",
          cost: "25",
          location: "JNTU"
        },
        {
          id: 2,
          img: "https://tripped.s3.amazonaws.com/1556345010573.jpg",
          title: "End Game",
          cost: "50",
          location: "KPHB"
        },
        {
          id: 3,
          img:
            "https://s3.amazonaws.com/american-rivers-website/wp-content/uploads/2015/09/22182724/NW-rivers-threatened-by-Red-Flat-Systems_KenMorrish-header.jpg",
          title: "Truman Show",
          cost: "20",
          location: "Cyber City"
        },
        {
          id: 4,
          img: "https://i.redd.it/8lqquvltc4k01.jpg",
          title: "F.R.I.E.N.D.S",
          cost: "40",
          location: "Everywhere"
        },
        {
          id: 1,
          img:
            "https://cdn.vox-cdn.com/thumbor/wMyV95aDmiMifoFWyC6-5p0cYU4=/0x0:2700x1800/1200x800/filters:focal(1006x666:1438x1098)/cdn.vox-cdn.com/uploads/chorus_image/image/63231673/the_dark_knight_poster_crop_2700.0.jpg",
          title: "Dark Knight",
          cost: "25",
          location: "JNTU"
        },
        {
          id: 2,
          img: "https://tripped.s3.amazonaws.com/1556345010573.jpg",
          title: "End Game",
          cost: "50",
          location: "KPHB"
        },
        {
          id: 3,
          img:
            "https://s3.amazonaws.com/american-rivers-website/wp-content/uploads/2015/09/22182724/NW-rivers-threatened-by-Red-Flat-Systems_KenMorrish-header.jpg",
          title: "Truman Show",
          cost: "20",
          location: "Cyber City"
        },
        {
          id: 4,
          img: "https://i.redd.it/8lqquvltc4k01.jpg",
          title: "F.R.I.E.N.D.S",
          cost: "40",
          location: "Everywhere"
        },
        {
          id: 1,
          img:
            "https://cdn.vox-cdn.com/thumbor/wMyV95aDmiMifoFWyC6-5p0cYU4=/0x0:2700x1800/1200x800/filters:focal(1006x666:1438x1098)/cdn.vox-cdn.com/uploads/chorus_image/image/63231673/the_dark_knight_poster_crop_2700.0.jpg",
          title: "Dark Knight",
          cost: "25",
          location: "JNTU"
        },
        {
          id: 2,
          img: "https://tripped.s3.amazonaws.com/1556345010573.jpg",
          title: "End Game",
          cost: "50",
          location: "KPHB"
        },
        {
          id: 3,
          img:
            "https://s3.amazonaws.com/american-rivers-website/wp-content/uploads/2015/09/22182724/NW-rivers-threatened-by-Red-Flat-Systems_KenMorrish-header.jpg",
          title: "Truman Show",
          cost: "20",
          location: "Cyber City"
        },
        {
          id: 4,
          img: "https://i.redd.it/8lqquvltc4k01.jpg",
          title: "F.R.I.E.N.D.S",
          cost: "40",
          location: "Everywhere"
        }
      ]
    };
  }
};
</script>

<style>
.scroller {
  height: 300px;
}
</style>
