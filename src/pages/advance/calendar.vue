<template>
    <div class="half">
        <div class="container-fluid calendar-basic">
            <div class="card">
                <div class="card-body">
                    <div class="row" id="wrap">
                        <div class="col-xxl-9 box-col-70">
                            <div class="calendar-default" id="calendar-container">
                                <FullCalendar id="calendar" :options="calendarOptions" />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>
<script>
import FullCalendar from "@fullcalendar/vue3";
import dayGridPlugin from "@fullcalendar/daygrid";
import interactionPlugin from "@fullcalendar/interaction";
import timeGridPlugin from "@fullcalendar/timegrid";
import { mapMutations } from "vuex";
export default {
    components: {
        FullCalendar,
    },
    data() {
        return {
            calendarOptions: {
                plugins: [dayGridPlugin, interactionPlugin, timeGridPlugin],
                initialView: "dayGridMonth",
                dateClick: this.handleDateClick,
                editable: true,
                selectable: true,
                selectMirror: true,
                dayMaxEvents: true,
                firstDay: 1,
                weekends: true,
                events: [],
            },
            thisWillEmmit: 'hello world',
            id: this.$route.params.id,
        }
    },
    methods: {
        ...mapMutations('schedule',['setCheck']),
        ...mapMutations(['setSmallLoading']),

        async handleDateClick(info) {
            this.$store.dispatch('schedule/getIdofDay', info)
            const selectedDate = new Date(info.date);
            const setId = selectedDate.getDay();
            if(setId === 0){
                // this.$store.commit("setSmallLoading", false)
                // this.$store.commit("setCheck",false)
                this.setCheck(false)
                this.setSmallLoading(false)
                // console.log(this.$store.state.smallLoading);
            }
            let option = {
                branch_id: this.id,
                weekday_id: setId 
            }
            await this.$store.dispatch('schedule/getBranchSchedule', option)
        },
    },
};
</script>
<style scoped>
.half {
    width: 50%
}
</style>