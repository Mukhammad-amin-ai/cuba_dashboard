<template >
    <div>
        
    </div>
</template>
<script>
import { mapState } from 'vuex';
export default {
    computed:{
        ...mapState('role',['roleArray'])
    },
    mounted(){
        this.getAllRole()
    },
    methods:{
        getAllRole(){
            this.$store.dispatch("role/getRole")
        }
    }
}
</script>
<style scoped>
    
</style>