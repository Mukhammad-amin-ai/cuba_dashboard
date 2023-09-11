<template >
    <div>
        <Breadcrumbs title="Blog Detail" main="Role" />
        <div class="container-fluid p-20 d-flex " style="gap: 20px;"> 
            <button type="button" class="btn btn-primary" @click="changePage"  v-if="this.$store.state.role.choosed">Add New Role</button>
            <tableofRoles/>
            <addRoleForms />
        </div>
    </div>
</template>
<script>
import addRoleForms from './addRoleForms.vue';
import tableofRoles from './tableofRoles.vue';
export default {
    components: {
        tableofRoles,
        addRoleForms
    },
    methods:{
        changePage(){
            this.$store.dispatch('role/changetoAdd')
        }
    }
}
</script>
<style scoped></style>