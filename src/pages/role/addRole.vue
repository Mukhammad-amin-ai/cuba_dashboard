<template >
    <div>
        <Breadcrumbs title="Blog Detail" main="Add New Role" />
        <div class="container-fluid p-20">
            <form style="width: 50%;">
                <div class="mb-3">
                    <label for="firstname" class="form-label">Name of role</label>
                    <input type="text" class="form-control" id="firstname" required>
                </div>
                <div class="mb-3">
                    <label for="status" class="form-label">Branches</label>
                    <select class="form-select" id="status">
                        <option :value=1>Read</option>
                        <option :value=2>Read+Update</option>
                        <option :value=3>Read+Update+Create</option>
                        <option :value=4>Read+Update+Create+Delete</option>
                    </select>
                </div>
                <div class="mb-3">
                    <label for="status" class="form-label">Courses</label>
                    <select class="form-select" id="status">
                        <option :value=1>Read</option>
                        <option :value=2>Read+Update</option>
                        <option :value=3>Read+Update+Create</option>
                        <option :value=4>Read+Update+Create+Delete</option>
                    </select>
                </div>
                <div class="mb-3">
                    <label for="status" class="form-label">Teachers</label>
                    <select class="form-select" id="status">
                        <option :value=1>Read</option>
                        <option :value=2>Read+Update</option>
                        <option :value=3>Read+Update+Create</option>
                        <option :value=4>Read+Update+Create+Delete</option>
                    </select>
                </div>
                <div class="mb-3">
                    <label for="status" class="form-label">Students</label>
                    <select class="form-select" id="status">
                        <option :value=1>Read</option>
                        <option :value=2>Read+Update</option>
                        <option :value=3>Read+Update+Create</option>
                        <option :value=4>Read+Update+Create+Delete</option>
                    </select>
                </div>
                <div class="mb-3">
                    <label for="status" class="form-label">Parents</label>
                    <select class="form-select" id="status">
                        <option :value=1>Read</option>
                        <option :value=2>Read+Update</option>
                        <option :value=3>Read+Update+Create</option>
                        <option :value=4>Read+Update+Create+Delete</option>
                    </select>
                </div>
                <div class="mb-3">
                    <label for="status" class="form-label">Sessions</label>
                    <select class="form-select" id="status">
                        <option :value=1>Read</option>
                        <option :value=2>Read+Update</option>
                        <option :value=3>Read+Update+Create</option>
                        <option :value=4>Read+Update+Create+Delete</option>
                    </select>
                </div>
                <div class="mb-3">
                    <label for="status" class="form-label">Rooms</label>
                    <select class="form-select" id="status">
                        <option :value=1>Read</option>
                        <option :value=2>Read+Update</option>
                        <option :value=3>Read+Update+Create</option>
                        <option :value=4>Read+Update+Create+Delete</option>
                    </select>
                </div>
                <div class="mb-3">
                    <label for="status" class="form-label">Schedules</label>
                    <select class="form-select" id="status">
                        <option :value=1>Read</option>
                        <option :value=2>Read+Update</option>
                        <option :value=3>Read+Update+Create</option>
                        <option :value=4>Read+Update+Create+Delete</option>
                    </select>
                </div>
                <div class="mb-3">
                    <label for="status" class="form-label">Cashiers</label>
                    <select class="form-select" id="status">
                        <option :value=1>Read</option>
                        <option :value=2>Read+Update</option>
                        <option :value=3>Read+Update+Create</option>
                        <option :value=4>Read+Update+Create+Delete</option>
                    </select>
                </div>
                <div class="mb-3">
                    <label for="status" class="form-label">Access for courses</label>
                    <select class="form-select" id="status">
                        <option :value=1>Read</option>
                        <option :value=2>Read+Update</option>
                        <option :value=3>Read+Update+Create</option>
                        <option :value=4>Read+Update+Create+Delete</option>
                    </select>
                </div>
                <div class="mb-3">
                    <label for="status" class="form-label">Student search</label>
                    <select class="form-select" id="status">
                        <option :value=1>Read</option>
                        <option :value=2>Read+Update</option>
                        <option :value=3>Read+Update+Create</option>
                        <option :value=4>Read+Update+Create+Delete</option>
                    </select>
                </div>
                <div class="mb-3">
                    <label for="status" class="form-label">Payment addcard</label>
                    <select class="form-select" id="status">
                        <option :value=1>Read</option>
                        <option :value=2>Read+Update</option>
                        <option :value=3>Read+Update+Create</option>
                        <option :value=4>Read+Update+Create+Delete</option>
                    </select>
                </div>
                <div class="mb-3">
                    <label for="status" class="form-label">Payment Cashier</label>
                    <select class="form-select" id="status">
                        <option :value=1>Read</option>
                        <option :value=2>Read+Update</option>
                        <option :value=3>Read+Update+Create</option>
                        <option :value=4>Read+Update+Create+Delete</option>
                    </select>
                </div>
                <div class="mb-3">
                    <label for="status" class="form-label">Payment pay</label>
                    <select class="form-select" id="status">
                        <option :value=1>Read</option>
                        <option :value=2>Read+Update</option>
                        <option :value=3>Read+Update+Create</option>
                        <option :value=4>Read+Update+Create+Delete</option>
                    </select>
                </div>
                <div class="mb-3">
                    <label for="status" class="form-label">users</label>
                    <select class="form-select" id="status">
                        <option :value=1>Read</option>
                        <option :value=2>Read+Update</option>
                        <option :value=3>Read+Update+Create</option>
                        <option :value=4>Read+Update+Create+Delete</option>
                    </select>
                </div>
                <!-- <div class="mb-3">
                    <label for="lastname" class="form-label">Last Name</label>
                    <input type="text" class="form-control" id="lastname" placeholder="Enter last name" required>
                </div>
                <div class="mb-3">
                    <label for="email" class="form-label">Email</label>
                    <input type="email" class="form-control" id="email" placeholder="Enter email" required>
                </div>
                <div class="mb-3">
                    <label for="contact_no" class="form-label">Contact Number</label>
                    <input type="tel" class="form-control" id="contact_no" placeholder="Enter contact number" required>
                </div>
                <div class="mb-3">
                    <label for="status" class="form-label">Status</label>
                    <select class="form-select" id="status" >
                        <option :value=true>Active</option>
                        <option :value=false>Inactive</option>
                    </select>
                </div>
                <div class="mb-3">
                    <label for="group_id" class="form-label">Group ID</label>
                    <input type="number" class="form-control" id="group_id" placeholder="Enter group ID" required>
                </div>
                <div class="contaner">
                    <div class="d-flex" style="gap: 10px;">
                        <h4>Parents</h4>
                        <button type="button" class="btn btn-success" @click="addparent">Add</button>
                    </div>
                    <div class="mb-3">
                        <label for="parent_firstname" class="form-label">Parent First Name</label>
                        <input type="text" class="form-control" id="parent_firstname"
                            placeholder="Enter parent's first name" required>
                    </div>
                    <div class="mb-3">
                        <label for="parent_lastname" class="form-label">Parent Last Name</label>
                        <input type="text" class="form-control" id="parent_lastname" placeholder="Enter parent's last name"
                            required>
                    </div>
                    <div class="mb-3">
                        <label for="parent_email" class="form-label">Parent Email</label>
                        <input type="email" class="form-control" id="parent_email" placeholder="Enter parent's email"
                            required>
                    </div>
                    <div class="mb-3">
                        <label for="parent_contact_no" class="form-label">Parent Contact Number</label>
                        <input type="tel" class="form-control" id="parent_contact_no"
                            placeholder="Enter parent's contact number" required>
                    </div>
                </div> -->
                <button type="submit" class="btn btn-primary" @click.prevent="createStudent">Create Student</button>
            </form>

        </div>
    </div>
</template>
<script>
export default {

}
</script>
<style scoped></style>