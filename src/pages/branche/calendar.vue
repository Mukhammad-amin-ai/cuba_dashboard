<template>
    <div>
        <div class="container-fluid calendar-basic">
            <div class="card"  style="width: 100%;" >
                <div class="card-body">
                    <div class="row" id="wrap">
                        <div class="col-xxl-9 box-col-70">
                            <div class="calendar-default" id="calendar-container" >
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
                // headerToolbar: {
                //     left: "prev,next today",
                //     center: "title",
                //     right: "dayGridMonth,timeGridWeek,timeGridDay",
                // },
            },
        };
    },
};
</script>
<style scoped>
.calendar{
    width: 100%;
    /* height: 50vh; */
}
</style>