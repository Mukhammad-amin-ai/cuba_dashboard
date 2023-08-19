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
                dayContent: this.handleDayRender,
                editable: true,
                selectable: true,
                selectMirror: true,
                dayMaxEvents: true,
                weekends: true,
                events: [],
            },
        };
    },
    methods: {
        hello(info) {
            // this.events.push({
            //     title: 'Новое событие',
            //     start: info.dateStr,
            //     allDay: true,
            // })
        },
        handleDateClick(info) {
            // console.log('Дата клика:', info.dateStr)
            this.calendarOptions.events.push({
                title: 'Новое событие',
                start: info.dateStr,
                allDay: true,
            })
            const selectedDate = new Date(info.dateStr)

            // Получаем день недели (0 - воскресенье, 1 - понедельник, и так далее)
            const dayOfWeek = selectedDate.getDay()

            // Преобразуем номер дня недели в строку
            let dayOfWeekString
            switch (dayOfWeek) {
                case 0:
                    dayOfWeekString = 'Sunday'
                    break
                case 1:
                    dayOfWeekString = 'Monday'
                    break
                case 2:
                    dayOfWeekString = 'Tuesday'
                    break
                case 3:
                    dayOfWeekString = 'Wednesday'
                    break
                case 4:
                    dayOfWeekString = 'Thursday'
                    break
                case 5:
                    dayOfWeekString = 'Friday'
                    break
                case 6:
                    dayOfWeekString = 'Saturday'
                    break
                default:
                    dayOfWeekString = 'unknown'
                    break
            }
            console.log('Выбран день недели:', dayOfWeekString)
        },
    }
};
</script>
<style scoped></style>