<template>
    <Breadcrumbs title="Blog Detail" main="My Groups" />
    <div class="container">
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