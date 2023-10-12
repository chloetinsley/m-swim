<template>
  <footer class="footer">
    <div>
      <p>© Copyright {{new Date().getFullYear()}} M Swim</p>
    </div>
    <div style>
      <img alt="Vue logo" class="logo" src="@/assets/images/footer-logos/facebook.png" height="30" />
    </div>
    <div>
      <p>Website by Chloe Tinsley</p>
    </div>
  </footer>
</template>

<style scoped>
footer {
  background-color: #050a30;
  font-size: 14px;
  padding: 20px 60px;
  color: #fdfeff;
  justify-content: space-between;
  display: flex;
  align-items: stretch;
}
footer > div {
  display: flex;
  align-self: center;
}
p {
  margin: 0;
}
</style>