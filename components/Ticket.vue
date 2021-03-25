<template>
    <v-card>
        <v-card-title>
            <h1 class="display-1 font-weight-bold">
                {{ ticket.firstname }} {{ ticket.lastname }}
            </h1>
        </v-card-title>
        <v-card-subtitle>
            <p>
                {{ ticket.currentJob }}
            </p>
             <p>
                {{ ticket.address }}
            </p>
        </v-card-subtitle>
        <v-card-text>
            <p>status {{ ticket.status === false ? "Pending" : "Accepted"}}</p>
        </v-card-text>
       <v-container>
          <v-row>
              <v-col sm="12" md="6">
                <v-btn color="error" block @click="$emit('delete', ticket.id)">
                    Delete Todo
                </v-btn>
              </v-col>
              <v-col sm="12" md="6">
                 <v-btn color="secondary" block @click="$emit('update', ticket.id)">
                    Update Todo
                </v-btn>
              </v-col>
          </v-row>
       </v-container>
    </v-card>
</template>
<script>
export default {
    props : {
        ticket : {
            type : Object
        }
    }
}
</script>