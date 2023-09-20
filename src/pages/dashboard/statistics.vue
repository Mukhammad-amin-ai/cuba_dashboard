<template >
    <div class="cover ">
        <div class="card2">
            <div class="left-text">
                <h4>{{ statisticsOfBranch }}</h4>
                <span class="f-light">
                    <!-- {{ puechaseSales.title }} -->
                    {{ nameOf }}
                </span>
            </div>
            <div class="right-img">
                <img :src="link2" alt="#"> 
            </div>
        </div>
    </div>
</template>
<script>
export default {
    props: {
        statisticsOfBranch: String,
        nameOf: String,
        link2: String
    },

}
</script>
<style scoped>
.cover {
    width: 23%;
    height: 100px;
    border-radius: 10px;
    margin-bottom: 10px;
}

.card2 {
    width: 100%;
    height: 100%;
    display: flex;
    background-color: #fff;
    border-radius: 10px;
    justify-content: space-between;
    padding: 10px;
}

.left-text {
    width: 50%;
    height: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
}
.right-img {
    width: 50%;
    height: 100%;
}
.right-img img{
    width: 100%;
    height: 100%; 
}   
</style>