<template>
    <div>
        <div class="container-fluid calendar-basic">
            <div class="card" style="width: 100%;">
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
import { mapState } from "vuex";
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
                // dayContent: this.processBackendData,
                editable: true,
                selectable: true,
                selectMirror: true,
                dayMaxEvents: true,
                weekends: true,
                events: [],
            },

        };
    },
    computed: {
        ...mapState('schedule', ['schedule'])
    },
    mounted() {
        this.getschedule()

    },
    methods: {
        getschedule() {
            this.$store.dispatch('schedule/getSchedule')
        }
    }
};
</script>
<style scoped></style>