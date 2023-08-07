<template lang="">
    <div class='container'>
     <div class="col-sm-12">
    <div class="card">
     <div class="card-header">
        <h3>Basic Table With Border Bottom Color</h3><span>Use a class<code>table</code> to any table, and
          <code>.border-bottom-*</code>class for Border bottom color</span>
      </div>
      <div class="table-responsive">
        <table class="table">
          <thead>
            <tr class="border-bottom-primary">
            <th scope='col'>id</th>
              <th scope="col">Group</th>
              <th scope="col">Session</th>
              <th scope="col">Room</th>
              <th scope="col">Weekday</th>
            </tr>
          </thead>
          <tbody>
            <tr v-for='item in schedule.data' :key="item">
            <td >{{item.id}}</td>
            <td >Group: {{item.group_id}}</td>
            <td >{{item.session}}</td>
            <td >{{item.room}}</td>
            <td >{{item.weekday}}</td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  </div>
    </div>
</template>
<script>
import {mapState} from 'vuex'
export default {
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
.container {
    padding: 30px
}

th {
    align-text: center
}
</style>