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
              <v-btn color="primary" style="margin-top: 350px;" @click="() => { this.$router.push('/'); }" class="rounded-btn" light rounded>
                Back
              </v-btn>
            </v-flex>
            <v-row :class="`mx-auto`" justify="center" :style="$vuetify.breakpoint.mdAndUp ? 'width: 100vw;' : ''">
              <div class="text-area-page" :style="$vuetify.breakpoint.mdAndUp ? 'width: 80vw;' : 'width: 90vw;'">
                <span class="ma-3" style="width: 100%; text-align: center;" 
                  v-html="pages[$route.params.id].content_mobile">
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
