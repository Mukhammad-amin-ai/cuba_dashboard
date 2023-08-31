<template>
    <div class="spinner_cover" v-if="this.$store.state.loading">
        <div class="loader-wrapper">
            <div class="loader-index">
                <span></span>
            </div>
            <svg>
                <defs></defs>
                <filter id="goo">
                    <!-- <fegaussianblur in="SourceGraphic" stddeviation="11" result="blur"></fegaussianblur> -->
                    <!-- <fecolormatrix in="blur" values="1 0 0 0 0  0 1 0 0 0  0 0 1 0 0  0 0 0 19 -9" result="goo"> </fecolormatrix> -->
                </filter>
            </svg>
        </div>
    </div>
</template>
<script>
export default {

}
</script>
<style>
.spinner_cover {
    width: 100%;
    height: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    background-color: #fff;
    z-index: 1;
}
</style>