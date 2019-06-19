<template>
  <li class="app-card-li">
    <div class="app-card">
      <img class="card-image" :src="cardData.images[0]" :alt="cardData.title">
      <div class="card-details">
        <h6 class="card-title">{{cardData.name}}</h6>
        <div class="card-price">&#8377; {{cardData.price}} / day,</div>
        <div class="card-location">{{cardData.city.name}}</div>
      </div>
    </div>
  </li>
</template>

<script>
export default {
  name: "AppCard",
  props: {
    cardData: {
      type: Object
    }
  }
};
</script>

<style lang="scss">
// @import "../styles/variables.scss";
.app-card-li {
  list-style: none;
  display: inline-block;
  transition: all 0.5s ease-in-out;
  &.last-item {
    .app-card {
      margin-right: 0px;
    }
  }
}
.app-card {
  display: inline-block;
  width: 300px;
  margin-right: 20px;
  box-shadow: 0px 1px 3px 0px $fourth;
  border-radius: 3px;
  overflow: hidden;
  position: relative;
  height: 200px;

  .card-image {
    width: 100%;
    height: 200px;
  }

  .card-details {
    padding: 10px 10px;
    position: absolute;
    background-image: linear-gradient(
      rgba(0, 0, 0, 0),
      rgba(0, 0, 0, 0.12) 5px,
      rgba(0, 0, 0, 0.52) 24px,
      rgba(0, 0, 0, 0.79) 40px,
      rgb(0, 0, 0) 56px,
      rgb(0, 0, 0) 100%
    );
    width: 100%;
    bottom: 0;
    color: white;
  }

  .card-title {
    margin-bottom: 0px;
  }

  .card-price {
    display: inline-block;
    margin-right: 5px;
    // color: $fourth;
  }
  .card-location {
    display: inline-block;
    // color: gray;
    font-size: 12px;
  }
}
</style>
