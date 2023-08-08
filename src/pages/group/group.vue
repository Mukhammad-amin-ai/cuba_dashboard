<template >
    <div class="container">
        <div class="card mb-3" style="max-width: 100vw;" v-for="item in groupData.data" :key="item">
            <div class="row g-0">
                <div class="col-md-4" style="max-width: 20vw;">
                    <img src="../../assets/images/Students-Wallpaper.jpg" class="img-fluid rounded-start" alt="#">
                </div>
                <div class="col-md-8">
                    <div class="card-body">
                        <h5 class="card-title">Group No/{{ item.id }}</h5>
                        <p> Group name : {{ item.name }}</p>
                        <p> Teacher : <span class="red"> {{item.teacher  }}</span>  Assistent-teacher : <span class="red">{{ item.assistant_teacher }} </span> </p>

                        <p >Course name :<span class="green">{{ item.course }}</span></p>
                        <!-- <p class="card-text">This is a wider card with supporting text below as a natural lead-in to
                            additional content. This content is a little bit longer.</p> -->
                        <!-- <p class="card-text"><small class="text-body-secondary">Last updated 3 mins ago</small></p> -->
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>
<script>
import {mapState} from 'vuex'

export default {
    computed: {
        ...mapState('group', ['groupData'])
    },
    mounted() {
        this.getGroup()
    },
    methods: {
        getGroup() {
            this.$store.dispatch('group/getGroupData')
        }
    }
}
</script>
<style scoped>
.container {
    padding-top: 20px
}
.col-md-4{
    display:flex;
    align-items:center;
    justify-content:center
}
.red{
    color:red
}
.green{
    color:rgb(9, 132, 9)
}
</style>