<template>
    <div>
        <center>
            hello world {{ id }}
        </center>
    </div>
</template>
<script>
export default {
    data(){
return{
    id:this.$route.params.id,
}

    }
}
</script>
<style>

</style>