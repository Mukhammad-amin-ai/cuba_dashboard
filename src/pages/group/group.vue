<template >
    
    <Breadcrumbs title="Blog Detail" main="Groups" />
    <div class="container">
        <spiner />
        <RouterLink to="group/create" v-if="this.$store.state.create">
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
                            <p> Teacher : <span class="red" v-if="item && item.teacher">
                                    {{ item.teacher.firstname }} {{ item.teacher.lastname }} </span>
                                <span v-else>Loading...</span>
                                Assistent-teacher : <span class="red" v-if="item && item.assistant_teacher">
                                    {{ item.assistant_teacher.firstname }} {{ item.assistant_teacher.lastname }} </span>
                                <span v-else> Loading...</span>
                            </p>
                            <p>Course name : <span class="green" v-if="item && item.course">
                                    {{ item.course.name }}</span>
                                <span v-else>Loading...</span>
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </RouterLink>
    </div>
    <nav aria-label="Page navigation example" v-if="this.$store.state.group.pagination">
        <ul class="pagination">
            <li class="page-item"><a class="page-link" href="#">Previous</a></li>
            <li class="page-item"><a class="page-link" href="#">1</a></li>
            <li class="page-item"><a class="page-link" href="#">2</a></li>
            <li class="page-item"><a class="page-link" href="#">3</a></li>
            <li class="page-item"><a class="page-link" href="#">Next</a></li>
        </ul>
    </nav>
</template>
<script>
import { mapState } from 'vuex'
import spiner from '@/components/ui/spiner.vue'
export default {
    components: {
        spiner
    },
    computed: {
        ...mapState('group', ['groupData'])
    },
    mounted() {
        this.getGroup()
        this.roleCheck()
    },
    methods: {
        getGroup() {
            this.$store.dispatch('group/getGroupData')
        },
        roleCheck() {
            this.$store.dispatch('permittionCheck', '13')
        }
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