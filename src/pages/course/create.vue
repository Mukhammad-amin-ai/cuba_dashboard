<template >
    <div class="p-20">
        <div class="container-fluid">
            <div class="row">
                <div class="col-sm-12">
                    <div class="card">
                        <div class="card-body">
                            <div class="form theme-form">
                                <div class="row">
                                    <div class="col">
                                        <div class="mb-3">
                                            <label>New Course Name</label>
                                            <input class="form-control" type="text" placeholder="New Course Name *"
                                                v-model="name">
                                        </div>
                                    </div>
                                </div>
                                <div class="row">
                                    <div class="col">
                                        <div class="mb-3">
                                            <label>Price</label>
                                            <input class="form-control" type="text" placeholder="price *" v-model="price">
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <button type="button" class="btn btn-success" @click="createCourse">Create</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>
<script>
import { mapState } from 'vuex'
export default {
    data() {
        return {
            name: '',
            price: '',
            branches: []
        }
    },
    computed: {
        // ...mapState("branche", ['branchData'])
        ...mapState('user', ['currentBranch'])

    },
    mounted() {
        this.getCurrentBranch()
        // this.getBranchAsArray()
    },
    methods: {
        createCourse() {
            // this.getBranchAsArray()
            const options = {
                price: this.price,
                name: this.name,
                branches: [this.currentBranch.id]
            }
            this.$store.dispatch('course/createCourse', options)
        },
        getCurrentBranch() {
            this.$store.dispatch("user/getStatistics", '/?filter=day')
        }
        // getBranchAsArray() {
        //     if (this.branchData) {
        //         this.branches = [];
        //         this.branches.push(...this.branchData.map(branch => branch.id));
        //     };
        // },
        // getCurrentBranch() {
        //     this.$store.dispatch("branche/getBranches")
        // },
    }
}
</script>
<style scoped></style>