<template >
    <div>
        <spiner/>
        <Breadcrumbs title="Blog Detail" main="Role" />
        <div class="container-fluid p-20 " style="gap: 20px;">
            <button type="button" class="btn btn-primary" @click="changePage" v-if="this.$store.state.role.choosed">Add NewRole</button>
        </div>
        <div class="col-sm-12" v-if="this.$store.state.role.choosed">
            <div class="card">
                <div class="card-header">
                    <h3>List of roles</h3>
                </div>
                <div class="table-responsive">
                    <table class="table">
                        <thead>
                            <tr class="border-bottom-primary">
                                <th scope="col">Id</th>
                                <th></th>
                                <th></th>
                                <th scope="col">Role Name </th>
                                <th scope="col">Permission</th>
                                <th scope="col">Update</th>
                                <th scope="col">Delete</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr v-for="(role, index) in roleArray" :key="role">
                                <td>{{ roleArray[index].id }} </td>
                                <td></td>
                                <td></td>
                                <td>{{ roleArray[index].name }}</td>
                                <td>
                                    <button type="button" class="btn btn-primary" @click="showPermssion(roleArray[index].id)">
                                        <i class="icofont icofont-paper"></i>
                                    </button>
                                </td>
                                <td>
                                    <button type="button" class="btn btn-success" @click="edit(roleArray[index].id)" >
                                        <i class="icofont icofont-pencil-alt-5"></i>
                                    </button>
                                </td>
                                <td>
                                    <button type="button" class="btn btn-danger" @click="deleteRole(roleArray[index].id)">
                                        <i class="icofont icofont-ui-delete"></i>
                                    </button>
                                </td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
        <addRoleFormsVue  />
        <permission :propsedId="idRole"/>
        <editRole :propsedId="idRole"/>
    </div>
</template>
<script>
import { mapState } from 'vuex';
import addRoleFormsVue from './addRoleForms.vue';
import spiner from '@/components/ui/spiner.vue';
import permission from '@/pages/role/permission.vue';
import editRole from './editRole.vue';
export default {
    data() {
        return {
            idRole:''
        }
    },
    components:{
        addRoleFormsVue,
        spiner,
        permission,
        editRole
    },
    computed: {
        ...mapState("role", ['roleArray'])
    },
    mounted() {
        this.getAllRole()
    },
    methods: {
        getAllRole() {
            this.$store.dispatch('role/getRole')
        },
        deleteRole(id){
            this.$store.dispatch("role/deleteRole",id)
        },
        changePage(){
            this.$store.dispatch('role/changetoAdd')
        },
        showPermssion(idofRole){
            console.log(idofRole);
            this.idRole = idofRole
            this.$store.dispatch('role/showPermission')
        },
        edit(idOfRole){
            // console.log(this.idRole = idOfRole);
            this.idRole = idOfRole
            this.$store.dispatch('role/showEdit')
        }
    }
}
</script>
<style scoped></style>