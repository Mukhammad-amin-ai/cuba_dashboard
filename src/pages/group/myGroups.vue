<template>
    <Breadcrumbs title="Blog Detail" main="My Groups" />
    <div class="container" v-if="this.$store.state.teacher.noData">
        <spiner />
        <RouterLink :to="{ path: 'group/' + item.id }" v-for="item in myGroups" :key="item">
            <div class="card mb-3" style="max-width: 100vw;">
                <div class="row g-0">
                    <div class="col-md-4" style="max-width: 20vw;">
                        <img src="../../assets/images/Students-Wallpaper.jpg" class="img-fluid rounded-start" alt="#">
                    </div>
                    <div class="col-md-8">
                        <div class="card-body">
                            <h5 class="card-title">Group No/{{ item.id }}</h5>
                            <p> Group name : {{ item.name }}</p>
                            <p> Teacher : <span class="red" v-if="item.teacher">
                                    {{ item.teacher.firstname }} {{ item.teacher.lastname }}
                                </span>
                                <span v-else>Loading...</span>
                                Assistent-teacher : <span class="red" v-if="item.assistant_teacher">
                                    {{ item.assistant_teacher.firstname }} {{ item.assistant_teacher.lastname }}</span>
                                <span v-else></span>
                            </p>
                            <p>Course name :<span class="green" v-if="item.course">
                                    {{ item.course.name }}</span>
                                <span v-else>Loading...</span>
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </RouterLink>
    </div>
    <div v-else>
        <center>
            No Data
        </center>
    </div>
</template>
<script>
import { mapState } from 'vuex';
import spiner from "@/components/ui/spiner.vue"
export default {
    components: {
        spiner
    },
    computed: {
        ...mapState('teacher', ['myGroups'])
    },
    mounted() {
        this.getMyGroup()
    },
    methods: {
        getMyGroup() {
            this.$store.dispatch('teacher/getMyGroups')
        },

    }
}
</script>
<style scoped></style>