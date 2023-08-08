<template >
    <div>

    </div>
</template>
<script>
export default {
    data() {
        return {
            location: '',
            name: ''
        }
    },
    methods: {
        createBranche() {
            const options = {
                location: this.location,
                name: this.name
            }
            this.$store.dispatch('branche/createBreanch', options)
        }
    }
}
</script>
<style></style>