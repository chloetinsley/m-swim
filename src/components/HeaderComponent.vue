<script setup>
function toggleMenu() {
  var el = document.getElementById('navItems')
  el.classList.toggle('toggle')
  el.classList.remove('hidden')

  var ell = document.getElementById('menu')
  // console.log(ell)
  ell.classList.toggle('cross')
  ell.classList.toggle('burger')
}
import { onMounted } from 'vue'

onMounted(() => {
  setTimeout(function() {
    var el = document.getElementsByTagName('nav')[0]
    el.classList.remove('preload')
  }, 5000)
})
</script>

<template>
  <header>
    <!-- <div class="wrapper"> -->
    <nav class="header">
      <div class="top-content">
        <div class="logo-container">
          <RouterLink to="/">
            <img alt="Vue logo" class="logo" src="@/assets/images/logo.png" />
          </RouterLink>
        </div>
        <div @click="toggleMenu()" id="menu" class="burger menu"></div>
      </div>

      <div id="navItems" class="nav-links toggle hidden">
        <div class="nav-items">
          <RouterLink to="/about">About</RouterLink>
          <RouterLink to="/about">Lessons</RouterLink>
          <RouterLink to="/contact">Contact</RouterLink>
        </div>
      </div>
    </nav>
  </header>
  <!-- </div> -->
</template>

<style scoped>
.header {
  background-color: #050a30;
  /* display: flex;
  align-items: stretch; */
  flex-direction: row;
  /* height: 60px; */
  display: flex;
  align-items: stretch;
  justify-content: space-between;
  padding: 30px 50px;
}
.logo {
  max-height: 60px;
}
.logo-container {
  display: flex;
  /* align-self: flex-start; */

  align-self: center;
  flex: 1;
}

.nav-links {
  display: flex;
  align-self: center;
  vertical-align: middle;
  height: 100%;
  align-items: center;
  /* flex: 1; */
}
.nav-links a {
  margin-left: 35px;
  color: #fdfeff;
  text-decoration: none;
  font-size: 18px;
}
.burger {
  /* background-position: right; */
  background-image: url('../assets/images/burger-menu.png');
  /* background-repeat: no-repeat;
  background-size: 30px; */
}
.cross {
  /* background-position: right; */
  background-image: url('../assets/images/cross-menu2.png');
  background-size: 20px !important;
  /* background-repeat: no-repeat;
  background-size: 30px; */
}
.menu {
  /* background-image: url('../assets/images/burger-menu.png');*/
  background-position: center;
  margin-left: auto;
  background-repeat: no-repeat;
  background-size: 25px;
  padding: 30px;
  display: none;
}

@media only screen and (max-width: 640px) {
  /* .logo-container {
    width: 75%;
  } */
  header {
    max-height: 125px;
  }
  .header {
    flex-direction: column;
    padding: 0;
  }
  .nav-items {
    display: flex;
    flex-direction: column;

    /* background-size: cover; */
  }
  .top-content {
    padding: 30px 50px;
    position: relative;
    z-index: 2;
  }
  .hidden {
    display: none;
  }
  .nav-items {
    position: relative;
    /* z-index: 0; */
    /* bottom: 180px;  */
  }
  .nav-items a {
    position: relative;
    /* z-index: -1; */
  }

  .nav-links:not(.toggle) {
    /* bottom: 0px; */
    animation: fadein 0.5s linear;
  }
  .nav-links.toggle {
    /* bottom: 0px; */
    animation: fadeout 0.5s linear;
  }
  @keyframes fadein {
    from {
      transform: translateY(-230px);
    }
    to {
      transform: translateY(0%);
    }
  }
  @keyframes fadeout {
    from {
      transform: translateY(0%);
    }
    to {
      transform: translateY(-230px);
    }
  }
  .toggle {
    transform: translateY(-230px);
    /* display: none !important; */
  }
  .top-content {
    display: flex;
    align-items: stretch;
    justify-content: space-between;
    background-color: #050a30;
  }

  .nav-links {
    flex-direction: column;
    align-self: stretch;
    /* padding-top: 30px; */
    z-index: 1;
    position: relative;

    /* transition: 0.5s;
    transform: translateY(-100%); */
  }

  .nav-items {
    text-align: center;

    width: 100%;

    /* padding: 30px 40px 20px 40px; */
    background-color: #009fe3;
  }
  .burger,
  .cross {
    display: block;
  }
  .nav-links a:first-of-type {
    /* border-top: 0.5px solid #bbe3fa; */
  }
  .nav-links a {
    padding: 25px 0;
    margin: 0;

    border-bottom: 0.5px solid #bbe3fa;
  }
}
@media only screen and (max-width: 420px) {
  .logo {
    max-height: 50px;
  }
  .top-content {
    padding: 30px;
  }
  .nav-items {
    /* padding: 30px 40px 20px 40px; */
  }
}
</style>