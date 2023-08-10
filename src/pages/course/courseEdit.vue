<template >
    <div>
        <center>
            {{ id }}
        </center>
    </div>
</template>
<script>
export default {
    data() {
        return {
            id: this.$router.id            
        }
    }
}
</script>
<style ></style>