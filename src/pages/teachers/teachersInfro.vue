<template >
    <Breadcrumbs  title="Teachers Page" main="Teachers Page" />

    <div class="container-fluid">
        <div>
            <div class="row product-page-main p-0">
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
                                <h3>{{ teachers.firstname  }} {{ teachers.lastname }}</h3>
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
                            Id: {{ teachers.id }}
                            <hr />
                            <p>
                               Email: {{  teachers.email}}
                            </p>
                            <hr />
                            Contact number: {{ teachers.contact_no }}
                            <hr />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>
<script>
import { mapState } from 'vuex';

export default {
    data(){
        return{
            id:this.$route.params.id
        }
    },
    computed:{
        ...mapState('teacher',['teachers'])
    },
    mounted(){
        this.getTeacherByid( )
        
    },
    methods:{
        getTeacherByid(){
            this.$store.dispatch('teacher/getTeachersById',this.id)
            console.log(this.teachers);
        }
    }
    



}
</script>
<style></style>