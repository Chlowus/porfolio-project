<template>
  <div class="row">
    <div class="col">
      <img src="https://chlowus.github.io/Images---Bootstrap-Project/proffesional%20photo.png" alt="prof picture">
    </div>
    <div class="col">
      <div v-if="about">
        <p>{{about[0]}}</p>
        <p>{{about[1]}}</p>
        <p>{{about[2]}}</p>
        <p>{{about[3]}}</p>
        <p>{{about[4]}}</p>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  
}
</script>
<style scoped>
  

  
</style>
