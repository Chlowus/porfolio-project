<template>
    <div id="green" class="navbar-column dynamic-navbar sticky-top">
    <nav class="navbar bg-body-tertiary">
              <div class="container-fluid">
                <button class="navbar-toggler" type="button" data-bs-toggle="offcanvas" data-bs-target="#offcanvasNavbar"
                  aria-controls="offcanvasNavbar" aria-label="Toggle navigation">
                  <span class="navbar-toggler-icon"></span>
                </button>
                <div class="offcanvas offcanvas-start" tabindex="-1" id="offcanvasNavbar"
                  aria-labelledby="offcanvasNavbarLabel">
                  <div class="offcanvas-header">
    
                    <button type="button" class="btn-close" data-bs-dismiss="offcanvas" aria-label="Close"></button>
                  </div>
                  <div class="offcanvas-body">
                    <ul class="navbar-nav justify-content-end flex-grow-1 pe-3">
                        <li class="nav-item" @click="changeColor('green')">
                            <router-link class="nav-link" to="/">Home</router-link>
                          </li>
                          <li class="nav-item" @click="changeColor('orange')">
                        <router-link class="nav-link" aria-current="page" to="/about">About</router-link>
                      </li>
                      <li class="nav-item" @click="changeColor('pink')">
                        <router-link class="nav-link" to="/resume">Resume</router-link>
                      </li>
                      <li class="nav-item" @click="changeColor('blue')">
                        <router-link class="nav-link" to="/skills">Skills</router-link>
                      </li>
                      <li class="nav-item" @click="changeColor('green')">
                        <router-link class="nav-link" to="/testimonials">Testimonials</router-link>
                      </li>
                      <li class="nav-item" @click="changeColor('orange')">
                        <router-link class="nav-link" to="/projects">Projects</router-link>
                      </li>
                      <li class="nav-item" @click="changeColor('pink')">
                        <router-link class="nav-link" to="/contact">Contact</router-link>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </nav>
        </div>
</template>
<script>
export default {
  methods: {
    changeColor(currentView){
    let navDiv = document.querySelector('.dynamic-navbar')
    navDiv.setAttribute('id', currentView)
    console.log(navDiv)
    }
  }, 
}
</script>
<style>
    .btn-close {
    font-size: 30px;
}

li .nav-link {
    font-family: Libre Franklin;
    font-size: 40px;
    font-weight: 700;
    color: white;
    display: flex;
    justify-content: flex-start;
}

  .header {
    overflow: hidden;
  }

.navbar button {
    order: -1;
}

.offcanvas-header {
    display: grid;
    grid-template-columns: auto auto;
    justify-content: space-between;
}

/* X button in nav bar */
.offcanvas-header button {
    order: -1;
    
}
</style>