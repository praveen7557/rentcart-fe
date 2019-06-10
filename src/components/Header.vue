<template>
  <div>
    <div class="navExtra" :class="{'DN':!isFixed}"></div>
    <nav
      class="navbar navbar-expand-lg"
      :class="{ 'is-light': isFixed||!isHome, 'is-primary': !isFixed,'fixed':isFixed }"
    >
      <div class="container">
        <div class="navbar-brand">
          <span class="navbar-item">
            <router-link class="Logo" to="/">
              <!-- <div class="brandIcon" :class="iconClass"></div> -->
              RENTCART
            </router-link>
          </span>
        </div>
        <button
          class="navbar-toggler"
          type="button"
          data-toggle="collapse"
          data-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          @click="isFixed=true"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <i class="material-icons" @click="menuClick">menu</i>
        </button>

        <div class="collapse navbar-collapse" id="navbarSupportedContent">
          <ul class="navbar-nav ml-auto">
            <li class="nav-item" v-for="item in navItems" :key="item.key">
              <router-link
                data-toggle="collapse"
                data-target="#navbarSupportedContent"
                class="nav-link CP"
                :to="item.route"
              >{{item.name}}</router-link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
    <!-- </fixed-header> -->
    <!-- <div class="extra"></div> -->
  </div>
</template>

<script>
$(document).on("scroll", function(e) {
  $("#navbarSupportedContent").collapse("hide");
});

export default {
  name: "Header",
  props: {
    msg: String,
    url: String,
    isHome: {
      type: Boolean,
      default: false
    }
  },
  methods: {
    handleScroll() {
      var st = window.pageYOffset || document.documentElement.scrollTop;
      if (st > this.lastScrollTop) {
        this.isFixed = false;
        this.scrolledUp = false;
      } else {
        // upscroll code
        if (!isInViewport("nav")) {
          this.isFixed = true;
          this.scrolledUp = true;
          // this.img = require("../assets/footer_logo.svg");
          this.iconClass = "brandIconGray";
        } else if (isInViewport(".navExtra")) {
          this.isFixed = false;
          this.scrolledUp = false;
          // this.img = require("../assets/logo.svg");
          this.iconClass = "";
        }
      }
      this.lastScrollTop = st;
    },
    menuClick() {
      console.log("Menu CLick");
    }
  },
  created() {
    window.addEventListener("scroll", this.handleScroll);
  },
  destroyed() {
    window.removeEventListener("scroll", this.handleScroll);
  },
  data() {
    return {
      iconClass: "",
      isFixed: false,
      lastScrollTop: 0,
      scrolledUp: false,
      // img: require("../assets/logo.svg"),
      navItems: [
        {
          key: 1,
          name: "Browse",
          route: "/"
        },
        {
          key: 2,
          name: "List Item",
          route: "/list-item"
        },
        {
          key: 3,
          name: "Sign In",
          route: "/"
        }
      ]
    };
  }
};
var isInViewport = function(elem) {
  var bounding = document.querySelector(elem).getBoundingClientRect();
  return (
    bounding.top >= 0 &&
    bounding.left >= 0 &&
    bounding.bottom <=
      (window.innerHeight || document.documentElement.clientHeight) &&
    bounding.right <=
      (window.innerWidth || document.documentElement.clientWidth)
  );
};
</script>

<style scoped lang="scss">
a {
  color: white !important;
}
.nav-item {
  margin-left: 10px;
  font-size: 14px;
}
.router-link-exact-active {
  opacity: 1 !important;
}
.nav-item a {
  opacity: 0.6;
}
.nav-item a:hover {
  opacity: 1;
}
.nav-item:last-child a {
  opacity: 1;
}
.navBtn {
  border: 1px solid white;
  border-radius: 2px;
  /* padding: 10px; */
  line-height: 35px;
  padding: 0 10px;
  border-radius: 2px;
}
.navBtn:hover {
  background: linear-gradient(106deg, #08aeea, #2af598);
  border-color: transparent;
}
.P0 {
  padding: 0 !important;
  height: 100%;
  width: 100%;
}
.btnHiring {
  background-color: #2cdd9b !important;
  height: 100%;
  width: 100%;
  line-height: 35px;
  padding: 0 10px;
  border-radius: 2px;
  font-weight: 700;
}
.Logo {
  font-weight: 600;
}
.Logo img {
  height: 34px;
}
.is-light .nav-link {
  color: #fff !important;
}
.brandIcon {
  height: 34px;
  width: 94px;
  /* background-image: url("../assets/logo.svg"); */
  background-repeat: no-repeat;
  background-size: cover;
}
.brandIconGray {
  /* background-image: url("../assets/footer_logo.svg"); */
}
.is-light .brandIcon {
  /* background-image: url("../assets/footer_logo.svg"); */
}
.announcementBar {
  padding: 12px;
  /* background: #0069ff; */
  border-radius: 0;
  border: none;
  /* background-color: #031b4e; */
  color: white;
}
.announcementBar .new {
  background-color: #00d7d2 !important;
  border-radius: 5px;
  color: rgba(3, 27, 78, 0.75);
  cursor: default;
  display: inline-block;
  padding: 4px 8px;
  line-height: 1;
  font-size: 12px;
  font-weight: 400;
  text-align: center;
  text-transform: uppercase;
  -webkit-user-select: none;
  -moz-user-select: none;
  -ms-user-select: none;
  user-select: none;
  margin-right: 12px;
}
.announcementBar .close {
  float: right;
  top: 4px;
  right: 15px;
  position: relative;
  cursor: pointer;
  color: white;
}
.extra {
  height: 990px;
}
.navbar {
  width: 100%;
  background-color: transparent;
  margin: 0 auto;
  transition: background 0.15s ease-out;
  /* background: transparent; */
  z-index: 10000;
  transition: top 0.2s ease-in-out;
  top: 0px;
  color: white;
  font-weight: 500;
  font-size: 12px;
  padding-left: 0;
  padding-right: 0;
  max-width: 100vw;
  /* background-image: radial-gradient(
    circle,
    #1e3048,
    #1c273d,
    #191f31,
    #151726,
    #100e1c
  ); */
  /* background-color: #333; */
}
.is-light {
  /* background-color: #1c1e3b !important; */
  /* background-image: linear-gradient(
    to right,
    #11143f,
    #11143b,
    #121537,
    #121533,
    #13152f
  ) !important; */
  /* background-color: #28007c !important; */
  /* background: linear-gradient(180deg, #6a4ca8 50%, #28007c 100%); */
  // background: white;
  box-shadow: 0 8px 20px 0px rgba(0, 0, 0, 0.06);
  background-color: #fff;
  background-color: $fourth;
}
.is-light .navBtn {
  background: linear-gradient(106deg, #08aeea, #2af598);
  color: white;
  font-weight: bold;
  border-radius: 3px;
  border: none;
}
/* .navbar.is-primary {
  background: transparent;
} */
/* .navbar.is-light {
  background: #fff;
} */
.isNavUp {
  top: -16px;
}
.fixed {
  position: fixed;
  top: 0;
  width: 100%;
}
.is-light .threeBars {
  fill: gray;
}
.is-light i {
  color: gray;
}
.navExtra {
  height: 70px;
  background-color: transparent;
}
.navbar-toggler {
  color: white;
}
.container {
  padding: 7px 20px;
}
@media only screen and (min-width: 1920px) {
  .container {
    max-width: 1140px;
  }
}
@media (min-width: 992px) {
  .navbar-expand-lg .navbar-nav .nav-link {
    padding-right: 1em;
    padding-left: 1em;
  }
}
@media (max-width: 540px) {
  /* .navbar {
    width: 80%;
  } */
  .navbar {
    padding: 7px;
  }
  .nav-item {
    padding-top: 8px;
  }
  .navBtn {
    line-height: 45px;
  }
}
</style>
