<template>
  <div class="home-page-container">
      <div class="home-page-text-container">
        <div class="home-page-text">
          <h2 class="my-name-is">hi my name is</h2>
          <h1 class="my-name">Chloe Smith</h1>
          <p class="i-want-to-be">aspiring full-stack developer</p>
        </div>

        <div class="home-button-container">
          <a href="https://www.linkedin.com/in/chloe-smith-1b0400294?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=ios_app">
          <button class="linkedin-btn">Linkedin</button>
        </a>
        <a href="https://chlowus.github.io/Images---Bootstrap-Project/Chloe%20cv.pdf">
          <button class="cv-btn">CV</button>
        </a>
        <a href="https://github.com/Chlowus">
          <button class="github-btn">Github</button>
        </a>
        </div>
        <img src="https://chlowus.github.io/Images---Bootstrap-Project/squiggle.png" alt="squiggle" class="home-page-squiggle">
      </div>

      <div class="home-page-image-container">
        <img src="https://chlowus.github.io/Images---Bootstrap-Project/Chloe%20green.png" alt="chloe animation" class="chloe-animation">
      </div>
    </div>
</template>

<script>

export default {
  name: 'HomeView',
  components: {
    
  }
}
</script>

<style scoped>


.home-page-container {
    display: grid;
    grid-template-columns: 1fr 1fr;
    overflow: hidden;
}

.home-page-text-container {
    background-color:#9BDABE ;
    width: 50vw;
    height: 100vh;
    font-family: bitter;
}

.home-page-squiggle {
    display: block;
    width: 100%;
    height: 100vh;
    object-fit: cover;
    z-index: 0;
}

.home-page-text {
    position: absolute;
    top: 47%; /* Adjust as needed */
    left: 25%; /* Adjust as needed */
    transform: translate(-50%, -50%);
    z-index: 1;
    background-color: #9bdabe99;
    border-radius: 20px;
    width: 450px;
    height: 200px;
    border: none;
 } 

 .my-name-is {
    font-family: bitter;
    font-size: 50px;
    text-align: center;
 }

 .my-name {
    font-family: mansalva;
    font-size: 80px;
    text-align: center;
    color: #5269BD;
 }
    
.i-want-to-be {
    font-family: bitter;
    font-size: 22px;
    font-weight: 700;
    text-align: center;
}


.home-button-container {
    display: flex;
    position: absolute;
    top: calc(60% + 100px); /* Adjust as needed to position below the text */
    left: 25%;
    transform: translateX(-50%);
    z-index: 1;
    margin-right: 10px; 
}

.linkedin-btn {
    margin: 25px;
    width: 180px;
    height: 50px;
    background-color: #5269bd7d;
    border: #5269BD solid 1px;
    border-radius: 20px;
    color: white;
    font-family: Libre Franklin;
    font-weight: 600;
}

.linkedin-btn:hover {
    margin: 25px;
    width: 180px;
    height: 50px;
    background-color: #5269BD;
    border: #5269BD solid 1px;
    border-radius: 20px;
    color: black;
    font-family: Libre Franklin;
    font-weight: 600;
}

.cv-btn {
    margin: 25px;
    width: 180px;
    height: 50px;
    background-color: #5269bd7d;
    border: #5269BD solid 1px;
    border-radius: 20px;
    color: white;
    font-family: Libre Franklin;
    font-weight: 600;
}

.cv-btn:hover {
    margin: 25px;
    width: 180px;
    height: 50px;
    background-color: #5269BD;
    border: #5269BD solid 1px;
    border-radius: 20px;
    color: black;
    font-family: Libre Franklin;
    font-weight: 600;
}

.github-btn {
    margin: 25px;
    width: 180px;
    height: 50px;
    background-color: #5269bd7d;
    border: #5269BD solid 1px;
    border-radius: 20px;
    color: white;
    font-family: Libre Franklin;
    font-weight: 600;
}

.github-btn:hover {
    margin: 25px;
    width: 180px;
    height: 50px;
    background-color: #5269BD;
    border: #5269BD solid 1px;
    border-radius: 20px;
    color: black;
    font-family: Libre Franklin;
    font-weight: 600;
}

.chloe-animation {
    height: 540px;
    width: 500px;
    object-fit: cover;
    display: block;
    margin-left: auto;
    margin-right: auto;
    margin-top: 75px;
    margin-bottom: auto;
    border: none;
}

.home-page-footer {
    padding-top: 40px;
    height: 80px;
    background-color: #5269bddb;
    text-align: center;
}

/* @media screen and (max-width: 425) {
    .offcanvas-header { 
        display: grid;
        grid-template-columns: auto;
        
    }
    .home-page-container {
        display: grid;
        grid-template-columns: 1fr;
        grid-template-rows: 1fr 1fr;
        overflow: hidden;
    }
} */

@media (max-width: 720px) {
  .home-page-container {
    grid-template-columns: 1fr; /* Change to a single column layout */
    height: 620px;
  }

  .home-page-text-container {
    width: 100vw; /* Occupy full width */
    height: auto; /* Allow content to dictate height */
    padding: 20px; /* Add padding for spacing */
    margin-top: 300px;
  }

  .home-page-squiggle {
    display: block;
    width: 100vw;
    height: 60vh;
    object-fit: cover;
    z-index: 0;
    margin-top: -325px;
    margin-left: -20px;
  }

  .home-page-text {
    position: relative; /* Remove absolute positioning */
    top: auto;
    left: auto;
    transform: none;
    width: 100%; /* Full width */
    height: auto; /* Adjust height based on content */
    margin: 0 auto; /* Center align horizontally */
    padding: 20px; /* Add padding for spacing */
  }

  .my-name-is {
    font-size: 30px; /* Adjust font size */
    text-align: center;
  }

  .my-name {
    font-size: 50px; /* Adjust font size */
    text-align: center;
  }

  .i-want-to-be {
    font-size: 18px; /* Adjust font size */
    text-align: center;
  }

  .home-button-container {
    position: relative; /* Remove absolute positioning */
    top: auto;
    left: auto;
    transform: none;
    width: 100%; /* Full width */
    margin: 20px auto; /* Center align horizontally with spacing */
    display: flex;
    flex-wrap: wrap; /* Allow buttons to wrap */
    justify-content: center; /* Center align items */
  }

  .linkedin-btn, .cv-btn, .github-btn {
    margin: 10px; /* Reduce margin between buttons */
    max-width: 180px; /* Limit maximum width */
    height: 50px;
  }

  .chloe-animation {
    height: auto; /* Allow height to adjust based on content */
    width: 30%; /* Full width */
    max-width: 300px; /* Limit maximum width */
    display: block;
    margin: 20px auto; /* Center align horizontally with spacing */
    margin-top: -680px;
}
}




/*  */

/*=============================================================================================================================================
  */
/* --------------------------------------------------------------------------------------------------------------------------------------------- */
/* =----------------============================================================================================================================ */


/*  */
 
@media (max-width: 300px) {
    .home-page-container {
      grid-template-columns: 1fr; /* Change to a single column layout */
      height: 620px;
    }
  
    .home-page-text-container {
      width: 100vw; /* Occupy full width */
      height: auto; /* Allow content to dictate height */
      padding: 20px; /* Add padding for spacing */
      margin-top: 170px;
    }
  
    .home-page-squiggle {
      display: block;
      width: 100vw;
      height: 70vh;
      object-fit: cover;
      z-index: 0;
      margin-top: -435px;
      margin-left: -20px;
    }
  
    .home-page-text {
      position: relative; /* Remove absolute positioning */
      top: auto;
      left: auto;
      transform: none;
      width: 100%; /* Full width */
      height: auto; /* Adjust height based on content */
      margin: 0 auto; /* Center align horizontally */
      padding: 20px; /* Add padding for spacing */
    }
  
    .my-name-is {
      font-size: 20px; /* Adjust font size */
      text-align: center;
    }
  
    .my-name {
      font-size: 40px; /* Adjust font size */
      text-align: center;
    }
  
    .i-want-to-be {
      font-size: 15px; /* Adjust font size */
      text-align: center;
    }
  
    .home-button-container {
      position: relative; /* Remove absolute positioning */
      top: auto;
      left: auto;
      transform: none;
      width: 100%; /* Full width */
      margin: 20px auto; /* Center align horizontally with spacing */
      display: flex;
      flex-wrap: wrap; /* Allow buttons to wrap */
      justify-content: center; /* Center align items */
    }
  
    .linkedin-btn, .cv-btn, .github-btn {
      margin: 10px; /* Reduce margin between buttons */
      max-width: 180px; /* Limit maximum width */
      height: 50px;
    }
  
    .chloe-animation {
      height: auto; /* Allow height to adjust based on content */
      width: 40%; /* Full width */
      max-width: 300px; /* Limit maximum width */
      display: block;
      margin: 20px auto; /* Center align horizontally with spacing */
      margin-top: -625px;
  }
  }
</style>
