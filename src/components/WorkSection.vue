<template>
       <div class="maindiv">
           
           <div class="container aos-init" data-aos="fade-up" data-aos-duration="3000" data-aos-once="true">
               <h2 class="text-center text-light my-5">Work</h2>
               <div class="row d-flex justify-content-center align-items-center">
                 
                   <div class="col-md-3 col-sm-12 column" v-for="item in items" :key="item.id" >
                           
                    <div class="special"   style="text-decoration:none;"  @mouseover ="hoverFunction(item)" @mouseleave="reappear(item)"> 
                        <a :href="item.link" target="_blank">

                         <img class="img1" :id="item.id"  :src="item.image" v-if="!item.hover" >
                    
                                <div v-else-if="item.hover"  class="text-class d-flex justify-content-center align-items-center hover">
                                 <div class="text-center">
                                     <p class="aos-init" data-aos="fade-down"  data-aos-easing="linear" data-aos-duration="500" data-aos-once="true">{{item.hoverTitle}}</p>
                                     <p class="aos-init" data-aos="fade-up" data-aos-duration="500" data-aos-once="true">{{item.hoverDetails}}</p>
                                 </div>
                                </div>
                        </a>
                      </div>
                   </div>
                   
               </div>
               </div>
           </div>
</template>
<script>
export default {
    
    data() {
        return{
            // hover:true,
            items:[{id:'1', image:'src/assets/mango.png', hoverTitle:'Mango', hoverDetails:'Web Application',hover:false, link:'https://mango.darvis.com/login'},
                  {id:'2', image:'src/assets/0xkittens.png', hoverTitle:'0xKittens', hoverDetails:'NFT Token',hover:false, link:'https://0xkittens.io/'},
                  {id:'3', image:'src/assets/handbag.png', hoverTitle:'The Handbag', hoverDetails:'of the Gods',hover:false, link:'https://thehandbagofthegods.com/'},
                  {id:'4', image:'src/assets/scoobi.png', hoverTitle:'Scoobi Space', hoverDetails:'NFT Token',hover:false,link:'https://scoobi.space/dashboard'},
                  {id:'5', image:'src/assets/bunnypunk.png', hoverTitle:'Bunny Punk NFT', hoverDetails:'Elastos Network',hover:false, link:'https://www.bunnypunk.io/'},
                  {id:'6', image:'src/assets/gsu-exchange.png', hoverTitle:'GSU Exchange', hoverDetails:'Crypto Exchange',hover:false,link:'https://demo.gsuexchange.com/'},
                  {id:'7', image:'src/assets/menehunes4.png', hoverTitle:'Menehunes - NFT', hoverDetails:'Polygon Network',hover:false,link:'https://menehunes.digital/'},
                  {id:'8', image:'src/assets/metahearts.png', hoverTitle:'MetaHearts - NFT', hoverDetails:'Ethereum Network',hover:false, link:'https://metahearts.global/'},
               ]
        }
    },
    methods:{
        hoverFunction(e){
            e.hover=true
   
         
        },
        reappear(e){
            e.hover= false
        }
       
    }
   
}
</script>
<style scoped>

.maindiv{
    background: rgb(255, 144, 0);
    margin: 130px 0px 130px 0px;
    padding: 0px 0px 100px 0px;

}
  .container{
    padding: 20px 0px 20px 0px;


  }
  .column{
      height: 300px;
      width: 300px;
      margin:0px 5px 5px 5px;
  }
  .img1{ 
      width: 100vw;
      height: 100vh;
        max-height: 300px;
        max-width: 300px;   
  }
  .hover{
      color: green;
      background-color: white;
      height: 300px;
      width: 300px;
  }
  a{
      text-decoration: none;
  }
   
</style>
