<template>
    <div>
        <Breadcrumbs main="Dashboard" title="default" />
        <!-- {{ json }} -->
        <div class="container-fluid">
            <div class="row widget-grid">
                <WelcomeCard />
                <PurchaseSaleCard />


            </div>
        </div>

    </div>
</template>
<script>
import WelcomeCard from "./defaultPage.vue";
import PurchaseSaleCard from "./purchase.vue";

let role = localStorage.getItem("role")

export default {
    components: {
        WelcomeCard,
        PurchaseSaleCard,
    },
    data(){
        return{
            json:role
        }
    }
};
</script>
