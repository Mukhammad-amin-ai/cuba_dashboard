<template>
    <div>
        <select class="form-select" id="status" v-model="status" v-if="this.$store.state.role.choosed">
            <option v-for="user in roleArray" :key="user">
                {{ user.name.toUpperCase() }}
            </option>
        </select>
    </div>
</template>
<script>
import { mapState } from 'vuex';
export default {
    
    computed: {
        ...mapState('role', ['roleArray'])
    },
    mounted() {
        this.getAllRole()
    },
    methods: {
        getAllRole() {
            this.$store.dispatch("role/getRole")
        }
    }
}
</script>
<style scoped></style>