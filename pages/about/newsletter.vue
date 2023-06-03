<template>
    <div class="pb-15 justify-center">
        <div class="p-4">
            <v-card-title class="text-h6 text-md-h5 text-lg-h4">Newsletter</v-card-title>
        </div>

        <div class="d-flex justify-center items-center">
            <!-- <v-card width="80%" class="pa-5">
                <v-card-subtitle class="flex font-weight-medium justify-center ma-5">
                    Join our mailing list
                </v-card-subtitle>
                <v-card-title class="flex justify-center text-h3 font-weight-normal ma-10 w-1/2">
                    Get the best stories from the Horizon Equity Partners community.
                </v-card-title>

                <v-text-field
                    hide-details="auto"
                    label="Email address"
                    type="email"
                    variant="solo"
                    class="w-2/5"></v-text-field>
                <v-btn 
                    block 
                    rounded="xl"
                    size="large"
                    variant="flat"
                    color="black" 
                    text-color="white"
                    width="20%">Submit</v-btn>
            </v-card> -->

             <v-card
                width="80%" 
                class="pa-5"
                variant="outlined"
            >
                <v-card-item>
                    <div>
                        <div class="text-overline mb-1 flex justify-center ">
                        Join our mailing list
                        </div>
                        <div class="flex justify-center text-h3 font-weight-normal ma-10">
                        Get the best stories from the Horizon Equity Partners community.
                        </div>
                        
                    </div>
                </v-card-item>
                 <v-card-actions>
                    <v-text-field
                    ref="inputRef"
                    hide-details="auto"
                    label="Email address"
                    type="email"
                    variant="solo"
                    clearable
                    :rules="emailRules"></v-text-field>

                    <v-btn  
                    rounded="xl"
                    size="large"
                    variant="flat"
                    color="black" 
                    text-color="white"
                    width="20%"
                    >
                        Submit
                    </v-btn>

                    <v-dialog
                        v-model="dialog"
                        activator="parent"
                        width="auto"
                    >
                        <v-card>
                        <v-card-text>
                            Thank you for joining us!
                        </v-card-text>
                        <v-card-actions>
                            <v-btn 
                            block
                            rounded="xl"
                            size="large"
                            variant="flat"
                            color="black" 
                            text-color="white"
                            @click="popUp">Close</v-btn>
                        </v-card-actions>
                        </v-card>
                    </v-dialog>
                </v-card-actions>
             </v-card>
        </div>
    </div>
</template>

<script>
  export default {
    data: () => ({
      emailRules: [ 
        v => /^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/.test(v) || 'E-mail must be valid'
      ],
      dialog: false,
      disabled: true
    }),
    methods:{
       clearInput() {
          this.$refs.inputRef.reset()
       },
       popUp() {
        this.dialog = true
       }
    }
  }
</script>

<style scoped></style>