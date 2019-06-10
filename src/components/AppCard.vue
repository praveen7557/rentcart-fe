<template>
  <li class="app-card-li">
    <div class="app-card">
      <img class="card-image" :src="cardData.img" :alt="cardData.title">
      <div class="card-details">
        <h6 class="card-title">{{cardData.title}}</h6>
        <div class="card-price">&#8377; {{cardData.cost}} / day,</div>
        <div class="card-location">{{cardData.location}}</div>
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
}
.app-card {
  display: inline-block;
  width: 300px;
  margin-right: 20px;
  box-shadow: 0px 1px 3px 0px $fourth;
  border-radius: 3px;
  overflow: hidden;

  .card-image {
    width: 100%;
    height: 200px;
  }

  .card-details {
    padding: 10px 10px;
  }

  .card-title {
    margin-bottom: 0px;
  }

  .card-price {
    display: inline-block;
    margin-right: 5px;
    color: $fourth;
  }
  .card-location {
    display: inline-block;
    color: gray;
    font-size: 12px;
  }
}
</style>
