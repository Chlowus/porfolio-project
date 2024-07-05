<template lang="">
    <main class="resume-page-main">

        <div>
          
          <div class="resume-container">
              <h1 class="resume-text">Resume</h1>
              <img src="https://chlowus.github.io/Images---Bootstrap-Project/resume.png" alt="" class="resume-image">
              
        <div data-aos="fade-up"
        data-aos-duration="3000">   
              <!--Life Choices-->
              <div v-for="education in getEducation()" :key="education" class="lc-container">
                 <h3>{{education.institution}}  {{education.year}}</h3>
                 <div class="lc-box">
                  <p id="para">
                      {{education.description}}
                  </p>
                 </div>
                 <!-- LINE -->
                 <br>
                 <div class="line"></div>
              </div>
              <br> 
              <a href="#">
                  <button class="button">
                    Back to the Top
                    </button>
              </a>

        </div>
    </div>
</div>     
        <!--FOOTER-->
      </main> 
</template>
<script>
export default {
    methods:{
    getEducation(){
      return this.$store.state.education
    }
  },
  computed:{
    getEducationData(){
      return this.$store.dispatch('fetchEducation')
    }
  },
  mounted() {
    this.getEducationData
  },
}
</script>
<style scoped>
.resume-page-body {
    /* overflow: hidden; */
    max-height: 390vh;
    font-family: Bitter;
}

.resume-page-main {
    background-image: url("https://chlowus.github.io/Images---Bootstrap-Project/Pink-squiggle.png");
    background-repeat: no-repeat;
    background-size: cover;
    background-position: fixed;
    height: 390vh;
    background-attachment: fixed;
}

.resume-page-main {
    height: 390vh;
}

.resume-container {
    display: grid;
    grid-template-columns: 1fr;
}

.resume-text {
    z-index: 1;
    font-family: Bitter;
    font-weight: 600;
    font-size: 60px;
    color: #B38ECC;
    text-align: center;
    padding: 7px;
    padding-top: 20px;
    margin-left: 635px;
    height: 80px;
    width: 250px;
}

.resume-image {
    height: 150px;
    width: 120px;
    
    margin-left: auto;
    margin-right: 300px;
}

.lc-container {
    margin-top: 50px;
}

.lc-container h3 {
    text-align: center;
    font-family: Libre Franklin;
}

.lc-box {
    height: 240px;
    width: 750px;
    border-radius: 30px;
    border: #B38ECC solid 2px;
    background-color: #fcc5d3c0;
    margin-top: 20px;
    margin-left: auto;
    margin-right: auto;
    display: flex; /* Use flexbox */
    justify-content: center; /* Center horizontally */
    align-items: center; /* Center vertically */
    padding-left: 30px;
    padding-right: 30px;
    /* padding-top: 30px; */
}

.lc-box #para {
    text-align: center;
    font-family: 'Libre Franklin', sans-serif; /* Make sure to enclose font name in quotes if it has spaces */
    color: black;
    padding: 20px;
    margin: 0; /* Remove default margins */
}

.line{
    height: 100px;
    width: 2px;
    background-color: #B38ECC;
    margin-top: 20px;
    margin-left: auto;
    margin-right: auto;
}

.ep-container {
    margin-top: 50px;
}

.ep-container h3 {
    text-align: center;
    font-family: Libre Franklin;
}

.ep-box {
    height: 280px;
    width: 700px;
    border-radius: 30px;
    border: #B38ECC solid 2px;
    background-color: #fcc5d3c0;
    margin-top: 20px;
    margin-left: auto;
    margin-right: auto;
}

.ep-box p {
    text-align: center;
    font-family: Libre Franklin;
    color: black;
    padding: 20px;
}

.bni-container {
    margin-top: 50px;
}

.bni-container h3 {
    text-align: center;
    font-family: Libre Franklin;
}

.bni-box {
    height: 150px;
    width: 700px;
    border-radius: 30px;
    border: #B38ECC solid 2px;
    background-color: #fcc5d3c0;
    margin-top: 20px;
    margin-left: auto;
    margin-right: auto;
}

.bni-box p {
    text-align: center;
    font-family: Libre Franklin;
    color: black;
    padding: 20px;
}

.arcc-container {
    margin-top: 50px;
}

.arcc-container h3 {
    text-align: center;
    font-family: Libre Franklin;
}

.arcc-box {
    height: 190px;
    width: 700px;
    border-radius: 30px;
    border: #B38ECC solid 2px;
    background-color: #fcc5d3c0;
    margin-top: 20px;
    margin-left: auto;
    margin-right: auto;
}

.arcc-box p {
    text-align: center;
    font-family: Libre Franklin;
    color: black;
    padding: 20px;
}

.wghs-container {
    margin-top: 50px;
}

.wghs-container h3 {
    text-align: center;
    font-family: Libre Franklin;
}

.wghs-box {
    height: 210px;
    width: 700px;
    border-radius: 30px;
    border: #B38ECC solid 2px;
    background-color: #fcc5d3c0;
    margin-top: 20px;
    margin-left: auto;
    margin-right: auto;
}

.wghs-box p {
    text-align: center;
    font-family: Libre Franklin;
    color: black;
    padding: 20px;
}

.resume-page-footer {
    padding-top: 40px;
    height: 90px;
    background-color: #b38eccd0;
    text-align: center;
    
}
.button {
  position: relative;
  padding: 20px 52px;
  border-radius: 26px;
  border: 3px solid #B38ECC;
  color: #B38ECC;
  font-weight: 600;
  cursor: pointer;
  background-color: #FCC5D3;
  transition: all 0.2s ease;
}

.button:active {
  transform: scale(0.96);
}

.button:before,
.button:after {
  position: absolute;
  content: "";
  width: 150%;
  left: 50%;
  height: 100%;
  transform: translateX(-50%);
  z-index: -1000;
  background-repeat: no-repeat;
}

.button:hover:before {
  top: -70%;
  background-image: radial-gradient(circle, #7d2ae8 20%, transparent 20%),
    radial-gradient(circle, transparent 20%, #7d2ae8 20%, transparent 30%),
    radial-gradient(circle, #7d2ae8 20%, transparent 20%),
    radial-gradient(circle, #7d2ae8 20%, transparent 20%),
    radial-gradient(circle, transparent 10%, #7d2ae8 15%, transparent 20%),
    radial-gradient(circle, #7d2ae8 20%, transparent 20%),
    radial-gradient(circle, #7d2ae8 20%, transparent 20%),
    radial-gradient(circle, #7d2ae8 20%, transparent 20%),
    radial-gradient(circle, #7d2ae8 20%, transparent 20%);
  background-size: 10% 10%, 20% 20%, 15% 15%, 20% 20%, 18% 18%, 10% 10%, 15% 15%,
    10% 10%, 18% 18%;
  background-position: 50% 120%;
  animation: greentopBubbles 0.6s ease;
}

@keyframes greentopBubbles {
  0% {
    background-position: 5% 90%, 10% 90%, 10% 90%, 15% 90%, 25% 90%, 25% 90%,
      40% 90%, 55% 90%, 70% 90%;
  }

  50% {
    background-position: 0% 80%, 0% 20%, 10% 40%, 20% 0%, 30% 30%, 22% 50%,
      50% 50%, 65% 20%, 90% 30%;
  }

  100% {
    background-position: 0% 70%, 0% 10%, 10% 30%, 20% -10%, 30% 20%, 22% 40%,
      50% 40%, 65% 10%, 90% 20%;
    background-size: 0% 0%, 0% 0%, 0% 0%, 0% 0%, 0% 0%, 0% 0%;
  }
}

.button:hover::after {
  bottom: -70%;
  background-image: radial-gradient(circle, #7d2ae8 20%, transparent 20%),
    radial-gradient(circle, #7d2ae8 20%, transparent 20%),
    radial-gradient(circle, transparent 10%, #7d2ae8 15%, transparent 20%),
    radial-gradient(circle, #7d2ae8 20%, transparent 20%),
    radial-gradient(circle, #7d2ae8 20%, transparent 20%),
    radial-gradient(circle, #7d2ae8 20%, transparent 20%),
    radial-gradient(circle, #7d2ae8 20%, transparent 20%);
  background-size: 15% 15%, 20% 20%, 18% 18%, 20% 20%, 15% 15%, 20% 20%, 18% 18%;
  background-position: 50% 0%;
  animation: greenbottomBubbles 0.6s ease;
}

@keyframes greenbottomBubbles {
  0% {
    background-position: 10% -10%, 30% 10%, 55% -10%, 70% -10%, 85% -10%,
      70% -10%, 70% 0%;
  }

  50% {
    background-position: 0% 80%, 20% 80%, 45% 60%, 60% 100%, 75% 70%, 95% 60%,
      105% 0%;
  }

  100% {
    background-position: 0% 90%, 20% 90%, 45% 70%, 60% 110%, 75% 80%, 95% 70%,
      110% 10%;
    background-size: 0% 0%, 0% 0%, 0% 0%, 0% 0%, 0% 0%, 0% 0%;
  }
}
</style>