<template >
    <div>
        <Breadcrumbs title="Blog Detail" main="Role" />
        <div class="container-fluid p-20 d-flex " style="gap: 20px;">
            <button type="button" class="btn btn-primary" @click="changePage" v-if="this.$store.state.role.choosed">Add NewRole</button>
        </div>
        <div class="col-sm-12">
            <div class="card">
                <div class="card-header">
                    <h3>List of roles</h3>
                </div>
                <div class="table-responsive">
                    <table class="table">
                        <thead>
                            <tr class="border-bottom-primary">
                                <th scope="col">Id</th>
                                <th scope="col">Role Name </th>
                                <th scope="col">Edit</th>
                                <th scope="col">Delete</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td></td>
                                <td></td>
                                <td></td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            </div>
        </div>


        
    </div>
</template>
<script>

import { mapState } from 'vuex';
export default {


}
</script>
<style scoped></style>