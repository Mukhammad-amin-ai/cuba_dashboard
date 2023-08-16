<template >
    <div class="container-fluid p-10">
        <div class="card p-20">
            <div class="container">
                <h1>Create Teacher</h1>
                <form>
                    <div class="mb-3">
                        <label for="firstname" class="form-label">First Name</label>
                        <input type="text" class="form-control" id="firstname" placeholder="Enter first name" required
                            v-model="firstname">
                    </div>
                    <div class="mb-3">
                        <label for="lastname" class="form-label">Last Name</label>
                        <input type="text" class="form-control" id="lastname" placeholder="Enter last name" required
                            v-model="lastname">
                    </div>
                    <div class="mb-3">
                        <label for="email" class="form-label">Email</label>
                        <input type="email" class="form-control" id="email" placeholder="Enter email" required
                            v-model="email">
                    </div>
                    <div class="mb-3">
                        <label for="contact_no" class="form-label">Contact Number</label>
                        <input type="tel" class="form-control" id="contact_no" placeholder="Enter contact number" required
                            v-model="contact_no">
                    </div>
                    <div class="mb-3">
                        <label for="status" class="form-label">Status</label>
                        <select class="form-select" id="status" v-model="is_assistant">
                            <option :value=true>Active</option>
                            <option :value=false>Inactive</option>
                        </select>
                    </div>
                  
                    <button type="submit" class="btn btn-primary" @click.prevent="createStudent">Create Teacher</button>
                </form>
            </div>
        </div>

    </div>
</template>
<script>
export default {
    data() {
        return {
            firstname: "",
            lastname: "",
            email: "",
            contact_no: "",
            is_assistant: Boolean
        }
    }

}
</script>
<style ></style>