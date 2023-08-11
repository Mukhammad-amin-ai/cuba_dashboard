<template>
    <div class="container-fluid p-10">
        <div class="row">
            <div class="card">
                <div class="card-body">
                    <div class="form theme-form">
                        <div class="row">
                            <div class="col">
                                <div class="mb-3">
                                    <label>Group Name</label>
                                    <input class="form-control" type="text" placeholder="Group Name *">
                                </div>
                            </div>
                        </div>
                        <div class="mb-2">
                            <label class="col-form-label">Choose Teacher</label>
                            <select class="form-select" aria-label="Default select example">
                                <option selected>Open this select menu</option>
                                <option value="1">One</option>
                                <option value="2">Two</option>
                                <option value="3">Three</option>
                            </select>
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
            
        }
    }
}
</script>
<style></style>