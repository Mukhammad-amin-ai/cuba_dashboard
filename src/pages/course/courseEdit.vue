<template >
    <Breadcrumbs title="Teachers Page" main="Course Page" />
    <div class="container-fluid">
        <div>
            <div class="row product-page-main p-0" v-if="handler">
                <div class="col-xxl-4 col-md-6 box-col-12">
                    <div class="card">
                        <div class="card-body">
                            <img src="../../assets/images/avtar/16.jpg" alt="">
                        </div>
                    </div>
                </div>
                <div class="col-xxl-5 box-col-6 order-xxl-0 order-1">
                    <div class="card">
                        <div class="card-body">
                            <div class="product-page-details">
                                <h3>{{ courseData.name }}</h3>
                            </div>
                            <div class="product-price">
                            </div>
                            <ul class="product-color">
                                <li class="bg-primary"></li>
                                <li class="bg-secondary"></li>
                                <li class="bg-success"></li>
                                <li class="bg-warning"></li>
                                <li class="bg-danger"></li>
                            </ul>
                            <hr />
                            <p>
                                Id: {{ courseData.id }}
                            </p>
                            <hr />
                            Price: {{ courseData.price }}
                            <hr />
                        </div>
                    </div>
                </div>
            </div>
            <div class="p-20" v-else>
                <div class="container-fluid">
                    <div class="row">
                        <div class="col-sm-12">
                            <div class="card">
                                <div class="card-body">
                                    <div class="form theme-form">
                                        <div class="row">
                                            <div class="col">
                                                <div class="mb-3">
                                                    <label>Change Course Name</label>
                                                    <input class="form-control" type="text" placeholder="New Course Name *"
                                                        v-model="name">
                                                </div>
                                            </div>
                                        </div>
                                        <div class="row">
                                            <div class="col">
                                                <div class="mb-3">
                                                    <label>Price</label>
                                                    <input class="form-control" type="text" placeholder="Price *"
                                                        v-model="price">
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <button type="button" class="btn btn-success" @click="setEdit">Create</button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>



            <div class="card-fluid d-flex justify-content-between">
                <button type="button" class="btn btn-success" @click="display">Edit</button>
                <button type="button" class="btn btn-danger" @click="deleteId">Delete</button>
            </div>
        </div>
    </div>
</template>
<script>
import { mapState } from 'vuex';

export default {
    data() {
        return {
            id: this.$route.params.id,
            handler: true,
            name:'',
            price:''
        }
    },
    computed: {
        ...mapState('course', ['courseData'])
    },
    mounted() {
        this.getCourseById()
    },
    methods: {
        getCourseById() {
            this.$store.dispatch('course/getCourseDataById', this.id)
        },
        setEdit(){
            let option = {
                name:this.name,
                price:this.price
            }
            this.$store.dispatch('course/editCourse',{id:this.id,option:option})
        },
        deleteId() {
            this.$store.dispatch('course/delete', this.id)
        },
        display() {
            this.handler = !this.handler
        },

    }
}
</script>
<style ></style>