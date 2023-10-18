<script setup>
function success() {
  var contact = document.getElementById('contactForm')
  contact.classList.toggle('hidden')

  var spinner = document.getElementById('confirmationContainer')
  spinner.classList.toggle('hidden')
  console.log('SUCCESS!', result.text)
}
</script>
<template>
  <div class="wrapper light-blue">
    <h1 class="page-heading">Contact</h1>
    <div class="row">
      <div class="box bubble-background">
        <div class>
          <div class="contact-conent">
            <a href="mailto:mswim@waterworld.co.uk">mswim@waterworld.co.uk</a>
            <p>Follow us on our socials</p>
            <img
              alt="Vue logo"
              style="background-color:#050a30; border-radius:100%;"
              class
              src="@/assets/images/footer-logos/facebook.png"
              height="40"
            />
          </div>
        </div>
        <!-- <img alt="Vue logo" class="logo" src="@/assets/images/bubble-background6.png" height="400" /> -->
      </div>
      <div class="box">
        <div class="contact-form">
          <div id="contactForm">
            <h2>How can we help you?</h2>
            <p>We aim to get back to you within 48 working hours</p>
            <div class="float-label-content">
              <input class="float-input" type="text" name="customer_name" placeholder=" " />
              <label class="float-label">Name</label>
            </div>

            <div class="float-label-content">
              <input class="float-input" type="email" name="customer_email" placeholder=" " />
              <label class="float-label">Email</label>
            </div>

            <div class="float-label-content">
              <input class="float-input" type="number" name="customer_phone_number" placeholder=" " />
              <label class="float-label">Phone Number</label>
            </div>

            <div class="float-label-content">
              <input
                class="float-input"
                type="number"
                name="customer_age_of_swimmer"
                placeholder=" "
              />
              <label class="float-label">Age Of Swimmer</label>
            </div>

            <div class="float-label-content">
              <textarea class="float-input" name="message" placeholder=" "></textarea>
              <!-- <input class="float-input" type="text" placeholder=" " /> -->
              <label class="float-label">Query</label>
            </div>

            <!-- <div class="input-item">
        <input
          name="customer_name"
          type="text"
          v-model.lazy.trim="name"
          v-on:keyup.enter="test"
          placeholder="name"
        />
      </div>
      <div class="input-item">
        <input name="customer_email" type="email" v-model.lazy.trim="email" placeholder="email" />
      </div>
      <div class="input-item">
        <input
          name="customer_phone_number"
          type="number"
          v-model.lazy.number="number"
          placeholder="number"
        />
      </div>
      <div class="input-item">
        <textarea name="message" v-model.lazy.trim="query" placeholder="query"></textarea>
            </div>-->
            <div class="button-container">
              <button type="submit" class="submit" id="submitButton" @click="success()">
                <span id="btnText">Submit</span>
              </button>
            </div>
          </div>

          <div id="confirmationContainer" class="confirmation hidden">
            <svg class="checkmark" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 52 52">
              <circle class="checkmark__circle" cx="26" cy="26" r="25" fill="none" />
              <path class="checkmark__check" fill="none" d="M14.1 27.2l7.1 7.2 16.7-16.8" />
            </svg>
            <h3>Thank you!</h3>
            <p>Your message has been recieved and we will be in touch as soon as possible.</p>

            <!-- <div id="circleLoader" class="circle-loader">
          <div id="checkmark" class="checkmark draw hidden"></div>
            </div>-->
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<style  >
@import '../assets/css/input/float-label.css';

.wrapper {
  /* background-color: #ebf7fd; */
}
.box {
  /* height: 100px; */
  text-align: center;
  /* border: 1px solid black; */
  /* padding: 20px; */
  margin: 20px;
  width: 100%;
}
.bubble-background {
  background-image: url('../assets/images/bubble-background8.png');
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
  height: 350px;
  padding: 20px;
  background-size: 350px;
  opacity: 0.75;
}
.contact-form {
  /* width: 100%;
  height: 100%; */
  background-color: white;
  /* box-shadow: rgba(0, 0, 0, 0.18) 0px 2px 4px; */
  box-shadow: rgba(0, 0, 0, 0.18) 0px 2px 4px;
  border-radius: 25px;
  padding: 25px;
}

@media only screen and (max-width: 640px) {
  .row {
    flex-direction: column-reverse;
    align-items: center;
  }
}

/* new stuff
 */

h2 {
  margin: 0;
}
.no-opacity {
  opacity: 0;
}
.contact {
  /* border: 1px solid red; */
  /* width: 100%; */
  padding: 0 30px 30px 30px;
}
.input-item {
  width: 100%;
}
input {
  width: 100%;

  padding: 10px 0;
  margin: 5px 0;
}

textarea {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  padding-top: 10px !important;
  height: 100px !important;
}
.button-container {
  display: flex;
  justify-content: flex-end;
}
.submit {
  border: none;
  /* orange (to bright imo) */
  /* background-color: #e87a0c; */
  /* mint  */
  /* background-color: #3a6963;*/
  /* diff orange */
  background-color: #006997;
  padding: 6px 15px;
  color: #ebebe9;
  border-radius: 3px;
  font-size: 16px;
  cursor: pointer;
  position: relative;
  /* display: flex;

  align-self: right; */
  /* float: right; */
}

.input-group {
  display: flex;
}

.input-group .float-input {
  border-radius: 0 4px 4px 0;
  border-left: 0;
  padding-left: 0;
}
.input-group-append {
  display: flex;
  align-items: center;
  /*   margin-left:-1px; */
}
.input-group-text {
  display: flex;
  align-items: center;
  font-weight: 400;
  height: 34px;
  /* color: #323840; */
  padding: 0 5px 0 20px;
  font-size: 12px;
  text-align: center;
  white-space: nowrap;
  border: 1px solid #045174;
  border-radius: 4px 0 0 4px;
  border-right: none;
}
/* button */
.button--loading::before {
  content: '';
  position: absolute;
  width: 14px;
  height: 14px;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  margin: auto;
  border: 3px solid transparent;
  border-top-color: #ebebe9;
  border-radius: 50%;
  animation: button-loading-spinner 1s ease infinite;
}
@keyframes button-loading-spinner {
  from {
    transform: rotate(0turn);
  }

  to {
    transform: rotate(1turn);
  }
}
/* button */
.confirmation {
  text-align: center;
}

.circle-loader {
  margin-bottom: 3.5em;
  border: 1px solid rgba(0, 0, 0, 0.2);
  border-left-color: #5cb85c;
  animation: loader-spin 1.2s infinite linear;
  position: relative;
  display: inline-block;
  vertical-align: top;
  border-radius: 50%;
  width: 7em;
  height: 7em;
}
.load-complete {
  -webkit-animation: none;
  animation: none;
  border-color: #5cb85c;
  transition: border 500ms ease-out;
}
.hidden {
  display: none;
}
.checkmark.draw:after {
  animation-duration: 800ms;
  animation-timing-function: ease;
  animation-name: checkmark;
  transform: scaleX(-1) rotate(135deg);
}
.checkmark:after {
  opacity: 1;
  height: 3.5em;
  width: 1.75em;
  transform-origin: left top;
  border-right: 3px solid #5cb85c;
  border-top: 3px solid #5cb85c;
  content: '';
  left: 1.75em;
  top: 3.5em;
  position: absolute;
}
@keyframes loader-spin {
  0% {
    transform: rotate(0deg);
  }
  100% {
    transform: rotate(360deg);
  }
}
@keyframes checkmark {
  0% {
    height: 0;
    width: 0;
    opacity: 1;
  }
  20% {
    height: 0;
    width: 1.75em;
    opacity: 1;
  }
  40% {
    height: 3.5em;
    width: 1.75em;
    opacity: 1;
  }
  100% {
    height: 3.5em;
    width: 1.75em;
    opacity: 1;
  }
}

/* new stuff
 */

.checkmark__circle {
  stroke-dasharray: 216; /* ORIGINALLY 166px */
  stroke-dashoffset: 216; /* ORIGINALLY 166px */
  stroke-width: 2;
  stroke-miterlimit: 10;
  stroke: #7ac142;
  fill: none;
  animation: stroke 0.6s cubic-bezier(0.65, 0, 0.45, 1) forwards;
}

.checkmark {
  width: 40px; /* ORIGINALLY 56px */
  height: 40px; /* ORIGINALLY 56px */
  border-radius: 50%;
  display: block;
  stroke-width: 2;
  stroke: #7ac142;
  stroke-miterlimit: 10;
  margin: 10px auto;
  margin-top: 30px;
  box-shadow: inset 0px 0px 0px #7ac142;
  animation: fill 0.4s ease-in-out 0.4s forwards, scale 0.3s ease-in-out 0.9s both;
}

.checkmark__check {
  transform-origin: 50% 50%;
  stroke-dasharray: 98; /* ORIGINALLY 48px */
  stroke-dashoffset: 98; /* ORIGINALLY 48px*/
  animation: stroke 0.3s cubic-bezier(0.65, 0, 0.45, 1) 0.8s forwards;
}

@keyframes stroke {
  100% {
    stroke-dashoffset: 0;
  }
}
@keyframes scale {
  0%,
  100% {
    transform: none;
  }
  50% {
    transform: scale3d(1.1, 1.1, 1);
  }
}
@keyframes fill {
  100% {
    /* box-shadow: inset 0px 0px 0px 80px #7ac142; */
  }
}
</style>






