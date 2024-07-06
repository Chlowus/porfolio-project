<template>
  <div class="wrapper">
    <NavBarComp/>
    <!-- {{changeColor()}} -->
  <main>
    <router-view />
  </main>
  <!-- Footer -->
</div>

</template>
<script>
import NavBarComp from '@/components/NavBarComp.vue'

// import HomeView from '@/views/HomeView.vue'
export default{
  methods: {
    changeColor(){
    let footer = document.querySelector(".dynamic-footer")
    // let nav = document.querySelector(".dynamic-navbar")
    // let navbar = nav.getAttribute("id")
    // footer.setAttribute('id', navbar)
    console.log(footer + " hello");
    }
  },
  components:{
    NavBarComp,
  },
  mounted() {
    this.changeColor();
  }
}
</script>
<style>
@import url('https://fonts.googleapis.com/css2?family=Bitter:ital,wght@0,100..900;1,100..900&family=Libre+Franklin:ital,wght@0,100..900;1,100..900&family=Mansalva&display=swap');
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

nav {
  padding: 30px;
}

nav a {
  font-weight: bold;
  color: #2c3e50;
}

nav a.router-link-exact-active {
  color: #42b983;
}

:is(.wrapper) {
  display: grid;
  grid-template-rows: auto minmax(100dvh, 100%);
}

#green .navbar {
    background-color: #5269BD !important;
  }

  #green .navbar-toggler {
    background-color: #9BDABE;
}

#green .offcanvas-body {
    background-color:#9BDABE !important;
}

#green .offcanvas-header {
    background-color:#9BDABE !important;
}

/* ORANGE */
#orange .navbar{
    background-color: #FF5607 !important ;
}

#orange .navbar-toggler {
    background-color: #FFDAA5;
}

#orange .offcanvas-body {
    background-color:#FFDAA5 !important;
}

#orange .offcanvas-header {
    background-color:#FFDAA5 !important;
}

/* PINK */
#pink .navbar{
    background-color: #B38ECC !important ;
}

#pink .navbar-toggler {
    background-color: #FCC5D3;
}

#pink .offcanvas-body {
    background-color:#FCC5D3 !important;
}

#pink .offcanvas-header {
    background-color:#FCC5D3 !important;
}

/* BLUE */
#blue .navbar{
    background-color: #977BE6 !important ;
}

#blue .navbar-toggler {
    background-color: #AADCEC;
}

#blue .offcanvas-body {
    background-color:#AADCEC !important;
}

#blue .offcanvas-header {
    background-color:#AADCEC !important;
}
</style>
