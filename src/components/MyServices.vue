<template>
  <div class="main d-flex justify-content-center align-items-center aos-init" data-aos="fade-up" data-aos-duration="500" data-aos-once="true">
    <div class="container my-5">
      <h1 class=" text-center service text-light">My Services</h1>
      <div class="row mb-5">
        <div class="col-md-4 col-sm-12">
          <div class="text-center">
            <div class="d-flex align-items-center justify-content-center">
              <div class="iconbackground d-flex align-items-center justify-content-center">
                <i class="fa-solid fa-brush fonts"></i>
              </div>
            </div>
            <div class="mt-5 text-light">
              <h3>Web Development</h3>
              <p>
                I worked with web framworks like VueJS, ReactJS, NextJS and
                Vanilla JavaScript.
              </p>
            </div>
          </div>
        </div>
       <div class="col-md-4 col-sm-12">
          <div class="text-center">
            <div class="d-flex align-items-center justify-content-center">
              <div class="iconbackground d-flex align-items-center justify-content-center">
                <i class="fa-solid fa-briefcase fonts"></i>
              </div>
            </div>
            <div class="mt-5 text-light">
              <h3>Dapp Development</h3>
              <p>
                I worked on Web3.js with wallets like MetaMask, WalletConnect, Coinbase etc.
              </p>
            </div>
          </div>
        </div>
           <div class="col-md-4 col-sm-12">
          <div class="text-center">
            <div class="d-flex align-items-center justify-content-center">
              <div class="iconbackground d-flex align-items-center justify-content-center">
               <i class="fa-solid fa-magnifying-glass fonts"></i>
              </div>
            </div>
            <div class="mt-5 text-light">
              <h3>Contract Integration</h3>
              <p>
                Integrate different Smart Contracts like Crowdsale, Pre-sale and Token Contacts.
              </p>
            </div>
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

.main {
  background-color: #ff9000;
}
.service{
  margin: 40px 0px 60px 0px;
}

.iconbackground {
  background-color: white;
  height: 80px;
  width: 80px;
  border-radius: 50%;
}
.fonts {
  font-size: 50px;
  color: #ff9000;
}
p{
  padding: 0px 25px;
}
</style>
