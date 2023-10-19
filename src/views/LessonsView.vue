<script setup lang="ts">
</script>

<template>
  <div class="wrapper light-blue">
    <h1 class="page-heading">Our Swimming Lessons</h1>
    <div class="row middle">
      <p>Discover the Art of Swimming with M Swim. Our lessons are designed to be an exciting journey through water, guided by the renowned Swim England curriculum.</p>
    </div>
    <div class="row">
      <div class="lesson">
        <div class="image">
          <img src="../assets/images/lessons/baby.png" />
        </div>
        <p class="heading">Baby & Parent Lessons</p>
        <p>From as early as six months, your little one can begin their wonderful introduction to water in our Baby & Parent classes. These sessions are a joyous bonding experience where babies explore the aquatic world under the gentle guidance of a parent.</p>
      </div>

      <div class="lesson">
        <div class="image" style="background-color:black">
          <!-- <img src="../assets/images/lessons/baby.png" /> -->
        </div>
        <p class="heading">Group Sessions</p>

        <p>
          <b>Learn & Play:</b> Our group sessions are perfect for young beginners, teens, and adults. Here, you'll progress through various skill levels while enjoying the camaraderie of fellow swimmers. Our certified instructors create an encouraging and fun environment for you to flourish.
        </p>
      </div>
      <div class="lesson">
        <div class="image">
          <img src="../assets/images/lessons/one-to-one.jpeg" />
        </div>
        <p class="heading">1:1 Private Lessons</p>
        <p>
          <b>Personalised Progress:</b> If you prefer a more tailored approach, our 1:1 private lessons are your ticket to a swimming transformation. Our experienced instructors work closely with you to address your unique goals and challenges, ensuring rapid improvement.
        </p>
      </div>
    </div>
    <div class="middle">
      <p class="heading">A Journey Through Excellence</p>

      <p>Our Swim England curriculum guarantees a structured and rewarding learning experience, ensuring you master essential water skills, build confidence, and become a safe, proficient swimmer.</p>

      <p class="heading">Join Us in the Pool</p>

      <p>No matter your age or experience level, M Swim invites you to dive in and explore the wonderful world of swimming. Our lessons cater to beginners taking their first strokes, experienced swimmers perfecting their technique, and everyone in between.</p>

      <p>Embark on your aquatic journey with M Swim and unlock the countless physical, mental, and emotional benefits that swimming offers.</p>
    </div>
  </div>
</template>

<style scoped>
p {
  margin: 0;
}
.lesson {
  width: 30%;
  margin: 20px;
  padding: 10px 20px 20px 20px;
  text-align: center;
  border-radius: 25px;
  background-color: white;
  box-shadow: rgba(0, 0, 0, 0.15) 1.95px 1.95px 2.6px;
}
.lesson .image {
  margin: 1em auto 0 auto;
  height: 150px;
  width: 150px;
  border-radius: 50%;
  overflow: hidden;
}
.image img {
  height: 100%;
}
.heading {
  font-size: 1.2em;
  font-weight: bolder;
  margin: 1em 0;
}
.row {
  padding: 10px 0 0 0;
}
.middle {
  text-align: center;
}
@media only screen and (max-width: 640px) {
  .row {
    align-items: center;
  }
  .lesson {
    width: 100%;
    margin-bottom: 30px;
  }
}
</style>