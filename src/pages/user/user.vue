<template >
    <Breadcrumbs title="Blog Detail" main="Students" />
    <div class="container-fluid p-20">
        <spiner />
        <div class="row d-flex">
            <RouterLink to="student/create" class="select">
                <div class="card social-profile ">
                    <div class="card-body">
                        <i style="font-size: 50px;" class='bx bx-plus-circle'></i>
                    </div>
                </div>
            </RouterLink>
            <div class="col-xl-4 col-sm-6 col-xxl-3 col-ed-4 box-col-4">
                <!-- <RouterLink :to="{ path: 'student/' + item.id }"> -->
                <div class="card social-profile ">
                    <div class="card-body">
                        <div class="social-img-wrap">
                            <div class="social-img">
                                <img src="@/assets/images/avtar/3.jpg" alt="profile">
                            </div>
                            <div class="edit-icon">
                                <svg>
                                    <use href="@/assets/svg/icon-sprite.svg#profile-check"></use>
                                </svg>
                            </div>
                        </div>
                        <div class="social-details">
                            <h5 class="mb-1">
                                <!-- {{ item.firstname }} {{ item.lastname }} -->
                            </h5>
                            <span class="f-light"></span>
                            <ul class="social-follow d-flex" style="justify-content: space-between;">
                                <li class=" d-grid ">
                                    <h5 class="mb-0">Contact</h5>
                                    <span class="f-light"></span>
                                </li>
                                <li class=" d-grid">
                                    <h5 class="mb-0">Email</h5>
                                    <span class="f-light"></span>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
                <!-- </RouterLink> -->
            </div>
        </div>
    </div>
</template>
<script>
export default {

}
</script>
<style scoped>
.social-profile {
    background-image: none !important;
}

.select {
    transition: .3s all linear;
    transform: scale(1);
}

.select:hover {
    transform: scale(1.050);
}
</style>