<template>
  <div class="header">
    <div id="img"></div>
    <div class="orange">
      <div class="container d-flex">
        <div class="text-center bg  aos-init"   data-aos="zoom-in" data-aos-duration="500" data-aos-once="true">
          <img src="../assets/RagheesRiaz.png" class="mb-5" alt="logoimg" />
          <h2 class="name" style="">-Raghees Riaz-</h2>
          <p class="details text-light">Sr. Frontend / Dapp Developer</p>
          <div class="d-flex" style="justify-content: center">
            <a href="https://www.linkedin.com/in/raghees-riaz/" target="_blank" class="mx-3">
              <i class="fa-brands fa-linkedin-in"></i>
            </a>
            <a href="https://github.com/rraghees" target="_blank" class="mx-3">
              <i class="fa-brands fa-github-alt"></i>
            </a>
            <a href="https://www.facebook.com/rags.butt.22/" target="_blank" class="mx-3">
              <i class="fa-brands fa-facebook-square"></i
            ></a>
            <a href="https://www.instagram.com/rraghees/?hl=en" target="_blank" class="mx-3"> <i class="fa-brands fa-instagram"></i></a>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  setup() {},
};
</script>
<style scoped>
@font-face {
   font-family: myFirstFont;
   src: url(../assets/KaushanScript-Regular.ttf);
}
@font-face {
   font-family: mySecondFont;
   src: url(../assets/SpaceMono-Regular.ttf);
}
.header {
  position: relative;
  overflow-x: hidden;
  width: 100%;
  height: 100%;
  text-decoration: none;
}
.orange {
  background-color: rgba(255, 144, 0, 0.9);
  height: 100%;
  width: 100%;
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
}

#img {
  background-image: url("../assets/background1.jpg");
  background-size: cover;
  height: 100vh;
}
.container {
  height: 625px;
  justify-content: center;
  align-items: center;
}

img {
  height: 200px;
  width: 200px;
  border-radius: 50%;
}
.name {
  font-family: myFirstFont;
  font-weight: 300;
  font-size: 47px;
  color: white;
  padding: 6px 7px;
  transform: rotate(-5deg);
}
.details {
  font-family: mySecondFont;
  text-decoration: none;
  padding: 10px;
}
.fa-brands {
  color: white;
  font-size: 25px;
}
</style>
