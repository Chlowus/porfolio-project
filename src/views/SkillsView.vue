<template lang="">
    <main class="skills-page-main">


        <!--BODY-->
        <div class="skills-container">
          <h1 class="skills-text">Skills</h1>
          <!-- <img src="Images/Orange Squiggle.png" alt="orange squiggle" class="about-page-squiggle"> -->
          <div class="skills-container-2" data-aos="fade-right" data-aos-duration="3000">
            <!--1st column-->
            <div class="html-icon">
              <h3>HTML</h3>
              <i class="lab la-html5"></i>
              <h4>Intermediate</h4>
            </div>
    
    
            <!--2nd column-->
            <div class="css-icon">
              <h3>CSS</h3>
              <i class="lab la-css3-alt"></i>
              <h4>Intermediate</h4>
            </div>
    
    
            <!--3rd column-->
            <div class="bootstrap-icon">
              <h3>Bootstrap</h3>
              <i class="lab la-bootstrap"></i>
              <h4>Beginner</h4>
            </div>
    
            
            <!--4th column-->
            <div class="bootstrap-icon">
                <h3>Vue</h3>
                <i class="lab la-vuejs"></i>
                <h4>Beginner</h4>
              </div>

                <!--5th column-->
                <div class="bootstrap-icon">
                    <h3>JavaScript</h3>
                    <i class="lab la-js"></i>
                    <h4>Beginner</h4>
                </div>

                <!--5th column-->
                <div class="bootstrap-icon">
                    <h3>GitHub</h3>
                    <i class="lab la-github"></i>
                    <h4>Beginner</h4>
                </div>

          </div>
        </div>
      </main>   
       
</template>
<script>
export default {
    
}
</script>
<style scoped>
.skills-page-body {
    /* overflow: hidden; */
    max-height: 150vh;
    font-family: Bitter;
}

.skills-page-main {
    background-image: url("https://chlowus.github.io/Images---Bootstrap-Project/Blue%20Squiggle.png");
    background-repeat: no-repeat;
    background-size: cover;
    overflow-y: hidden;
    height: 230vh;
}

.skills-container {
    overflow: hidden;
    height: 230vh;
}
.html-icon {
    background-color: #AADCEC;
    height: 400px;
    width: 300px;
    border-radius: 20px;
    border: #977BE6 2px solid;
    margin-left: 120px;
    margin-top: 80px;
    display: grid;
    justify-content: center;
    align-items: center;
}

.html-icon h4 {
    text-align: center;
    font-family: bitter;
}

i{
    font-size: 350px;
    color: white;
}
i:hover{
    color: black;
}

.la-js {
    font-size: 280px !important;
}

.skills-container-2 h3 {
    text-align: center;
    margin-top: 20px;
    font-family: Libre Franklin;
    font-weight: 700;
    color: #977BE6;
}

.skills-container-2 {
    display: grid;
    grid-template-columns: 1fr 1fr 1fr;
    overflow: hidden;
    height: 230vh;
    margin-top: -20px;
}

.css-icon {
    background-color: #AADCEC;
    height: 400px;
    width: 300px;
    border-radius: 20px;
    border: #977BE6 2px solid;
    margin-left: 120px;
    margin-top: 80px;
    display: grid;
    justify-content: center;
    align-items: center;
}

.css-icon h4 {
    text-align: center;
    font-family: bitter;
}

.bootstrap-icon {
    background-color: #AADCEC;
    height: 400px;
    width: 300px;
    border-radius: 20px;
    border: #977BE6 2px solid;
    margin-left: 120px;
    margin-top: 80px;
    display: grid;
    justify-content: center;
    align-items: center;
}

.bootstrap-icon h4 {
    text-align: center;
    font-family: bitter;
}

.skills-text {
    z-index: 1;
    font-family: Bitter;
    font-weight: 600;
    font-size: 60px;
    color: #977BE6;
    text-align: center;
    padding: 7px;
    margin-top: 3%;
    margin-left: 635px;
    background-color: #AADCEC;
    height: 80px;
    width: 250px;
    border-radius: 40px;
}


.skills-page-footer {
    padding-top: 40px;
    height: 80px;
    background-color: #987be6c8;
    text-align: center;
}
</style>