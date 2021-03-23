<template>
   <div>
       {{ tickets }}
   </div>
</template>
<script>
import { mapGetters } from "vuex";
export default {
    computed:{
       ...mapGetters({
           tickets : "tickets/GET_ALL_TICKETS"
       })
    },
}
</script>