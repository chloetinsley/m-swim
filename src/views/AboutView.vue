<template>
  <div class="wrapper light-blue">
    <div class="row">
      <div class="left">
        <h1>Welcome to M Swim..</h1>
        <h2>where the water is your playground, and every stroke is a step towards aquatic mastery.</h2>
      </div>
      <div class="image-container">
        <img src="../assets/images/about/m-swim-located-in.jpeg" />
      </div>
    </div>
    <div>
      <p class="heading">
        <b>Our Story</b>
      </p>
      <p>M Swim, a jewel within M Club Spa & Fitness, is a testament to the transformative power of water. Founded in 2021, we embarked on a mission to make swimming an accessible and enjoyable experience for all ages.</p>
      <p class="heading">
        <b>Our Philosophy</b>
      </p>
      <p>At M Swim, we believe that swimming is not just a skill; it's a life-affirming journey. Our approach is rooted in nurturing confidence, safety, and the joy of gliding through water. Whether you're a toddler taking their first strokes or an adult refining your technique, our team of dedicated instructors is here to guide you every stroke of the way.</p>
      <p class="heading">
        <b>Our Commitment</b>
      </p>
      <p>Our commitment extends beyond the pool. We are devoted to creating a vibrant aquatic community, where learning to swim transcends age and ability. With cutting-edge facilities and a passion for excellence, we are your partners in aquatic wellness.</p>
      <p class="heading">
        <b>Join Us</b>
      </p>
      <p>Dive into the M Swim experience. Join us in celebrating the freedom, fitness, and fun that swimming brings to life. Whether you're here to conquer your fear of water, refine your strokes, or prepare for a triathlon, we're with you, every lap of the way.</p>
    </div>
  </div>
</template>

<style>
.wrapper {
  flex-direction: column;
  padding: 50px 10% 100px 10%;
  text-shadow: 0px 1px 4px white;
}
h1 {
  font-weight: 600;
  margin: 20px 0;
}
h2 {
  font-weight: normal;
  margin: 20px 0;
}
.heading {
  margin-top: 0;
  font-size: 1.2em;
}
.heading:not(:first-of-type) {
  margin-top: 1.5em;
}
.row {
  display: flex;
  flex-direction: row;
  align-items: stretch;
  justify-content: space-between;
  padding: 20px 0 70px 0;
  margin-bottom: 70px;
  border-bottom: 3px dashed #050a30;
}
.left {
  width: 55%;
  display: flex;
  flex-direction: column;
  align-self: center;
}
.image-container {
  display: flex;
  align-self: center;
  width: 35%;
}
.row img {
  width: 100%;
  border-radius: 25px;
  box-shadow: 0px 1px 4px white;
}
p {
  margin: 0.75em 0;
}

@media only screen and (max-width: 640px) {
  .row {
    flex-direction: column;
    padding-bottom: 60px;
    margin-bottom: 60px;
  }
  .left {
    width: 100%;
    padding-bottom: 0;
  }
  .image-container {
    width: 100%;
  }
  h1 {
    margin: 0;
    font-size: 1.5em;
  }
  h2 {
    font-size: 1.2em;
  }
  .wrapper {
    padding-bottom: 50px;
  }
}
</style>
