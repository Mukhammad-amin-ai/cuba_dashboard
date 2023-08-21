<template>
    <div class="half">
        <div class="container-fluid calendar-basic" style="width: 100%;">
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
import { mapMutations, mapState } from "vuex";
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
                weekends: true,
                events: [],
            },
            thisWillEmmit:'hello world',
        };
    },
    methods: {
        ...mapMutations('schedule',[
            'setId'
        ]),
        handleDateClick(info) {
            const selectedDate = new Date(info.date)
            const dayOfWeek = selectedDate.getDay()
            this.setId(dayOfWeek) 
            // console.log(this.$store.state.schedule.idDay);
        },
    },
};
</script>
<style scoped>
.half {
    width: 50%
}
</style>