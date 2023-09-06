<template >
    <div>
        <Breadcrumbs title="Blog Detail" main="Add New Role" />
        <div class="container-fluid p-20">
            
            <addRoleForms/>

        </div>
    </div>
</template>
<script>
import addRoleForms from './addRoleForms.vue';
export default {
   components:{
    addRoleForms
   }
}
</script>
<style scoped>

</style>