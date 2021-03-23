<template>
    <div>
        <v-row justify="center">
            <v-col sm="12" md="6">
                <v-card
                    :loading="progress"
                    :disabled="progress"
                >
                    <v-container>
                        <h1 class="display-1 text-center my-5 font-weight-bold">Ticket Submiting</h1>
                        <v-form
                            @submit="submit_ticket"
                            action="/"
                        >
                           <v-row>
                               <v-col sm="12" md="6">
                                    <v-text-field label="First Name" placeholder="Your First Name" :value="forms.firstname" @input="CHANGE_INPUT({value : $event, type : 'firstname'})"/>
                               </v-col>
                               <v-col sm="12" md="6">
                                    <v-text-field label="Last Name" placeholder="Your Last Name" :value="forms.lastname" @input="CHANGE_INPUT({value : $event, type : 'lastname'})"/>
                               </v-col>
                               <v-col cols="12">
                                    <v-text-field label="Current Job" placeholder="Your Current Job" :value="forms.currentJob" @input="CHANGE_INPUT({value : $event, type : 'currentJob'})"></v-text-field>
                               </v-col>
                               <v-col cols="12">
                                  <v-textarea label="address" placeholder="Please input your address" :value="forms.address" @input="CHANGE_INPUT({value : $event, type : 'address'})"/>
                               </v-col>
                               <v-col cols="12" class="text-center">
                                     <v-btn type="submit" color="primary">Submit Data</v-btn>
                               </v-col>
                           </v-row>
                        </v-form>
                    </v-container>
                </v-card>
            </v-col>
        </v-row>
        <div v-if="tickets.length > 0">
            <h2 class="text-center my-3">List of tickets</h2> <br/>
            <v-row>
                 <v-col v-for="(ticket, index) in tickets" :key="index" cols="12" md="4">
                <Card :ticket="ticket"/>
            </v-col>
            </v-row>
        </div>
        <v-row v-else>
            <v-col class="text-center">
                 <h2 class="text-center my-3">There is not data</h2>
            </v-col>
        </v-row>
    </div>    
</template>
<script>
import { mapActions, mapGetters } from "vuex";
import Card from "@/components/Ticket";
export default {
    name : "Homepage",
    components : {
      Card
    },
    computed : {
        ...mapGetters([
            "forms",
        ]),
        ...mapGetters({
           tickets : "tickets/GET_ALL_TICKETS",
           progress : "tickets/GET_PROGRESS"
       })
    },
    methods : {
        ...mapActions([
            "CHANGE_INPUT",
        ]),
        submit_ticket(e){
            e.preventDefault();
            this.$store.dispatch("tickets/SUBMIT_TICKET", this.forms);
            this.$store.dispatch("CLEAR_FORM");
        }
    },
}
</script>