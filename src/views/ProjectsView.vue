<template>
<body class="projects-page-body">
    <div v-if=" getProducts().length > 0">
        <div class="project">
          <h2 class="projects-title">Projects</h2>
            <div class="container">
                 <div class="row">
                   <div v-for="project in getProducts()" :key="project.title" class="col-lg-4 pb-4 d-flex justify-content-center">
                      <div class="card">
                      <img class="image card__image" :src="project.image">
                      <div class="card__content">
                          <p class="card__title">{{project.name}}</p>
                          <p class="card__description">{{project.description}}</p>
                          <button class="card__button"><a :href="project.github" target="_blank">github</a></button>
                          <button class="card__button secondary"><a :href="project.vercel" target="_blank">vercel</a></button>
                      </div>
                      </div>
  
       
                     </div>
                   </div>
             
               </div> <!--container-->
        </div>
    </div>
    <div v-else>
<SpinnerComp/>
    </div>
    </body>
</template>
<script>
import SpinnerComp from '@/components/SpinnerComp.vue'

export default {
    components:{SpinnerComp},
    methods : {
        getProducts(){
      return this.$store.state.projects
    }
    },
    computed : {
        fetchProjects(){
         return   this.$store.dispatch('fetchProjects')
        }
    },
    mounted(){
        this.fetchProjects
    }
    
}
</script>

<style scoped>

.projects-page-body {
    background-image: url("https://chlowus.github.io/Images---Bootstrap-Project/Orange%20Squiggle.png");
    background-repeat: no-repeat;
    background-size: cover;
    background-position: fixed;
    height: 100vh;
    background-attachment: fixed;
}

.projects-title {
    z-index: 1;
    font-family: Bitter;
    font-weight: 600;
    font-size: 60px;
    color: #FF5607;
    text-align: center;
    padding: 7px;
    padding-top: 40px;
    margin-left: 635px;
    height: 80px;
    width: 250px;
}

.card {
  position: relative;
  width: 350px;
  aspect-ratio: 16/9;
  background-color: #f2f2f2;
  border-radius: 10px;
  display: flex;
  align-items: center;
  justify-content: center;
  overflow: hidden;
  perspective: 1000px;
  box-shadow: 0 0 0 5px #ffffff80;
  transition: all 0.6s cubic-bezier(0.175, 0.885, 0.32, 1.275);
  margin-top: 5rem;
}

.card svg {
  width: 48px;
  fill: #333;
  transition: all 0.6s cubic-bezier(0.175, 0.885, 0.32, 1.275);
}

.card__image {
  width: 100%;
  height: 100%;
}

.card:hover {
  transform: scale(1.05);
  box-shadow: 0 8px 16px rgba(255, 255, 255, 0.2);
}

.card__content {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  padding: 20px;
  box-sizing: border-box;
  background-color: #FFDAA5;
  transform: rotateX(-90deg);
  transform-origin: bottom;
  transition: all 0.6s cubic-bezier(0.175, 0.885, 0.32, 1.275);
}

.card__content p {
    font-family: Bitter;
}

.card:hover .card__content {
  transform: rotateX(0deg);
}

.card__title {
  margin: 0;
  font-size: 20px;
  color: #333;
  font-weight: 700;
}

.card:hover svg {
  scale: 0;
}

.card__description {
  margin: 10px 0 10px;
  font-size: 12px;
  color: #777;
  line-height: 1.4;
}

.card__button {
  padding: 15px;
  border-radius: 8px;
  background: #FF5607;
  border: none;
  color: #000;
}

button a{
    text-decoration: none;
    color: #fff;
}

.secondary {
  background: #FF5607;
  color: #777;
  border: 1px solid #777;
}

</style>