<template lang="">
  <div class='container-fluid '>
    <!-- <div class="row">
      </div> -->

        <calendar/>
        <div class="col-sm-12" style="width: 70%;">
          <div class="card">
      <!-- <spiner/> -->
      <div class="card-header">
        <h3>Basic Table With Border Bottom Color</h3>
      </div>
      <div class="table-responsive">
        <table class="table">
          <thead>
            <tr class="border-bottom-primary">
              <!-- <th scope='col'>id</th> -->
              <th scope="col">Group</th>
              <th scope="col">Session</th>
              <th scope="col">Room</th>
              <th scope="col">Weekday</th>
            </tr>
          </thead>
          <tbody>
            <tr v-for='item in schedule.data' :key="item">
            <!-- <td >{{item.id}}</td> -->
            <td >{{item.group}}</td>
            <td >{{item.session}}</td>
            <td >{{item.room}}</td>
            <td >{{item.weekday}}</td>
            </tr>
          </tbody>
        </table>
      </div>
      
    </div>
    <!-- <nav aria-label="Page navigation example">
      <ul class="pagination" >
    <li class="page-item">
      <a class="page-link" href="#">\ previous</a>
    </li>
    <li class="page-item"><a class="page-link" href="#">1</a></li>
    <li class="page-item"><a class="page-link" href="#">2</a></li>
    <li class="page-item"><a class="page-link" href="#">3</a></li>
    <li class="page-item"><a class="page-link" href="#">Next</a></li>
  </ul>
</nav> -->
  </div>
    </div>
</template>
<script>
import spiner from '@/components/ui/spiner.vue'
import calendar from '../branche/calendar.vue'
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
/* .container-fluid {
  display: flex;
  justify-content: space-between;
  padding: 30px
} */
</style>