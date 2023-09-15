<template >
    <div>
        <div class="alert alert-danger" role="alert">
           {{ text }}
        </div>
    </div>
</template>
<script>
export default {
    props:{
        text:''
    }
}
</script>
<style scoped></style>