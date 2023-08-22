<template>
    <div class="card" v-if="this.$store.state.choose">
        <div class="card_header">
            <h3>Choose Day</h3>
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
    z-index: 99;
    border-radius: 15px 15px 0px 0px !important;
}
</style>