<template lang="">
    <div v-if='this.$store.state.auth.error'>
        <div class="alert alert-danger" role="alert">
              {{this.$store.state.auth.text}}
         </div>
    </div>
</template>
<script>
export default {

}
</script>
<style>
    
</style>