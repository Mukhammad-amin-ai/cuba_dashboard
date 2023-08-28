<template >
  <Breadcrumbs title="Blog Detail" main="Schedule" />
  <div class="container-fluid mb-3">
    <div class="card">
      <div class="card-header">
        <!-- <h4>Choosed Branch {{  }}</h4> -->
        <div class="mb-3" style="width: 30%;">
          <label for="weekday_id" class="form-label">Choose Branch </label>
          <select class="form-select" aria-label="Default select example" v-model="choosedBranch">
            <option :value="item.id" v-for="item in branchData" :key="item">{{ item.name }}
            </option>
          </select>
        </div>
      </div>
      <div class="container-fluid d-flex p-10">
        
        <calendar />
        <div class="col-sm-12" style="width: 50%; ">
            <div class="card">
                <smallSpinner />
                <choose />
                <div class="card-header">
                    <h3>Table of Schedule</h3>
                    <p>{{ this.$store.state.schedule.day }}</p>
                </div>
                <div class="table-responsive">
                    <table class="table">
                        <thead>
                            <tr class="border-bottom-primary">
                                <th scope="col">Group</th>
                                <th scope="col">Session</th>
                                <th scope="col">Room</th>
                                <th scope="col">Weekday</th>
                                <!-- <th scope="col">Edit</th>
                                <th scope="col">Delete</th> -->
                            </tr>
                        </thead>
                        <tbody>
                            <tr v-for='item in scheduleData.data' :key="item" v-if="this.$store.state.schedule.checker">
                                <td>{{ item.group.name }}</td>
                                <td>{{ item.session.duration }}</td>
                                <td>{{ item.room.name }}</td>
                                <td>{{ item.weekday.name }}</td>
                                <!-- <td>
                                    <button type="button" class="btn btn-primary" @click="change">
                                        <i class="icofont icofont-pencil-alt-5"></i>
                                    </button>
                                </td>
                                <td>
                                    <button type="button" class="btn btn-danger" @click="deleteSchedule(item.id)">
                                        <i class="icofont icofont-ui-delete"></i>
                                    </button>
                                </td> -->
                            </tr>
                            <tr v-else>
                                <td>No data</td>
                                <td></td>
                                <td></td>
                                <td></td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            </div>
            <!-- <button type="button" class="btn btn-success" @click="change">Create Schedule</button> -->
        </div>
    </div>
    </div>
  </div>


</template>
<script>
// import spiner from '@/components/ui/spiner.vue'
import calendar from "@/pages/advance/calendar.vue"
import smallSpinner from "@/components/ui/smallSpinner.vue"
import choose from "@/components/ui/choose.vue"
import { mapState } from 'vuex'
export default {

  data() {
    return {

    }
  },
  components:{
    calendar,
    smallSpinner,
    choose
  },
  computed: {
    ...mapState('schedule', ['schedule']),
    ...mapState('branche', ['branchData']),
    ...mapState('schedule', ['scheduleData'])
  },
  mounted() {
    this.getschedule()
    this.branch()
  },
  methods: {
    getschedule() {
      this.$store.dispatch('schedule/getSchedule')
    },
    branch() {
      this.$store.dispatch('branche/getBranches')
    }
  }
}
</script>
<style scoped ></style>