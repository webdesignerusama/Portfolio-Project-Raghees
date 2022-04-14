<template>
<h1 class="text-center head aos-init " data-aos="fade-up" data-aos-duration="500" data-aos-once="true">Testimonials</h1>
    <div class="container d-flex text-center ">
        <div class="row aos-init" data-aos="fade-up" data-aos-duration="500" data-aos-once="true">
  <div class="col-md-4 col-sm-12 column mb-2">
    <div class="card">
      <div class="card-body">
        <h5 class="card-text mb-4 text-start " style="color:rgba(0, 0, 0, 0.3)">Dec. 30th 2021</h5>
        <h5 class="card-title mb-4 text-start">maincom1</h5>
        <p class="card-text para text-start" >Fixed our problems that we had with our minting extremely fast while others took days at a time.</p>
        <hr class="text-center">
        <div class="d-flex justify-content-end align-items-center">
        <a href="https://www.fiverr.com/raghees?up_rollout=true" target="_blank"> <p class="d-inline-block read mt-3"> Read More &#8594;</p> </a>  
        </div>
      </div>
    </div>
  </div>
   <div class="col-md-4 col-sm-12 column mb-2">
    <div class="card">
      <div class="card-body">
        <h5 class="card-text mb-4 text-start " style="color:rgba(0, 0, 0, 0.3)">Dec. 15th 2021</h5>
        <h5 class="card-title mb-4 text-start">zubby_designs</h5>
        <p class="card-text para text-start" >raghees is exceptional. he understood my pains and took it to heart to find a solution in no time. Nice work done.</p>
        <hr class="text-center">
        <div class="d-flex justify-content-end align-items-center">
          <a href="https://www.fiverr.com/raghees?up_rollout=true" target="_blank">

          <p class="d-inline-block read mt-3"> Read More &#8594;</p>
          </a>
        </div>
      </div>
    </div>
  </div>
<div class="col-md-4 col-sm-12 column mb-2">
    <div class="card">
      <div class="card-body">
        <h5 class="card-text mb-4 text-start " style="color:rgba(0, 0, 0, 0.3)">Oct. 27th 2021</h5>
        <h5 class="card-title mb-4 text-start">jacquesdjean</h5>
        <p class="card-text para text-start" >Wow - Raghees is the man. He delivered this project way before schedule and he was easy to work with throughout the (very short but well developed) process. Good job Raghees, my team will be coming back for additional Web3 support.</p>
        <hr class="text-center">
        <div class="d-flex justify-content-end align-items-center">
          <a href="https://www.fiverr.com/raghees/integrate-web3-metamask-nfts-with-dapps" class="a" target="_blank">
          <p class="d-inline-block read mt-3"> Read More &#8594;</p>
          </a>
        </div>
      </div>
    </div>
  </div>
</div>
    </div>
</template>
<script>
export default {
  setup() {
    
  },
  methods:{
    hoverFunction(e){
      console.log(e.target)
    }
  }
}
</script>
<style scoped>
   a,
a:link,
a:visited,
a:hover,
a:active{
    text-decoration: none;
}
   .read{
     margin-bottom: 0px;
   }
   .para{
     font-size: 16px;
     font-weight: 400;
   }
   .card{
     box-shadow:  0px 2px 5px 0px rgb(0 0 0 / 6%);
     padding: 25px;

   }
   .head{
     margin-bottom: 6rem !important;
   }
@media (min-width: 1200px) {

.container {
  max-width: 1170px;
}
 }

</style>