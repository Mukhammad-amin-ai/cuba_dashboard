<template>
    <div>
        <Breadcrumbs main="Dashboard" title="default" />
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

export default {
    components: {
        WelcomeCard,
        PurchaseSaleCard,
    },
};
</script>
