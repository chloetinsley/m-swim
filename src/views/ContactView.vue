<script setup>
import emailjs from '@emailjs/browser'

function success() {
  var btn = document.getElementById('submitButton')
  btn.text = ''
  btn.classList.toggle('button--loading')
  btn.setAttribute('disabled', true)

  var btnText = document.getElementById('btnText')
  btnText.classList.toggle('no-opacity')

  emailjs.sendForm('service_7yhj3ze', 'template_aiz3h17', '#form', 'Fj3QBZRfI9mIIVnJ2').then(
    result => {
      var contact = document.getElementById('contactForm')
      contact.classList.toggle('hidden')

      var spinner = document.getElementById('confirmationContainer')
      spinner.classList.toggle('hidden')
      console.log('SUCCESS!', result.text)
    },
    error => {
      console.log('FAILED...', error.text)
    }
  )
}
</script>
<template>
  <div class="wrapper light-blue">
    <h1 class="page-heading">Contact</h1>
    <div class="row contact">
      <div class="box right-background">
        <div class>
          <div class="contact-conent">
            <p>or send us an email</p>
            <a href="mailto:mswim@mclubspaandfitness.com">mswim@mclubspaandfitness.com</a>
          </div>
        </div>
      </div>
      <div class="box">
        <div class="contact-form">
          <form id="form" @submit.prevent="success">
            <div id="contactForm">
              <h2>How can we help you?</h2>
              <p>We aim to get back to you within 48 working hours</p>
              <div class="float-label-content">
                <input
                  id="customer_name"
                  class="float-input"
                  type="text"
                  name="customer_name"
                  placeholder=" "
                  required
                />
                <label for="customer_name" class="float-label">
                  Name
                  <span class="required">*</span>
                </label>
              </div>

              <div class="float-label-content">
                <input
                  id="customer_email"
                  class="float-input"
                  type="email"
                  name="customer_email"
                  placeholder=" "
                  required
                />
                <label for="customer_email" class="float-label">
                  Email
                  <span class="required">*</span>
                </label>
              </div>

              <div class="float-label-content">
                <input
                  id="customer_phone_number"
                  class="float-input"
                  type="number"
                  name="customer_phone_number"
                  placeholder=" "
                  required
                />
                <label for="customer_phone_number" class="float-label">
                  Phone Number
                  <span class="required">*</span>
                </label>
              </div>

              <div class="float-label-content">
                <input
                  id="customer_age_of_swimmer"
                  class="float-input"
                  type="number"
                  name="customer_age_of_swimmer"
                  placeholder=" "
                />
                <label for="customer_age_of_swimmer" class="float-label">Age Of Swimmer</label>
              </div>

              <div class="float-label-content">
                <textarea id="message" class="float-input" name="message" placeholder=" "></textarea>
                <label for="message" class="float-label">Query</label>
              </div>

              <div class="button-container">
                <button type="submit" class="submit" id="submitButton">
                  <span id="btnText">Submit</span>
                </button>
              </div>
            </div>
          </form>

          <div id="confirmationContainer" class="confirmation hidden">
            <svg class="checkmark" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 52 52">
              <circle class="checkmark__circle" cx="26" cy="26" r="25" fill="none" />
              <path class="checkmark__check" fill="none" d="M14.1 27.2l7.1 7.2 16.7-16.8" />
            </svg>
            <h3>Thank you!</h3>
            <p>Your message has been recieved and we will be in touch as soon as possible.</p>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<style  >
@import '../assets/css/input/float-label.css';
.box {
  text-align: center;
  margin: 20px;
  width: 100%;
}
.right-background {
  display: flex;
  align-items: center;
  justify-content: center;
  background-image: url('../assets/images/learn-to-swim.jpeg');
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
  border-radius: 20px;
  height: 420px;
  align-self: center;
  box-shadow: rgba(0, 0, 0, 0.18) 0px 2px 4px;
  margin: 0 50px 0 0;
  font-size: 1.8em;
  text-shadow: 0px 1px 4px #050a30;
  color: white;
}
.right-background a {
  color: white;
}
.contact-form {
  background-color: white;
  box-shadow: rgba(0, 0, 0, 0.18) 0px 2px 4px;
  border-radius: 25px;
  padding: 25px;
}

@media only screen and (max-width: 864px) {
  .row.contact {
    flex-direction: column-reverse;
    align-items: center;
    padding: 0;
  }
  .right-background {
    margin: 20px;
  }
}

@media only screen and (max-width: 640px) {
  .right-background {
    height: 300px;
    font-size: 1.2em;
  }
}

.contact-form h2 {
  margin: 0;
}
.no-opacity {
  opacity: 0;
}
.input-item {
  width: 100%;
}
input {
  width: 100%;
  padding: 10px 0;
  margin: 5px 0;
}
.required {
  color: #e34234;
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
  background-color: #006997;
  padding: 6px 15px;
  color: #ebebe9;
  border-radius: 3px;
  font-size: 16px;
  cursor: pointer;
  position: relative;
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
}
.input-group-text {
  display: flex;
  align-items: center;
  font-weight: 400;
  height: 34px;
  padding: 0 5px 0 20px;
  font-size: 12px;
  text-align: center;
  white-space: nowrap;
  border: 1px solid #045174;
  border-radius: 4px 0 0 4px;
  border-right: none;
}
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
  stroke-dasharray: 216;
  stroke-dashoffset: 216;
  stroke-width: 2;
  stroke-miterlimit: 10;
  stroke: #7ac142;
  fill: none;
  animation: stroke 0.6s cubic-bezier(0.65, 0, 0.45, 1) forwards;
}

.checkmark {
  width: 40px;
  height: 40px;
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






