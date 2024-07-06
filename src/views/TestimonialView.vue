<template>
    <body class="testimonial-page-body">
        <main class="testimonial-page-main">
            <div class="testimonial-container">
                <h1 class="testimonial-text">
                Testimonials
            </h1>
    <div id="carouselExampleIndicators" class="carousel slide" v-if="testimonials?.length">
        <div id="indicator-test" class="carousel-indicators bg-black">
          <button type="button" data-bs-target="#carouselExampleIndicators" :data-bs-slide-to="index" :class="{active: testID.id == 1}" aria-current="true" :aria-label="`Slide ${testID.id}`" v-for="(testID, index) in testimonials" :key="testID.id"></button>
        </div>
        <div class="carousel-inner">
          <div class="carousel-item" :class="{active: test.id ==1}" v-for="test in testimonials" :key="test.id">
            
            <div class="w-50 mx-auto carousel-info">
                    <img class="testimonial-image" :src="test.image">
                <p class="lead slide-text">{{ test.message }}</p>
                <div></div>
                <h3 class="testimonial-name">~~{{test.name}}</h3>
                <div></div>
                <h5 class="testimonial-position">{{test.position}}</h5>
            </div>
            
          </div>
        </div>
        <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="prev">
          <span id="carousel-control-prev" class="carousel-control-prev-icon bg-black" aria-hidden="true"></span>
          <span class="visually-hidden">Previous</span>
        </button>
        <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="next">
          <span id="carousel-control-next" class="carousel-control-next-icon bg-black" aria-hidden="true"></span>
          <span class="visually-hidden">Next</span>
        </button>
      </div>
      <SpinnerComp v-else/>
    </div>
    </main>
    </body>
    <FooterComp/>
</template>
<script>
import SpinnerComp from '@/components/SpinnerComp.vue'
import FooterComp from '@/components/FooterComp.vue'
export default {
    components:{
        SpinnerComp,
        FooterComp
    },
    computed : {
        testimonials(){
            return this.$store.state.testimonials
        }
        
    },
    mounted(){
        this.$store.dispatch('fetchTestimonials')
    }
    
}
</script>
<style scoped>
.testimonial-page-body {
    /* overflow: hidden; */
    max-height: 120vh;
    font-family: Bitter;
    background-image: url("https://chlowus.github.io/Images---Bootstrap-Project/Green%20Squiggle.png");
    background-repeat: no-repeat;
    background-size: cover;
    background-position: fixed;
    height: 120vh;
    background-attachment: fixed;
    margin-top: -12vh;
}

.testimonial-page-main{
    height: 120vh;
}

.testimonial-container {
    display: grid;
    grid-template-columns: 1fr;
}

.carousel-info{
    display: grid;
    grid-template-columns: 1fr 1fr;
    
}

.testimonial-image {
    height: 45vh;
    width: 23vw;
    border-radius: 50%;
    object-fit: cover;
    margin-top: 6.5vh;
    margin-left: -13vw;
}

.testimonial-text {
    z-index: 1;
    font-family: Bitter;
    font-weight: 600;
    font-size: 60px;
    color: #0F1B61;
    text-align: center;
    margin-top: 20vh;
}

#carouselExampleIndicators {
    height: 450px;
    width: 950px;
    margin-left: auto;
    margin-right: auto;
    margin-top: 30px;
    border-radius: 40px;
}
.carousel {
    height: 450px;
    width: 950px;
}

.carousel-inner{
    margin-top: -23vh;
}

.slide-text {
    font-family: bitter;
    color: black;
    height: 150px;
    width: 450px;
    margin-top: 13vh;
    margin-left: 3vw;
    font-size: 17px;
    text-align: center;
    font-weight: 500;
}

.quotation-mark1 {
    font-family: mansalva;
    font-size: 50px;
    color: #5269BD;
    margin-left: -390px;
    margin-top: -60px;
}

.quotation-mark2 {
    font-family: mansalva;
    font-size: 50px;
    color: #5269BD;
    margin-right: -390px;
}

.testimonial-name{
    margin-top: -8vh;
    margin-left: 3vw;
    font-size: 40px;
    font-family: mansalva;
    color: #5269BD;
}

.testimonial-position{
    margin-top: 1vh;
    margin-left: 3vw;
    font-size: 17px;
    font-family: Bitter;
    color: #5269BD;
}

.marcus-name {
    margin-top: 50px !important;
}

.carousel-item{
    height: 450px;
    width: 950px;
    background-color: #9bdabecf;
    border-radius: 40px;
    margin-top: 26vh;
}

.image-display {
    display: flex;
}

.carousel-image{
    height: 290px;
    width: 290px;
    margin-top: 90px;
    margin-left: 50px;
    object-fit: cover;
    border-radius: 100%;
}

/* .d-block{
    height: 290px;
    width: 850px;
    border-radius: 100%;
    object-fit: cover;
} */

.carousel-indicators {
    margin-left: auto;
    margin-right: auto;
    width: 80px;
    height: 20px;
    margin-bottom: -8vh;
}

#indicator-test {
    background-color: #5269BD !important;
}


#carousel-control-prev {
    width: 2vw;
    height: 20vh;
    margin-top: 7vh;
    margin-left: -7vw;
    background-color: #5269BD !important;
}

.carousel-control-next-icon {
    width: 2vw;
    height: 20vh;
    margin-top: 7vh;
    margin-left: 7vw;
    background-color: #5269BD !important;
}

.dynamic-footer {
    height: 80px;
    background-color: #5269bddb;
    text-align: center;
    position: relative;
    bottom: 0;
}

@media (max-width: 300px) {
.carousel-info{
    display: grid;
    grid-template-columns: 1fr 1fr;
    
}

.testimonial-image {
    height: 33vh;
    width: 58vw;
    border-radius: 50%;
    object-fit: cover;
}
}
</style>