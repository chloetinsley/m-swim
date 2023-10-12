<script setup>
import { onMounted, watch } from 'vue'
import { useRoute } from 'vue-router'

function toggleMenu() {
  var navItems = document.getElementById('navItems')
  navItems.classList.toggle('toggle')
  navItems.classList.remove('hidden')

  toggleNavIcon()
}

onMounted(() => {
  setTimeout(function() {
    var el = document.getElementsByTagName('nav')[0]
    el.classList.remove('preload')
  }, 5000)
})

function navClick() {
  var navItems = document.getElementById('navItems')
  navItems.classList.add('hidden')
  navItems.classList.add('toggle')

  toggleNavIcon()
}

function toggleNavIcon() {
  var menu = document.getElementById('menu')
  menu.classList.toggle('cross')
  menu.classList.toggle('burger')
}
</script>

<template>
  <header>
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
          <RouterLink to="/about" @click="navClick()">About</RouterLink>
          <RouterLink to="/about" @click="navClick()">Lessons</RouterLink>
          <RouterLink to="/contact" @click="navClick()">Contact</RouterLink>
        </div>
      </div>
    </nav>
  </header>
</template>

<style scoped>
/* .router-link-active {
  text-decoration: underline !important;
} */
.header {
  background-color: #050a30;
  flex-direction: row;
  display: flex;
  align-items: stretch;
  justify-content: space-between;
  padding: 20px 50px;
}
.logo {
  max-height: 60px;
}
.logo-container {
  display: flex;
  align-self: center;
  flex: 1;
}
.nav-links {
  display: flex;
  align-self: center;
  vertical-align: middle;
  height: 100%;
  align-items: center;
}
.nav-links a {
  margin-left: 35px;
  color: #fdfeff;
  text-decoration: none;
  font-size: 18px;
}
.burger {
  background-image: url('../assets/images/burger-menu.png');
}
.cross {
  background-image: url('../assets/images/cross-menu2.png');
  background-size: 20px !important;
}
.menu {
  background-position: center;
  margin-left: auto;
  background-repeat: no-repeat;
  background-size: 25px;
  padding: 30px;
  display: none;
}

@media only screen and (max-width: 640px) {
  header {
    max-height: 105px;
  }
  .header {
    flex-direction: column;
    padding: 0;
    background-color: transparent;
  }
  .nav-items {
    display: flex;
    flex-direction: column;
  }
  .top-content {
    padding: 20px 50px;
    position: relative;
    z-index: 2;
  }
  .hidden {
    display: none;
  }
  .nav-items {
    position: relative;
  }
  .nav-items a {
    position: relative;
  }
  .nav-links:not(.toggle) {
    animation: fadein 0.5s linear;
  }
  .nav-links.toggle {
    animation: fadeout 0.5s linear;
  }
  @keyframes fadein {
    from {
      transform: translateY(-250px);
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
      transform: translateY(-250px);
    }
  }
  .toggle {
    transform: translateY(-250px);
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
    z-index: 1;
    position: relative;
  }
  .nav-items {
    text-align: center;
    width: 100%;
    background-color: #009fe3;
  }
  .burger,
  .cross {
    display: block;
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
}
</style>