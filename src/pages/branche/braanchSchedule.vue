<template >
    <div class="container p-10">
        <calendar/>
        <div class="list">
            <div class='container'>
                <div class="col-sm-12">
                    <div class="card">
                        <spiner />
                        <div class="card-header">
                            <h3> Table </h3>
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
                                    <tr>
                                        <td></td>
                                        <td></td>
                                        <td></td>
                                        <td></td>
                                        <td></td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>
                    </div>
                </div>
            </div>
        </div>

    </div>
</template>
<script >
import calendar from "@/pages/branche/calendar.vue"
export default {
   components:{
    calendar
   }
}
</script>
<style scoped>
.container {
    width: 100%;
    height: auto;
    display: flex;
    flex-direction: column;
    justify-content: space-around;
}



.list {
    width: 100%;
    height: auto;
}

</style>
 