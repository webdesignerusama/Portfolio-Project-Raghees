<template>
    <h1 class="resume aos-init" data-aos="fade-up" data-aos-duration="500" data-aos-once="true">My Resume</h1>
  <div class="main  ">
    <div class="container">

    <h5 class="text-center experience aos-init" data-aos="fade-up" data-aos-duration="500" data-aos-once="true">WORK EXPERIENCE</h5>
    </div>
    <div class="container">
      <div class="d-flex justify-content-start">
        <div class="leftside aos-init" data-aos="fade-up" data-aos-duration="500" data-aos-once="true">
          <h4>Senior VueJS Developer</h4>
          <span>Darvis - Nov 2020 - Current</span>
          <p>F11-Markaz, Islamabad, Pakistan.</p>
        </div>
      </div>
      <div class=" second">
        <div class="rightside aos-init" data-aos="fade-up" data-aos-duration="500" data-aos-once="true">
          <h4>Frontend Developer</h4>
          <span>Block360 - March 2018 - Sep 2020</span>
          <p>NSTP NUST H12, Islamabad, Pakistan.</p>
        </div>
      </div>
       <div class="mt-5 aos-init" data-aos="fade-up" data-aos-duration="500" data-aos-once="true">
           <h5 class="text-center experience ">Education</h5>
       </div>
       <div class="d-flex justify-content-start mt-2">
        <div class="leftside aos-init" data-aos="fade-up" data-aos-duration="500" data-aos-once="true">
          <h4>Bachelors Degree</h4>
          <span>BS(Software Engineering) - 2014 - 2018</span>
          <p>COMSATS University Islamabad.</p>
        </div>
      </div>
      <div class="vl"></div>
    </div>
  </div>
</template>
<style scoped>
*{
font-family: mySecondFont;
}
.main {
  text-align: center;
  padding-bottom:9rem ;
}
.resume {
  height: 120px;
  padding: 9rem 0;
  text-align: center;

}
.experience {
  padding: 7px 15px;
  font-size: 18px;
  text-transform: uppercase;
  letter-spacing: 5px;
  font-weight: bold;
  background: #e6e6e6;
  display: inline-block;
  border-radius:4px;
  
}
.container {
  position: relative;
}
.leftside {
  width: 50%;
  text-align: right;
  padding: 20px;
  margin: 0px 0px 0px -25px;
}
.rightside {
  width: 50%;
  text-align: left;
  float: right;
  padding: 20px;
  margin: 0px 0px 0px -25px;
}
.vl {
  border-left: 1px solid #e6e6e6;;
  height: 490px;
  position: absolute;
  left: 50%;
  margin-left: -3px;
  top: 0;
   z-index: -1;
}
.second{
  display: flex;
  justify-content: end;
}

 @media (max-width: 768px) {
   .main{
     text-align: start;
   }
   .vl{
       border-left: 1px solid #e6e6e6;;
  height: 590px;
  position: absolute;
  left: 10%;
  margin-left: -3px;
  top: 0;
   z-index: -1;
   }
   .second{
     display: flex;
     justify-content: start;
   }
   .rightside{
       width: 100%;
  text-align: center;
  padding: 20px;
  margin: 0px 0px 0px 20px;
   }
   .leftside{
     width: 100%;
     text-align: center;
  margin: 0px 0px 0px 20px;

   }
 }
</style>
