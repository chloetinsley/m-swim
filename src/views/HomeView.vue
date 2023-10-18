<script setup>
</script>

<template>
  <div>
    <div class="image-slice">
      <h1>Welcome to M Swim</h1>
      <h2>where the journey to aquatic excellence begins.</h2>
    </div>
    <div class="wrapper light-blue">
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
    </div>
    <div class="wrapper light-grey">
      <h3>Locations</h3>
      <div class="row">
        <div class="location-block">
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
        </div>
        <div class="location-block">
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
        </div>
        <div class="location-block">
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
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
.wrapper {
  /* display: flex;
  align-items: stretch; */
  text-align: center;
  /* flex-direction: column; */
  /* height: 60px; */
  padding: 40px 15%;
  /* width: 100%; */
  /* height: auto; */
}
.wrapper h3 {
  text-shadow: 0px 1px 4px #ebf7fd;
}
.image-slice {
  /* height: 400px; */
  display: flex;
  align-items: center;
  align-self: center;
  height: 50vh;
  padding: 30px;
  background-image: url('../assets/images/home/wrapper.png');
  background-position: top center;
  background-repeat: no-repeat;
  background-size: cover;
  justify-content: center;
  flex-direction: column;
  color: white;
  text-align: center;
  opacity: 90%;
  text-shadow: 0px 1px 4px #050a30;

  /* text-shadow: 3px 0px 7px rgba(81, 67, 21, 0.8), -3px 0px 7px rgba(81, 67, 21, 0.8),
    0px 4px 7px rgba(81, 67, 21, 0.8); */
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

.location-block {
  /* width: 300px; */
  width: 30%;
  border-radius: 25px;
  overflow: hidden;
  background-color: white;
  box-shadow: rgba(0, 0, 0, 0.15) 1.95px 1.95px 2.6px;
  /* box-shadow: 5px 5px 7px rgba(33, 33, 33, 0.7); */
  /* box-shadow: 0px 1px 4px #050a30; */
}
.location-block .img {
  height: 200px;
  background-repeat: no-repeat;
  background-size: cover;
  /* border-bottom: 5px wave white; */
}
.img {
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
  background-color: black;
  /* background-image: url('../assets/images/home/locations/newcastle.jpeg'); */
  /* background-position: bottom center; */
}
.img.two {
  background-image: url('../assets/images/home/locations/newcastle.jpeg');
  background-position: bottom center;
}

.img.three {
  background-image: url('../assets/images/home/locations/festival-park.jpeg');
  background-position: center center;
}

@media only screen and (max-width: 864px) {
  .image-slice {
    /* height: 40vh; */
    background-position: top center;
  }
  .wrapper {
    padding: 40px 10%;
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
    height: 30vh;
  }
  .image-slice h1 {
    font-size: 2em;
  }
  .image-slice h2 {
    font-size: 1em;
  }
}
@media only screen and (max-width: 420px) {
  .location-block {
    /* width: 100%; */
    margin-bottom: 30px;
  }
}
</style>