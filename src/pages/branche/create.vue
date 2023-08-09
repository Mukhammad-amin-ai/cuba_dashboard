<template >
    <div class="p-20">
        <div class="container-fluid">
            <div class="row">
                <div class="col-sm-12">
                    <div class="card">
                        <div class="card-body">
                            <div class="form theme-form">
                                <div class="row">
                                    <div class="col">
                                        <div class="mb-3">
                                            <label>Branche Name</label>
                                            <input class="form-control" type="text" placeholder="Branche Name *" v-model="name">
                                        </div>
                                    </div>
                                </div>
                                <div class="row">
                                    <div class="col">
                                        <div class="mb-3">
                                            <label>Location</label>
                                            <input class="form-control" type="text" placeholder="Location *" v-model="location">
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <button type="button" class="btn btn-success" @click="createBranche">Create</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>
<script>
export default {
    data() {
        return {
            location: '',
            name: ''
        }
    },
    methods: {
        createBranche() {
            const options = {
                location: this.location,
                name: this.name
            }
            this.$store.dispatch('branche/createBreanch', options)
        }
    }
}
</script>
<style></style>