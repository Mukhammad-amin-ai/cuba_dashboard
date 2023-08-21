<template lang="">
  <div class='container-fluid '>
        <calendar />
        <div class="col-sm-12" style="width: 70%;">
          <div class="card">
      <div class="card-header">
        <h3>Basic Table With Border Bottom Color</h3>
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
            <tr v-for='item in schedule.data' :key="item">
            <td >{{item.group.name}}</td>
            <td >{{item.session.duration}}</td>
            <td >{{item.room.name}}</td>
            <td >{{item.weekday.name}}</td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  </div>
    </div>
</template>
<script>
import spiner from '@/components/ui/spiner.vue'
import calendar from "@/advance/calendar.vue"
import { mapState } from 'vuex'
export default {
  components: {
    spiner,
    calendar
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
}
</script>
<style scoped >

</style>