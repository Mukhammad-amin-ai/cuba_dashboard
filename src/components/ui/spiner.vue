<template>
        <div class="spinner_cover" v-if="this.$store.state.loading">
            <div class="spinner-border" role="status">
                <span class="visually-hidden">Loading...</span>
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
    height: 100vh;
    display: flex;
    justify-content: center;
    align-items: center;
    background-color: #fff;
    position: absolute;
    z-index: 99999999;
}
</style>