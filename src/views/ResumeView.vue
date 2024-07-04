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
                 <!-- <h3>{{institution}}{{year}}</h3> -->
                 <h3>{{education.institution}}{{education.year}}</h3>
                 <div class="lc-box">
                  <!-- <p>At Life Choices, I'm gaining proficiency in full-stack web development alongside essential 21st-century skills. The hands-on work experience, whether in LC Studio or with external partners, provides real-world exposure to client projects. With guidance from Life Choices' placement team, I'm poised for a successful transition from internship to employment, equipped to excel in the ICT sector.</p> -->
                 </div>
              </div>

              <!-- LINE -->
              <div class="line"></div>

              <!-- Events Place -->
              <div class="ep-container">
                <h3>The Events Place: May 2023 - March 2024</h3>
                <div class="ep-box">
                 <p>At The Events Place, I honed my skills as an event planner with a focus on alleviating the stress and frustrations often associated with planning significant occasions. Drawing from personal experiences, including my own wedding day, I understand the importance of having a supportive team and expert guidance throughout the planning process.
                  <br>
                  <br>
                  My firsthand knowledge of the challenges faced by clients allows me to offer invaluable assistance in selecting service providers, managing family dynamics, and ensuring a seamless event experience. With years of experience in the events industry, I am dedicated to helping clients avoid common pitfalls and execute flawless weddings and corporate events.</p>
                </div>
              </div>

              <div class="line"></div>

              <!-- BNI -->
              <div class="bni-container">
                <h3>BNI: September 2023 - March 2024</h3>
                <div class="bni-box">
                 <p>As a representative of The Events Place in BNI, I experienced the power of building trusted relationships in business. BNI provided a platform for exchanging referrals and fostering connections with professionals from diverse industries. Through BNI, I gained colleagues, business partners, and friends who contributed to my professional growth and success.</p>
                </div>
              </div>

              <div class="line"></div>

              <!-- ARCC -->
              <div class="arcc-container">
                <h3>ARCC: December 2022 - April 2023</h3>
                <div class="arcc-box">
                 <p>As an intern at ARCC, I gained valuable skills in quantity surveying and construction project management. Working alongside experienced professionals, I learned to accurately estimate project costs, manage budgets, and analyze construction plans. Additionally, I developed proficiency in using industry-standard software for quantity take-offs and cost estimations. My internship at ARCC provided hands-on experience and enhanced my ability to contribute effectively to construction projects.</p>
                </div>
              </div>

              <div class="line"></div>

              <!-- wynberg girls -->
              <div class="wghs-container">
                <h3>Wynberg Girls' High School: 2018 - 2022</h3>
                <div class="wghs-box">
                 <p>At Wynberg Girls' High School, I received a comprehensive education in a supportive and empowering environment. Founded in 1886, Wynberg Girls' High School is one of the oldest all-girls schools in South Africa, situated in Wynberg, Cape Town. Throughout my time there, I benefited from a rich academic curriculum, dedicated teachers, and a vibrant school community. Wynberg Girls' High School provided me with a solid foundation for academic achievement and personal growth, preparing me for success in my future endeavors.</p>
                </div>
              </div>
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
    resume-page-body {
    /* overflow: hidden; */
    max-height: 310vh;
    font-family: Bitter;
}

.resume-page-body {
    background-image: url("https://chlowus.github.io/Images---Bootstrap-Project/Pink-squiggle.png");
    background-repeat: no-repeat;
    background-size: cover;
    background-position: fixed;
    height: 310vh;
    background-attachment: fixed;
}

.resume-page-main {
    height: 310vh;
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
    height: 170px;
    width: 700px;
    border-radius: 30px;
    border: #B38ECC solid 2px;
    background-color: #fcc5d3c0;
    margin-top: 20px;
    margin-left: auto;
    margin-right: auto;
}

.lc-box p {
    text-align: center;
    font-family: Libre Franklin;
    color: black;
    padding: 20px;
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
</style>