<template >
    <div class="col-xxl-4 col-sm-6 box-col-6">
        <div class="card profile-box">
            <div class="card-body">
                <div class="media">
                    <div class="media-body">
                        <div class="greeting-user">
                            <h4 class="f-w-600 mb-0">Branch</h4>
                            <p v-if="nameOfBranch">
                                {{ nameOfBranch.name }}
                            </p>
                        </div>
                    </div>
                </div>
                <div class="badge f-10 p-50" id="txt"></div>
            </div>
        </div>
    </div>
</template>
<script>
export default {
    props: {
        nameOfBranch: String
    }
}
</script>
<style scoped>
.media{
    padding: 56px;
}


</style>