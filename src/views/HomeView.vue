<script setup>
import ReadyToEnquireComponent from '../components/ReadyToEnquireComponent.vue'
</script>

<template>
  <div>
    <div class="image-slice">
      <h1>Welcome to M Swim</h1>
      <h2>Where the journey to aquatic excellence begins</h2>
    </div>

    <div class="wrapper light-blue">
      <h3>Locations</h3>
      <div class="row">
        <div class="location-block">
          <a href="https://maps.app.goo.gl/uqat7mUi3UN1SxVP7" target="_blank">
            <div class="img one"></div>
            <div class="location-info">
              <p class="head">Waterworld leisure resort</p>
              <p>
                Festival Park
                <br />Stoke on Trent
                <br />Staffordshire
                <br />ST1 5PU
              </p>
            </div>
          </a>
        </div>
        <div class="location-block">
          <a href="https://maps.app.goo.gl/SbjC99EBpPGqz6ce7" target="_blank">
            <div class="img two"></div>
            <div class="location-info">
              <p class="head">M Club Spa & Fitness - Newcastle</p>
              <p>
                Parklands
                <br />Newcastle Road
                <br />Stoke-on-Trent
                <br />ST4 6NW
              </p>
            </div>
          </a>
        </div>
        <div class="location-block">
          <a href="https://maps.app.goo.gl/MHeQ3e8tmJPqdGTd9" target="_blank">
            <div class="img three"></div>
            <div class="location-info">
              <p class="head">M Club Spa & Fitness - Hanley</p>
              <p>
                Waterworld Leisure Resort
                <br />Festival Way
                <br />Stoke-on-Trent
                <br />ST1 5PU
              </p>
            </div>
          </a>
        </div>
      </div>
    </div>
    <div class="wrapper light-grey">
      <p>
        Nestled within the esteemed M Club Spa & Fitness, we are more than just a swimming school;
        we are a beacon of water wisdom and wellness.
        <br />
        <br />Our mission is to empower individuals of all ages with the invaluable life skill of swimming.
        With a team of dedicated instructors, state-of-the-art facilities, and a commitment to excellence,
        we invite you to join us in the water.
        <br />
        <br />Dive into a world of aquatic discovery, build confidence,
        and embrace the transformative power of swimming with M Swim.
      </p>
      <div class="inline">
        <RouterLink class="about-link" to="/about">find out more</RouterLink>
        <p> or </p>
        <a class="about-link" target="_blank" rel="noopener noreferrer" href="https://m-swim.soak.ly/#/online-booking">book online</a><p>.</p>
      </div>
    </div>
    <div class="wrapper partner light-blue">
      <p>
        <b>M Swim</b> is an official
        <b>STA partner</b> and an accredited
        <b>STA Swim Academy</b>.
      </p>
      <img src="../assets/images/sta/sta-logo.png" alt="sta-logo" />
    </div>
    <ReadyToEnquireComponent />
  </div>
</template>

<style scoped>
.image-slice {
  background-image: url('../assets/images/home/banner.webp');
  background-position: top center;
  background-repeat: no-repeat;
  background-size: cover;
  display: flex;
  align-items: center;
  align-self: center;
  height: 50vh;
  padding: 30px;
  justify-content: center;
  flex-direction: column;
  color: white;
  text-align: center;
  opacity: 90%;
  text-shadow: 0px 1px 4px #050a30;
}
.wrapper {
  text-align: center;
  padding: 40px 15%;
}
.wrapper h3 {
  text-shadow: 0px 1px 4px #ebf7fd;
  padding-bottom: 15px;
}

.image-slice h1 {
  font-size: 3em;
}
.wrapper h3 {
  margin: 0;
}
.rows {
  flex-direction: column;
}
.inline, .inline p {
  display: inline;
}
.about-link {
  text-decoration: #050a30 underline;
  color: #050a30;
  padding: 0;
  /* width: 105px; */
  margin: 0 auto;
}
.location-block {
  width: 30%;
  border-radius: 25px;
  overflow: hidden;
  background-color: white;
  box-shadow: rgba(0, 0, 0, 0.15) 1.95px 1.95px 2.6px;
}
.location-block .img {
  height: 200px;
  background-repeat: no-repeat;
  background-size: cover;
}
.location-block a {
  color: #050a30;
  text-decoration: none;
}
.location-block .img {
  --mask: radial-gradient(16.8px at 50% calc(100% - 23.5px), #000 99%, #0000 101%) calc(50% - 20px)
      0/40px 100%,
    radial-gradient(16.8px at 50% calc(100% + 13.5px), #0000 99%, #000 101%) 50% calc(100% - 10px) /
      40px 100% repeat-x;
  -webkit-mask: var(--mask);
  mask: var(--mask);
}

.location-info p:not(.head) {
  font-size: 14px;
}
.img.one {
  background-image: url('../assets/images/home/locations/waterworld.webp');
  background-position: bottom center;
}
.img.two {
  background-image: url('../assets/images/home/locations/newcastle.webp');
  background-position: bottom center;
}

.img.three {
  background-image: url('../assets/images/home/locations/hanley.webp');
  background-position: bottom center;
}
.partner {
  display: flex;
  align-items: center;
}
.partner img {
  width: 110px;
  padding: 10px 0 0 0;
}

@media only screen and (max-width: 864px) {
  .image-slice {
    height: 40vh;
    background-position: top center;
  }
  .wrapper {
    padding: 40px 4%;
  }
}
@media only screen and (max-width: 640px) {
  .row {
    align-items: center;
  }
  .location-block {
    width: 100%;
    margin-bottom: 30px;
  }
  .image-slice {
    height: 35vh;
  }
  .image-slice h1 {
    font-size: 2em;
  }
  .image-slice h2 {
    font-size: 1em;
  }
  .wrapper {
    padding: 40px 10%;
  }
}
</style>