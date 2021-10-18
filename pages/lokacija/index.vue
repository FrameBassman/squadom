<template>
  <v-row>
    <v-img
      :src="`/photo/${photo_number}.jpg`"
      style="height: 100vh;"
      fit>

      <v-row style="position: absolute; left: 40px; right: 0; bottom: 56px; margin-bottom: 0;">
        <v-col>
          <v-row class="mx-auto" :style="$vuetify.breakpoint.mdAndUp ? 'max-width: 45vw;' : ''">
            <v-col>
              <v-row justify="space-around" align-content="center">
                <v-flex style="text-align: center;">
                  <v-btn :color="this.photo_number === 1 ? 'primary' : 'white'" @click="() => { this.photo_number = 1; }" class="rounded-btn" light rounded>
                      Avanture
                  </v-btn>
                </v-flex>
                <v-flex style="text-align: center;">
                  <v-btn :color="this.photo_number === 2 ? 'primary' : 'white'" @click="() => { this.photo_number = 2; }" class="rounded-btn" light rounded>
                      Lokacija
                  </v-btn>
                </v-flex>
                <v-flex style="text-align: center;">
                  <v-btn :color="this.photo_number === 3 ? 'primary' : 'white'" @click="() => { this.photo_number = 3; }"  class="rounded-btn" light rounded>
                      Vozila
                  </v-btn>
                </v-flex>
                <v-flex style="text-align: center;">
                  <v-btn :color="this.photo_number === 4 ? 'primary' : 'white'" @click="() => { this.photo_number = 4; }"  class="rounded-btn" light rounded>
                      Priroda
                  </v-btn>
                </v-flex>
                <v-flex style="text-align: center;">
                  <v-btn :color="this.photo_number === 5 ? 'primary' : 'white'" @click="() => { this.photo_number = 5; }" class="rounded-btn" light rounded>
                      O nama
                  </v-btn>
                </v-flex>
                <v-flex style="text-align: center;">
                  <v-btn :color="this.photo_number === 6 ? 'primary' : 'white'" @click="() => { this.photo_number = 6; }" class="rounded-btn" light rounded>
                      Cjenik
                  </v-btn>
                </v-flex>
                <v-flex style="text-align: center;">
                  <v-btn :color="this.photo_number === 7 ? 'primary' : 'white'" @click="() => { this.photo_number = 7; }" class="rounded-btn" light rounded>
                      Uvjeti
                  </v-btn>
                </v-flex>
                <v-flex style="text-align: center;">
                  <v-btn :color="this.photo_number === 8 ? 'primary' : 'white'" @click="() => { this.photo_number = 8; }" class="rounded-btn" light rounded>
                      Rezervacije
                  </v-btn>
                </v-flex>
                <v-flex style="text-align: center;">
                  <v-btn :color="this.photo_number === 9 ? 'primary' : 'white'" @click="() => { this.photo_number = 9; }" class="rounded-btn" light rounded>
                      Opuštanje
                  </v-btn>
                </v-flex>
              </v-row>
            </v-col>
          </v-row>
        </v-col>
      </v-row>
    </v-img>
  </v-row>
</template>

<script>
  export default {
    data () {
      return {
        text: 'center',
        photo_number: 1
      }
    },
  }

</script>

<style lang="scss">
</style>
