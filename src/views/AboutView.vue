<template>
  <body class="about-page-main">
   <div class="about-container">
            <h1 class="about-text">About Me</h1>
            <!-- <img src="Images/Orange Squiggle.png" alt="orange squiggle" class="about-page-squiggle"> -->
        <div class="about-container-2">
            <!--Left Side-->
            <div class="chloe-image-container">
                <img src="https://chlowus.github.io/Images---Bootstrap-Project/proffesional%20photo.png" alt="chloe-image" class="chloe-picture">
            </div>
            
            <!--Right Side-->
            <div class="about-text-container">
                <div class="about-text-paragraph">
                  <div v-for="about in getAboutMe()" :key="about">
                  <p>{{about}}</p>
                  </div>
                </div>
            </div>
        </div>
        </div>
      </body>
</template>
<script>
export default {
  methods:{
    getAboutMe(){
      return this.$store.state.aboutMe
    }
  },
  computed:{
    getData(){
      return this.$store.dispatch('fetchAboutMe')
    }
  },
  mounted() {
    this.getData
  },
}
</script>
<style scoped>
  .about-page-body {
    /* overflow: hidden; */
    max-height: 100vh;
    font-family: Bitter;
}

.about-page-main {
    background-image: url("https://chlowus.github.io/Images---Bootstrap-Project/Orange%20Squiggle.png");
    background-repeat: no-repeat;
    background-size: cover;
    /* overflow-y: hidden; */
    height: 100%;
}

.about-container {
    overflow: hidden;
    height: 90vh;
}

.about-container-2 {
    display: grid;
    grid-template-columns: 1fr 1fr;
    overflow: hidden;
    height: 90vh;
}

.about-text {
    z-index: 1;
    font-family: Bitter;
    font-weight: 600;
    font-size: 60px;
    color: #FF5607;
    text-align: center;
    margin-top: 3%;
}

.about-text-paragraph {
    background-color: #ffd9a58a;
    height: 450px;
    width: 760px;
    padding: 20px;
    border-radius: 20px;
    margin: 40px;
}

.about-text-paragraph p {
    font-size: 14px;
    font-family: Libre Franklin;
    text-align: center;
}

.chloe-picture {
    height: 350px;
    width: 350px;
    object-fit: cover;
    border-radius: 50px;
    margin: 20%;
    margin-top: 15%;
}

.about-page-footer {
    padding-top: 40px;
    height: 80px;
    background-color: #ff5507bd;
    text-align: center;
}

@media screen and (max-width: 300px) {
  .about-page-main {
    height: 100%;
  }

  .about-container-2 {
    grid-template-columns: 1fr;
  }

  .chloe-picture {
    max-width: 25%;
    height: 65%;
    margin-top: 0;
    margin-bottom: 20px;
  }

  .about-text {
    font-size: 2.5rem;
    margin-top: 9px;
  }

  .about-text-container {
    height: 200vh;
  }

  .about-text-paragraph {
    background-color: #ffd9a58a;
    height: 324px;
    width: 30px;
    padding: 10px;
    border-radius: 20px !important;
    margin: 40px;
    margin-top: -90px;
    margin-bottom: 20px;
    margin-left: auto;
    margin-right: auto;
  }

  
  .about-text-paragraph p{
    font-size: 10px;
    font-family: Libre Franklin;
    text-align: center;
  }
}

/* =================================================== */
/* ================================================================ */
/* ============================================================================ */
/* =================================================================================================================== */
/* ============================================================================ */
/* ================================================================ */
/* ======================================================= */


@media screen and (max-width: 720px) {
  .about-page-main {
    height: 100%;
  }

  .about-container-2 {
    grid-template-columns: 1fr;
  }

  .chloe-picture {
    max-width: 25%;
    height: 65%;
    margin-top: 0;
    margin-bottom: 20px;
  }

  .about-text {
    font-size: 2.5rem;
    margin-top: 9px;
  }

  .about-text-container {
    height: 200vh;
  }

  .about-text-paragraph {
    background-color: #ffd9a58a;
    height: 324px;
    width: 550px;
    padding: 10px;
    border-radius: 20px !important;
    margin: 40px;
    margin-top: -90px;
    margin-bottom: 20px;
    margin-left: auto;
    margin-right: auto;
  }

  
  .about-text-paragraph p{
    font-size: 10px;
    font-family: Libre Franklin;
    text-align: center;
  }
}
</style>


