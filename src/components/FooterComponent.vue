<template>
  <footer>
    <div class="columns">
      <p>Our other brands</p>
      <div class="other-brands">
        <img
          src="../assets/images/footer-logos/other-brands/adventure-mini-village.png"
          alt="Adventure Mini Village Logo"
        />
        <img
          src="../assets/images/footer-logos/other-brands/adventure-mini-golf.png"
          alt="Adventure Mini Golf Logo"
        />
        <img
          src="../assets/images/footer-logos/other-brands/m-club.png"
          class="m-club"
          alt="M Club Logo"
        />
        <img src="../assets/images/footer-logos/other-brands/nurture.png" alt="Nurture Logo" />
        <img src="../assets/images/footer-logos/other-brands/waterworld.png" alt="Waterworld Logo" />
      </div>
    </div>
    <div class="partner">
      <img src="../assets/images/sta/sta-logo-two.png" alt="Adventure Mini Village Logo" />

      <p>M Swim is an official STA partner and an accredited STA Swim Academy.</p>
    </div>
    <div class="row">
      <div>
        <p>© Copyright {{new Date().getFullYear()}} M Swim | Website by Chloe Tinsley</p>
      </div>

      <div class="social">
        <img
          alt="Facebook logo"
          class="logo"
          src="@/assets/images/footer-logos/facebook.png"
          height="30"
        />
      </div>
    </div>
  </footer>
</template>

<style scoped>
.partner {
  display: flex;
  align-items: center;
  padding-top: 15px;
  justify-content: center;
}
.partner img {
  height: 40px;
  padding-right: 15px;
}
footer {
  background-color: #050a30;
  font-size: 14px;
  color: #fdfeff;
  padding: 0 5%;
}
footer > .row {
  display: flex;
  /* align-self: center; */
  align-items: center;
  /* flex-direction: column; */
  justify-content: space-between;
  /* align-items: stretch; */
  padding: 15px 0;
}
.columns {
  display: flex;
  flex-direction: column;
  padding: 20px 0;
  border-bottom: 0.5px solid #f4f6fc;
}
.columns p {
  align-self: center;
}
.other-brands {
  align-items: center;
  align-self: center;
  display: flex;
  padding: 10px 0;
}
.other-brands img {
  height: 50px;
}
.other-brands img:not(:first-of-type) {
  padding-left: 20px;
}
img.m-club {
  height: 38px;
}
p {
  margin: 0;
}
.social {
  display: flex;
}
@media only screen and (max-width: 640px) {
  .other-brands img {
    height: 45px;
  }
  img.m-club {
    height: 28px;
  }
  .partner {
    width: 80%;
    justify-content: center;
  }
}
@media only screen and (max-width: 420px) {
  .other-brands img {
    height: 28px;
  }
  img.m-club {
    height: 18px;
  }
  footer {
    padding: 0 7%;
  }
}
</style>