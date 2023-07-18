<template>
  <v-col>
    <v-row>
      <v-img
        :src="`/photo/6.jpg`"
        style="height: 100vh;"
        fit>

        <div class="overlay"/>

        <v-row>
          <v-col>
            <v-flex style="text-align: center;">
              <v-btn color="primary" :style="'font-size: 14px; '+($vuetify.breakpoint.mdAndUp ? 'margin-top: 340px;' : 'margin-top: 18vh;')" @click="() => { this.$router.push('/'); }" class="rounded-btn" light rounded>
                Cjenik
              </v-btn>
            </v-flex>
            <v-row :class="`mx-auto`" justify="center" :style="$vuetify.breakpoint.mdAndUp ? 'width: 100vw;' : ''">
              <div class="text-area-page" :style="$vuetify.breakpoint.mdAndUp ? 
              'width: 80vw; top: 400px; max-height: calc(100% - 500px);' : 
              'width: 90vw; top: 26vh; max-height: 70vh;'">
                <span class="ma-3" style="width: 100%; text-align: center;" 
                  v-html="pages[$route.params.id].mobile_content">
                </span>
              </div>
            </v-row>
          </v-col>
        </v-row>
      </v-img>
    </v-row>
  </v-col>
</template>

<script lang="ts">
import { Vue, Component, Action, namespace, Getter } from 'nuxt-property-decorator';

@Component({ layout: 'default' })
  export default class DetailPage extends Vue {
    data() {
      return require("static/specs.json");
    }

    mounted() {
      // @ts-ignore
      this.$gtag.pageview('/detail/price');
    }
  }

</script>

<style lang="scss">
.overlay {
  opacity: 0.5;
  background-color: black;
  pointer-events: none;
  position: absolute;
  top: 0;
  left: 0;
  width: 100% !important;
  height: 100% !important;
}
</style>
