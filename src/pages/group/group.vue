<template >
    <Breadcrumbs title="Blog Detail" main="Groups" />
    <div class="container">
        <spiner/>
        <RouterLink to="group/create">
            <div class="card mb-3 hover" style="width: 100%;">
                <div class="row g-0" style="text-align: center; padding: 30px;">
                    <i style="font-size: 50px;" class='bx bx-plus-circle'></i>
                </div>
            </div>
        </RouterLink>

        <RouterLink :to="{ path: 'group/' + item.id }" v-for="item in groupData" :key="item">
            <div class="card mb-3" style="max-width: 100vw;">
                <div class="row g-0">
                    <div class="col-md-4" style="max-width: 20vw;">
                        <img src="../../assets/images/Students-Wallpaper.jpg" class="img-fluid rounded-start" alt="#">
                    </div>
                    <div class="col-md-8">
                        <div class="card-body">
                            <h5 class="card-title">Group No/{{ item.id }}</h5>
                            <p> Group name : {{ item.name }}</p>
                            <p> Teacher : <span class="red"> {{ item.teacher }}</span> Assistent-teacher : <span
                                    class="red">{{
                                        item.assistant_teacher }} </span> </p>
                            <p>Course name :<span class="green">{{ item.course }}</span></p>
                        </div>
                    </div>
                </div>
            </div>
        </RouterLink>
    </div>
</template>
<script>
import { mapState } from 'vuex'
import spiner from '@/components/ui/spiner.vue'
export default {
    components:{
        spiner
    },
    computed: {
        ...mapState('group', ['groupData'])
    },
    mounted() {
        this.getGroup()
    },
    methods: {
        getGroup() {
            this.$store.dispatch('group/getGroupData')
        },

    }
}
</script>
<style scoped>
.container {
    padding-top: 20px
}

.col-md-4 {
    display: flex;
    align-items: center;
    justify-content: center
}

.red {
    color: red
}

.hover:hover {
    transform: scale(1.050);
}

.green {
    color: rgb(9, 132, 9)
}
</style>