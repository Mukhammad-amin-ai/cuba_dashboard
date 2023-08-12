<template>
    <div class="container-fluid p-20">
        <div class="user-profile">
            <div class="row">
                <div class="col-sm-12">
                    <div class="card hovercard text-center">
                        <div class="cardheader" style="background-size: cover;
                        background-position: 10%;
                         height: 470px;"
                            :style="{ backgroundImage: 'url(' + require('@/assets/images/Students-Wallpaper.jpg') + ')' }">
                        </div>
                        <div class="user-image">
                            <div class="icon-wrapper">
                                <i id="update-profile-tour" class="icofont icofont-pencil-alt-5"
                                    data-intro="Change Profile image here"></i>
                            </div>
                        </div>
                        <div class="info">
                            <div class="row" data-intro="This is the your details" id="info-bar-tour">
                                <div class="col-sm-6 col-lg-4 order-sm-1 order-xl-0">
                                    <div class="row">
                                        <div class="col-md-6">
                                            <div class="ttl-info text-start">
                                                <h6><i class="fa fa-user"></i> Assistent</h6>
                                                <span>{{ groupData.assistant_teacher }}</span>
                                            </div>
                                        </div>
                                        <div class="col-md-6">
                                            <div class="ttl-info text-start ttl-sm-mb-0">
                                                <h6><i class="fa fa-book"></i> Completed lessons</h6>
                                                <span>{{ groupData.completed_lessons }}</span>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div class="col-sm-12 col-lg-4 order-sm-0 order-xl-1">
                                    <div class="user-designation">
                                        <div class="title">
                                            <a target="_blank" href="">{{ groupData.teacher }}</a>
                                        </div>
                                        <div class="desc mt-2">Teacher</div>
                                    </div>
                                </div>
                                <div class="col-sm-6 col-lg-4 order-sm-2 order-xl-2">
                                    <div class="row">
                                        <div class="col-md-6">
                                            <div class="ttl-info text-start ttl-xs-mt">
                                                <h6><i class="fa fa-tasks"></i> Goup Number</h6>
                                                <span>{{ groupData.id }}</span>
                                            </div>
                                        </div>
                                        <div class="col-md-6">
                                            <div class="ttl-info text-start ttl-sm-mb-0">
                                                <h6><i class="fa fa-users"></i> Group name</h6>
                                                <span>{{ groupData.name }}</span>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <hr>
                        </div>
                    </div>
                </div>
                <div class="col-sm-12" style="width: 100%;">
                    <div class="card">
                        <div class="card-header">
                            <h3>Schedul</h3>
                        </div>
                        <div class="table-responsive">
                            <table class="table">
                                <thead>
                                    <tr class="border-bottom-primary">
                                        <th scope="col">Group</th>
                                        <th scope="col">Session</th>
                                        <th scope="col">Room</th>
                                        <th scope="col">Weekday</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr>
                                        <td>{{ schedule.group }}</td>
                                        <td>{{ schedule.session }}</td>
                                        <td>{{ schedule.room }}</td>
                                        <td>{{ schedule.weekday }}</td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>
                    </div>
                </div>
                <TableOfStudents/>
            </div>
        </div>
    </div>
</template>
<script>
import { mapState } from "vuex"
import TableOfStudents from '@/pages/group/TableOfStudents.vue'
export default {
    components: {
        TableOfStudents
    },
    data() {
        return {
            id: this.$route.params.id,
        }
    },
    computed: {
        ...mapState('group', ['groupData']),
        ...mapState('schedule', ['schedule'])
    },
    mounted() {
        this.getGroupById()
        this.getschedule()
    },
    methods: {
        getGroupById() {
            this.$store.dispatch('group/getGroupDataWithId', this.id)
        },
        getschedule() {
            this.$store.dispatch('schedule/getScheduleById',this.id)
        }

    }
}
</script>
<style scoped></style>