<template>
    <div class="card" v-if="this.$store.state.smallLoading">
        <div class="spinner-border text-primary" role="status">
            <span class="visually-hidden">Loading...</span>
        </div>
    </div>
</template>
<style scoped>
.card {
    width: 100%;
    height: 100%;
    position: absolute;
    display: flex;
    justify-content: center;
    align-items: center;
    z-index: 1;
    border-radius: 15px 15px 0px 0px !important;
}


</style>