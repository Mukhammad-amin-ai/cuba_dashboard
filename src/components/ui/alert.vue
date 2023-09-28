<template >
    <div  v-if="this.$store.state.alert">
        <div class="alert alert-danger " role="alert">
            {{ text }}
            <button type="button" class="btn-close" aria-label="Close" @click="closeWindow"></button>
        </div>
    </div>
</template>
<script>
export default {
    props: {
        text: ''
    },
    methods: {
        closeWindow() {
            this.$store.dispatch('showHideAlert')
        }
    },
}
</script>
<style scoped></style>