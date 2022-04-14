<template>
    <div id="main">
     <header-section></header-section>
     <extra-extra></extra-extra>
     <resume-section></resume-section>
     <my-services></my-services>
     <skills-clone></skills-clone>
     <work-section></work-section>
     <testi-monials></testi-monials>
     <hire-me></hire-me>
    </div>
</template>
<script>
import HeaderSection from './components/HeaderSection.vue'
import ResumeSection from './components/ResumeSection.vue'
import MyServices from './components/MyServices.vue'
import SkillsClone from './components/SkillsClone.vue'
import WorkSection from './components/WorkSection.vue'
import Testimonials from './components/Testimonials.vue'
import HireMe from './components/HIreMe.vue'
export default {
  components:{'header-section': HeaderSection ,
              'resume-section': ResumeSection,
              'my-services': MyServices,
            'skills-clone':SkillsClone,
              'work-section':WorkSection,
              'testi-monials':Testimonials,
              'hire-me': HireMe
     },
  data() {
    return{

    }
  },
}
</script>
<style>
#main{
  overflow-x: hidden;
}
@font-face {
   font-family: myFirstFont;
   src: url(sansation_light.woff);
}
*{
font-family: mySecondFont;
text-decoration: none;
}
/* * {
   font-family: myFirstFont;
} */
</style>
