<template>
  <div class="divFooter">
    <div class="container">
      <div class="row W90">
        <div class="col-md-6 col-lg-3 col-12">
          <div class="footerLogo">
            <router-link to="/">
              <!-- <img src="../assets/footer_logo.svg" alt="Bitlab Academy"> -->
              RENTCART
            </router-link>
          </div>
        </div>
        <div class="col-md-6 col-lg-2 col-12 lastColumnSmall">
          <div class="anchorName">
            <router-link to="/">Home</router-link>
          </div>
          <div class="anchorName">
            <router-link to="/about">About Us</router-link>
          </div>
        </div>
        <div class="col-md-5 col-lg-3 col-12 lastRow">
          <div class="anchorName">
            <router-link to="/about#divContactUs">Contact Us</router-link>
          </div>
          <div class="anchorName">
            <router-link to="/">Terms and Conditions</router-link>
          </div>
          <div class="anchorName">
            <router-link to="/">FAQ</router-link>
          </div>
          <div class="anchorName">
            <div class="MA">
              <div class="socialName fb DIB">
                <a href="https://www.facebook.com/bitlabacademy/" target="blank">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="16"
                    height="16"
                    viewBox="0 0 24 24"
                    fill="#4267b2"
                  >
                    <path
                      d="M9 8h-3v4h3v12h5v-12h3.642l.358-4h-4v-1.667c0-.955.192-1.333 1.115-1.333h2.885v-5h-3.808c-3.596 0-5.192 1.583-5.192 4.615v3.385z"
                    ></path>
                  </svg>
                </a>
              </div>
              <div class="socialName DIB">
                <a href="https://twitter.com/BitlabAcademy" target="blank">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="16"
                    height="16"
                    viewBox="0 0 24 24"
                    fill="#1da1f2"
                  >
                    <path
                      d="M24 4.557c-.883.392-1.832.656-2.828.775 1.017-.609 1.798-1.574 2.165-2.724-.951.564-2.005.974-3.127 1.195-.897-.957-2.178-1.555-3.594-1.555-3.179 0-5.515 2.966-4.797 6.045-4.091-.205-7.719-2.165-10.148-5.144-1.29 2.213-.669 5.108 1.523 6.574-.806-.026-1.566-.247-2.229-.616-.054 2.281 1.581 4.415 3.949 4.89-.693.188-1.452.232-2.224.084.626 1.956 2.444 3.379 4.6 3.419-2.07 1.623-4.678 2.348-7.29 2.04 2.179 1.397 4.768 2.212 7.548 2.212 9.142 0 14.307-7.721 13.995-14.646.962-.695 1.797-1.562 2.457-2.549z"
                    ></path>
                  </svg>
                </a>
              </div>
            </div>
          </div>
        </div>
        <div class="col-md-7 col-lg-4 col-12 lastColumn lastRow">
          <div class="anchorName MT20">For any queries, mail us at:</div>
          <div class="anchorName">
            <a class="mailID" href="mailto:support@bitlab.academy">support@bitlab.academy</a>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Footer"
};
</script>

<style scoped lang="scss">
.divFooter {
  background-color: #f6f6f6;
  padding-bottom: 100px;
  padding-top: 100px;
}
.footerLogo {
  height: 65px;
  width: 185px;
  font-size: 26px;
  color: $fourth;
  font-weight: bold;
}
.anchorName,
.socialName {
  padding: 5px;
  text-align: left;
  font-size: 14px;
  color: #000 !important;
}
.anchorName a,
.socialName a {
  color: #000 !important;
}
.socialName svg {
  fill: rgba(0, 0, 0, 0.8);
}
.fb {
  padding-left: 0;
}
.W90 {
  width: 90%;
  margin: 0 auto;
}
.DIB {
  display: inline-block;
}
.MA {
  margin: 0 auto;
}
.lastColumn .anchorName {
  text-align: right;
}
.mailID {
  word-wrap: break-word;
}
a.baseblockSite {
  font-weight: bold;
  color: #28007c !important;
}
a {
  color: initial;
}
@media only screen and (min-width: 1920px) {
  .container {
    max-width: 1140px;
  }
}
@media (max-width: 1366px) {
  .footerLogo img {
    width: 130px;
  }
}
@media (max-width: 768px) {
  .lastColumnSmall .anchorName,
  .lastColumn .anchorName {
    text-align: right;
  }
  .lastRow {
    margin-top: 30px;
  }
}
@media (max-width: 767px) {
  .W90 {
    width: 95%;
    margin: 0 auto;
  }
  .row .anchorName {
    text-align: center;
  }
  .lastColumnSmall,
  .lastRow {
    margin-top: 60px;
  }
  .footerLogo {
    width: auto;
  }
  .divFooter {
    padding-top: 60px;
    padding-bottom: 60px;
  }
}
</style>
