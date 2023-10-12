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
    <div class="wrapper rows light-grey">
      <h3>Locations</h3>
      <p>We operate in 3 locations across Staffordshire</p>
      <RouterLink to="/about">View our locations</RouterLink>
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
  padding: 40px 10%;
  /* width: 100%; */
  /* height: auto; */
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

@media only screen and (max-width: 864px) {
  .image-slice {
    /* height: 40vh; */
    background-position: top center;
  }
}
@media only screen and (max-width: 640px) {
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
</style>