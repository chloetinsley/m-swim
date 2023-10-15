
<template>
  <div class="wrapper light-blue">
    <h1>About M Swim</h1>
    <p>
      Dive into the M Swim experience. Join us in celebrating the freedom, fitness,
      and fun that swimming brings to life. Whether you're here to conquer your fear of water,
      refine your strokes, or prepare for a triathlon, we're with you, every lap of the way.
    </p>
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

    <!-- </div> -->

    <!-- test -->
    <div class="row">
      <div class="left">
        <p class="heading">M Swim..</p>
        <p>where the water is your playground, and every stroke is a step towards aquatic mastery.</p>
      </div>
      <div class="image-container">
        <img src="../assets/images/about/m-swim-located-in.jpeg" />
      </div>
    </div>
  </div>
</template>

<style>
.wrapper {
  flex-direction: column;
  padding: 50px 10% 100px 10%;
  color: #050a30;
  /* text-shadow: 0px 1px 4px white; */
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
  /* border-bottom: 3px dashed #050a30; */
}
.block {
  margin: 25px;
  padding: 25px;
  background-color: #bbe3fa;
  flex: 1 1 0;
  text-align: center;
  /* border-radius: 8px; */
  /* color: #009fe3; */
  /* border: 2px dotted #050a30; */
  /* width: 33%; */
}
.block {
  padding-top: 18px;
  padding-bottom: 18px;
  padding-left: 10px;
  padding-right: 10px;
  /* background-color: rgb(227, 255, 204); */
  /* box-shadow: 0px 2px 2px 3px #dadada;  */
  box-shadow: 5px 5px 7px rgba(33, 33, 33, 0.7);
  transform: rotate(-6deg);
  /* -webkit-transform: rotate(-4deg);
  -o-transform: rotate(-4deg);
  -moz-transform: rotate(-4deg); */
  min-width: 240px;
  /* width: 240px;
  height: 240px; */
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
.block p {
  /* font-size: 1em; */
}
/* ul li:nth-child(5n) a{
  transform:rotate(5deg);
  position:relative;
  top:-10px;
} */
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
