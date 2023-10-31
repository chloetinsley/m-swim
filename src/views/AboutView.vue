
<template>
  <div class="wrapper light-blue">
    <h1 class="page-heading">About M Swim</h1>

    <div class="row">
      <div class="vertical-align left">
        <p>
          Dive into the M Swim experience. Join us in celebrating the freedom, fitness,
          and fun that swimming brings to life. Whether you're here to conquer your fear of water,
          refine your strokes, or prepare for a triathlon, we're with you, every lap of the way.
        </p>
        <h2>Based in 3 locations accross Staffordshire</h2>
        <ul>
          <li>Waterworld leisure resort</li>
          <li>M Club Spa & Fitness in Newcastle</li>
          <li>M Club Spa & Fitness in Hanley</li>
        </ul>
      </div>
      <div class="image-container">
        <img src="../assets/images/about/m-swim-located-in.jpeg" />
      </div>
    </div>
    <div class="row">
      <div class="block">
        <p class="heading">
          <b>Our Story</b>
        </p>
        <p>
          M Swim, a jewel within M Club Spa & Fitness, is a testament to the transformative power of water.
          Founded in 2021, we embarked on a mission to make swimming an accessible and enjoyable experience for all ages.
        </p>
      </div>
      <div class="block">
        <p class="heading">
          <b>Our Philosophy</b>
        </p>
        <p>
          We believe that swimming is not just a skill; it's a life-affirming journey.
          Our approach is rooted in nurturing confidence, safety, and the joy of gliding through water.
          Whether you're a toddler taking their first strokes or an adult refining your technique,
          our team of dedicated instructors is here to guide you every stroke of the way.
        </p>
      </div>
      <div class="block">
        <p class="heading">
          <b>Our Commitment</b>
        </p>
        <p>
          Our commitment extends beyond the pool. We are devoted to creating a vibrant aquatic community,
          where learning to swim transcends age and ability. With cutting-edge facilities and a passion for excellence,
          we are your partners in aquatic wellness.
        </p>
      </div>
    </div>

    <p
      class="row vertical-align"
    >M Swim, where the water is your playground, and every stroke is a step towards aquatic mastery.</p>
  </div>
</template>

<style scoped>
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
.block {
  margin: 25px;
  padding: 25px;
  background-color: #bbe3fa;
  flex: 1 1 0;
  text-align: center;
}
.block {
  padding-top: 18px;
  padding-bottom: 18px;
  padding-left: 10px;
  padding-right: 10px;
  box-shadow: 5px 5px 7px rgba(33, 33, 33, 0.7);
  transform: rotate(-6deg);
  min-width: 240px;
  transition: transform 0.15s linear;
}

.block:nth-child(even) {
  transform: rotate(4deg);
  position: relative;
  top: 5px;
}
.block:nth-child(3n) {
  transform: rotate(-3deg);
  position: relative;
  top: -5px;
}
.block:hover,
.block:focus {
  box-shadow: 10px 10px 7px rgba(0, 0, 0, 0.7);
  transform: scale(1.1);
  position: relative;
  z-index: 5;
}
.block .heading {
  font-size: 1.3rem;
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
  border-radius: 20px;
  box-shadow: rgba(0, 0, 0, 0.18) 0px 2px 4px;
  overflow: hidden;
}
.row img {
  width: 100%;
}
p {
  margin: 0.75em 0;
}

@media only screen and (max-width: 640px) {
  .left {
    width: 100%;
    padding-bottom: 0;
  }
  .image-container {
    width: 100%;
  }

  h2 {
    font-size: 1.2em;
  }
  .wrapper {
    padding-bottom: 50px;
  }
}
</style>
