<template>
  <div class="bubble-background light-blue">
    <RouterLink to="/contact">
      <button>Ready to Enquire?</button>
    </RouterLink>
  </div>
</template>

<style scoped>
.bubble-background {
  background-image: url('../assets/images/bubble-background8.png');
  background-position: top right;
  background-size: cover;
  height: 170px;
  padding: 20px;
  background-size: 250px;
  display: flex;
  align-items: center;
  justify-content: center;
}
.bubble-background button {
  color: white;
  font-size: 1em;
  padding: 13px 28px;
  border-radius: 25px;
  background: none;
  background-color: #009fe3;
  box-shadow: rgba(0, 0, 0, 0.15) 1.95px 1.95px 2.6px;
  border: none;
}
.bubble-background button:hover {
  cursor: pointer;
  box-shadow: rgba(0, 0, 0, 0.3) 1.95px 1.95px 2.6px;
  transform: scale(1.02);
}
</style> 