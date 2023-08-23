<template >
    <div class="container mt-5">
        <h2>Form Example</h2>
        <!-- <form> -->
            <div class="mb-3">
                <label for="group_id" class="form-label">Group Name</label>
                <select class="form-select" aria-label="Default select example" v-model="choosedGroupId">
                    <option :value="item.id" v-for="item in groupData" :key="item">{{ item.name }}
                    </option>
                </select>
            </div>
            <div class="mb-3">
                <label for="weekday_id" class="form-label">Choose Weekday </label>
                <select class="form-select" aria-label="Default select example" v-model="choosedWeekId">
                    <option :value="item.id" v-for="item in weekday" :key="item">{{ item.day }}
                    </option>
                </select>
            </div>

            <div class="mb-3">
                <label for="session_id" class="form-label">Choose Session </label>
                <select class="form-select" aria-label="Default select example" v-model="choosedSessionId">
                    <option :value="item.id" v-for="item in sessionData" :key="item">{{ item.duration }}
                    </option>
                </select>
            </div>
            <div class="mb-3">
                <label for="room_id " class="form-label">Choose Room </label>
                <p style="margin-top: 10px;" v-if="room.links && room.links.length >= 2">
                    Floors : {{ room.links[1].label }} - {{ room.links[room.links.length - 2].label }}
                </p>
                <div class="d-flex " style="gap: 10px;">
                    <p>Floor: </p>
                    <input type="text" class="form-control " style="width: 100px;" id="room_id" v-model="floor"
                        @keyup="getRoom" />
                    <select class="form-select" aria-label="Default select example" v-model="choosedRoomId">
                        <option :value="item.id" v-for="item in room.data" :key="item">{{ item.name }}
                        </option>
                    </select>
                </div>
            </div>
            <button type="submit" class="btn btn-primary" @click="createSchedule">Create schedule</button>
        <!-- </form> -->
    </div>
</template>
<script>
import { mapState } from 'vuex';

export default {
    data() {
        return {
            weekday: [
                {
                    id: 1,
                    day: 'Monday'
                },
                {
                    id: 2,
                    day: 'Tuesday'
                },
                {
                    id: 3,
                    day: 'Wensday'
                },
                {
                    id: 4,
                    day: 'Thursday'
                },
                {
                    id: 5,
                    day: 'Friday'
                },
                {
                    id: 6,
                    day: 'Saturday'
                },
                {
                    id: 7,
                    day: 'Sunday'
                },
            ],
            choosedGroupId: '',
            choosedWeekId: '',
            choosedSessionId: "",
            choosedRoomId: "",
            id: this.$route.params.id,
            floor: ""
        }
    },
    computed: {
        ...mapState('group', ['groupData']),
        ...mapState('session', ['sessionData']),
        ...mapState("branche", ['room'])
    },
    mounted() {
        this.getGroup()
        this.getSession()
        this.getRoom()
    },
    methods: {
        getGroup() {
            this.$store.dispatch('group/getGroupData')
        },
        getSession() {
            this.$store.dispatch('session/getSession')
        },
        getRoom() {
            let more = {
                id: this.id,
                option: this.floor
            }
            this.$store.dispatch("branche/getRoomFloor", more)
        },
        createSchedule() {
            let option = {
                group_id: this.choosedGroupId,
                weekday_id: this.choosedWeekId,
                session_id: this.choosedSessionId,
                room_id: this.choosedRoomId,
                // branch_id:this.id
            }
            this.$store.dispatch("schedule/createSchedul" ,option)
        }

    },
}
</script>
<style scoped></style>