<template >
    <div>
        <Breadcrumbs title="Blog Detail" main="Role" />
        <div class="container-fluid p-20">
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
    }
}
</script>
<style scoped></style>