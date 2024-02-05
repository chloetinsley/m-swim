<template>
  <footer>
    <div class="columns">
      <p>Our other brands</p>
      <div class="other-brands">
        <a href="https://adventureminivillage.co.uk/" target="_blank">
          <img
            src="../assets/images/footer-logos/other-brands/adventure-mini-village.png"
            alt="Adventure Mini Village Logo"
            loading="lazy"
          />
        </a>
        <a href="https://adventureminigolf.co.uk/" target="_blank">
          <img
            src="../assets/images/footer-logos/other-brands/adventure-mini-golf.png"
            alt="Adventure Mini Golf Logo"
            loading="lazy"
          />
        </a>
        <a href="https://mclubspaandfitness.co.uk/" target="_blank">
          <img
            src="../assets/images/footer-logos/other-brands/m-club.png"
            class="m-club"
            alt="M Club Logo"
            loading="lazy"
          />
        </a>
        <a href="https://nurture-childcare.co.uk/" target="_blank">
          <img
            src="../assets/images/footer-logos/other-brands/nurture.png"
            alt="Nurture Childcare Logo"
            loading="lazy"
          />
        </a>
        <a href="https://www.waterworld.co.uk/" target="_blank">
          <img
            src="../assets/images/footer-logos/other-brands/waterworld.png"
            alt="Waterworld Logo"
            loading="lazy"
          />
        </a>
      </div>
    </div>
    <div class="row footer-bottom">
      <div class="copyright">
        <p>
          © Copyright {{new Date().getFullYear()}} M Swim | Website by
          <a
            href="https://www.linkedin.com/in/chloe-tinsley-a62a56131"
            target="_blank"
          >Chloe Tinsley</a>
        </p>
      </div>

      <div class="partner">
        <img src="../assets/images/sta/sta-logo-two.png" alt="STA Logo" loading="lazy" />
        <p>M Swim is an official STA partner and an accredited STA Swim Academy.</p>
      </div>
    </div>
  </footer>
</template>

<style scoped>
.partner {
  display: flex;
  align-items: center;
  justify-content: center;
}
.partner img {
  height: 30px;
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
  align-items: center;
  justify-content: space-between;
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
.other-brands a img {
  height: 50px;
}
.other-brands a:not(:first-of-type) {
  padding-left: 20px;
}
img.m-club {
  height: 38px;
}
p {
  margin: 0;
}
.copyright a {
  font-weight: 800;
  /* border-bottom: dotted 0.2px #f4f6fc; */
  color: #ebf7fd;
  text-decoration: none;
}

@media only screen and (max-width: 864px) {
  .footer-bottom {
    display: flex;
    flex-direction: column-reverse;
    text-align: center;
  }
  .footer-bottom .partner {
    padding-bottom: 10px;
  }
  .copyright {
    padding-bottom: 10px;
  }
}
@media only screen and (max-width: 640px) {
  .other-brands a img {
    height: 45px;
  }
  img.m-club {
    height: 28px;
  }
  .partner {
    width: 80%;
    justify-content: center;
  }
  .footer-bottom .partner {
    padding-bottom: 15px;
  }
}
@media only screen and (max-width: 420px) {
  .other-brands a img {
    height: 28px;
  }
  img.m-club {
    height: 18px;
  }
  footer {
    padding: 0 5%;
  }
}
</style>