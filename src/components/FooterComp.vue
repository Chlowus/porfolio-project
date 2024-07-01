<template >
        <footer class="container-fluid dynamic-footer">
            <div class="row">
                <p class="footer">
                    <span>Chloe's Portfolio &copy; {{cYear}}</span>
                </p>
            </div>
        </footer>
    
</template>
<script>
export default {
    name: "FooterComp",
    data() {
        return {
            cYear: new Date().getUTCFullYear()
        }
},

}
</script>
<style lang="">
    
</style>