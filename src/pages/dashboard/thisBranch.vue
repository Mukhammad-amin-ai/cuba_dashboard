<template >
    <div class="col-xxl-auto col-xl-3 col-sm-6 box-col-6">
        <div class="row">
            <!-- -->
            <div class="col-xl-12">
                <div class="card widget-1">
                    <div class="card-body">
                        <div class="widget-content">
                            <div class="widget-round primary">
                                <div class="bg-round">
                                    <svg class="svg-fill">
                                        <use :xlink:href="require('@/assets/svg/icon-sprite.svg') + `#stroke-home`">
                                        </use>
                                    </svg>
                                </div>
                            </div>
                            Branch name: <span v-if="nameOfBranch">
                                {{ nameOfBranch.name }}</span>
                            <span v-else> Loading...</span>
                        </div>

                    </div>
                </div>
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
<style scoped></style>