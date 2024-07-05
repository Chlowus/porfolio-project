<template>
    <div id="carouselExampleIndicators" class="carousel slide" v-if="testimonials?.length">
        <div class="carousel-indicators">
          <button type="button" data-bs-target="#carouselExampleIndicators" :data-bs-slide-to="index" :class="{active: testID.id == 1}" aria-current="true" :aria-label="`Slide ${testID.id}`" v-for="(testID, index) in testimonials" :key="testID.id"></button>
        </div>
        <div class="carousel-inner">
          <div class="carousel-item" :class="{active: test.id ==1}" v-for="test in testimonials" :key="test.id">
            
            <div class="w-50 mx-auto carousel-info">
                    <img class="testimonial-image" :src="test.image">
                <h3>{{test.name}}</h3>
                <h5>{{test.position}}</h5>
                <p class="lead">{{ test.message }}</p>
            </div>
            
          </div>
        </div>
        <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="prev">
          <span class="carousel-control-prev-icon bg-black" aria-hidden="true"></span>
          <span class="visually-hidden">Previous</span>
        </button>
        <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="next">
          <span class="carousel-control-next-icon bg-black" aria-hidden="true"></span>
          <span class="visually-hidden">Next</span>
        </button>
      </div>
      <SpinnerComp v-else/>
</template>
<script>
import SpinnerComp from '@/components/SpinnerComp.vue'

export default {
    components:{SpinnerComp},
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
    max-height: 100vh;
    font-family: Bitter;
}

.testimonial-page-body {
    background-image: url("https://chlowus.github.io/Images---Bootstrap-Project/Green%20Squiggle.png");
    background-repeat: no-repeat;
    background-size: cover;
    background-position: fixed;
    height: 100vh;
    background-attachment: fixed;
}

.testimonial-page-main{
    height: 100vh;
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
    height: 33vh;
    width: 58vw;
    border-radius: 50%;
    object-fit: cover;
}

.testimonial-text {
    z-index: 1;
    font-family: Bitter;
    font-weight: 600;
    font-size: 60px;
    color: #0F1B61;
    text-align: center;
    padding: 7px;
    padding-top: 50px;
    margin-left: 35px;
    height: 80px;
    width: 250px;
}

#carouselExampleIndicators {
    height: 450px;
    width: 950px;
    margin-left: auto;
    margin-right: auto;
    margin-top: 90px;
    border-radius: 40px;
}
.carousel {
    height: 450px;
    width: 950px;
}


.slide-text {
    font-family: bitter;
    color: black;
    height: 150px;
    width: 450px;
    margin-top: 90px;
    margin-left: 90px;
    font-size: 17px;
    text-align: center;
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

.slide-text h3{
    margin-top: -35px;
    font-size: 40px;
    font-family: mansalva;
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

.d-block{
    height: 290px;
    width: 850px;
    border-radius: 100%;
    object-fit: cover;
}

.carousel-indicators {
    margin-left: auto;
    margin-right: auto;
    width: 80px;
    height: 20px;
}

.testimonial-btn {
    border-radius: 50%;
    padding: 20px;
}

.carousel-control-prev {
    width: 50px;
    height: 150px;
    margin-top: 380px;
    margin-left: 200px;
}

.carousel-control-next {
    width: 50px;
    height: 150px;
    margin-top: 380px;
    margin-right: 200px;
}

.testimonial-page-footer {
    padding-top: 40px;
    height: 90px;
    background-color: #5269bdb7;
    text-align: center;
    
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