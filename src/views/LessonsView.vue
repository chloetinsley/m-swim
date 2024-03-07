<script setup>
import ReadyToEnquireComponent from '../components/ReadyToEnquireComponent.vue'
</script>

<template>
  <div>
    <div class="wrapper light-blue">
      <h1 class="page-heading">Our Swimming Lessons</h1>
      <div class="row">
        <p>Discover the Art of Swimming with M Swim. Our lessons are designed to be an exciting journey through water, guided by the renowned STA Swim Academy curriculum.</p>
      </div>
      <div class="row">
        <div class="lesson">
          <div class="image">
            <img src="../assets/images/lessons/baby.jpg" alt="Baby swimming lesson" />
          </div>
          <p class="heading">Baby & Parent Lessons</p>
          <p>From newborn, your little one can begin their wonderful introduction to water in our Baby & Parent classes. These sessions are a joyous bonding experience where babies explore the aquatic world under the gentle guidance of a parent.</p>
        </div>

        <div class="lesson">
          <div class="image">
            <img src="../assets/images/lessons/group.jpeg" alt="Group swimming lesson" />
          </div>
          <p class="heading">Group Sessions</p>
          <p>Perfect for young beginners, teens, and adults. You'll progress through various skill levels while enjoying the camaraderie of fellow swimmers. Our certified instructors create an encouraging and fun environment for you to flourish.</p>
        </div>
        <div class="lesson">
          <div class="image">
            <img src="../assets/images/lessons/one-to-one.jpg" alt="Private swimming lesson" />
          </div>
          <p class="heading">1:1 Private Lessons</p>
          <p>If you prefer a more tailored approach, our 1:1 private lessons are your ticket to a swimming transformation. Our experienced instructors work closely with you to address your unique goals and challenges, ensuring rapid improvement.</p>
        </div>

        <div class="lesson">
          <div class="image">
            <img src="../assets/images/lessons/school.jpg" alt="School swimming lessons" />
          </div>
          <p class="heading">School Lessons</p>
          <p>If your school is looking for a venue to teach swimming then look no further. M Swim offers packages catering for individual needs, including pool hire only and pool hire with Swim Instructors.</p>
        </div>
      </div>
      <div class="middle">
        <p class="heading">A Journey Through Excellence</p>

        <p>Our STA Swim Academy curriculum guarantees a structured and rewarding learning experience, ensuring you master essential water skills, build confidence, and become a safe, proficient swimmer.</p>

        <p class="heading">Join Us in the Pool</p>

        <p>No matter your age or experience level, M Swim invites you to dive in and explore the wonderful world of swimming. Our lessons cater to beginners taking their first strokes, experienced swimmers perfecting their technique, and everyone in between.</p>

        <p>Embark on your aquatic journey with M Swim and unlock the countless physical, mental, and emotional benefits that swimming offers.</p>
      </div>

      <div class="sta-logo">
        <img src="../assets/images/sta/sta-logo.png" alt="STA logo" />
      </div>
    </div>
    <ReadyToEnquireComponent />
  </div>
</template>

<style scoped>
p {
  margin: 0;
}
.lesson {
  width: 30%;
  margin: 15px;
  padding: 10px 20px 20px 20px;
  text-align: center;
  border-radius: 25px;
  background-color: white;
  box-shadow: rgba(0, 0, 0, 0.15) 1.95px 1.95px 2.6px;
}
@media only screen and (min-width: 864px) {
  .lesson:first-of-type {
    margin-left: 5px;
  }
  .lesson:last-of-type {
    margin-right: 5px;
  }
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
.wrapper {
  padding: 30px 8% 70px 8%;
}
.sta-logo {
  display: flex;
  justify-content: center;
  padding: 40px 0 0 0;
}
.sta-logo img {
  height: 120px;
  padding: 0 30px;
  mix-blend-mode: multiply;
}
@media only screen and (max-width: 864px) {
  .row {
    flex-direction: column;
    align-items: center;
  }
  .lesson {
    width: 85%;
    margin-bottom: 30px;
  }
}
</style>