<template >
    <div class="container mt-5">
        <h2>Form Example</h2>
        <form @submit.prevent="submitForm">
            <div class="mb-3">
                <label for="group_id" class="form-label">Group ID</label>
                <input type="text" class="form-control" id="group_id" />
            </div>
            <div class="mb-3">
                <label for="weekday_id" class="form-label">Weekday ID</label>
                <input type="text" class="form-control" id="weekday_id" />
            </div>

            <div class="mb-3">
                <label for="session_id" class="form-label">Session ID</label>
                <input type="text" class="form-control" id="session_id" />
            </div>
            <div class="mb-3">
                <label for="room_id" class="form-label">Room ID</label>
                <input type="text" class="form-control" id="room_id" />
            </div>
            <button type="submit" class="btn btn-primary">Submit</button>
        </form>
    </div>
</template>
<script>
export default {

}
</script>
<style scoped></style>