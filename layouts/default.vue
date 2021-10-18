<template>
  <v-app dark>
    <v-main>
      <v-container fluid class="pa-0" style="height: 100vh; width: 100vw;">

        <v-app-bar
          :color="drawer ? '#388e3c' : 'transparent'"
          dark
          prominent
          style="position: fixed; z-index: 10; max-height: 60px; box-shadow: none;"
          v-if="$vuetify.breakpoint.xs"
        >
          <v-app-bar-nav-icon width="60px" height="60px" @click.stop="drawer = !drawer" class="top-menu-icon"></v-app-bar-nav-icon>

          <v-spacer></v-spacer>

          <!-- <v-btn icon>
            <v-icon>mdi-magnify</v-icon>
          </v-btn>

          <v-btn icon>
            <v-icon>mdi-filter</v-icon>
          </v-btn> -->

          <v-btn icon class="mr-2 mt-3">
            <v-img
              v-if="!drawer"
              src="sound_off.svg"
              style="height: 30px; text-align: center;"
              contain
            />  
          </v-btn>
        </v-app-bar>

        <v-navigation-drawer
          v-model="drawer"
          absolute
          bottom
          temporary
          color="#388e3c"
        >
          <v-list
            nav
            dense
          >
            <v-list-item-group
              v-model="group"
              active-class="deep-purple--text text--accent-4"
            >
              <v-list-item>
                <v-list-item-title style="font-size: 18px;">Hrvatska</v-list-item-title>
              </v-list-item>

              <v-list-item>
                <v-row justify="space-around" class="mx-12 py-8" align-items="center">
                  <v-flex xs="3">
                    <a href="https://www.instagram.com/squadom.hr/">
                      <v-img 
                        src="instagram.svg"
                        style="width: 60x; height: 60px;"
                        contain
                      />
                    </a>
                  </v-flex>
                  <v-flex xs="3">
                    <a href="https://www.facebook.com/squadom.hr">
                      <v-img 
                        src="fb.svg"
                        style="width: 60x; height: 60px;"
                        contain
                      />
                    </a>
                  </v-flex>
                  <v-flex xs="3">
                    <v-img
                      src="youtube.svg"
                      style="width: 60x; height: 60px;"
                      contain
                    />
                  </v-flex>
                  <v-flex xs="3">
                    <v-img
                      src="trip.svg"
                      style="width: 60x; height: 60px;"
                      contain
                    />
                  </v-flex>
                </v-row>
              </v-list-item>

              <v-list-item>
                <v-list-item-title style="font-weight: bold; font-size: 22px;">PRIVATE POLICY</v-list-item-title>
              </v-list-item>
            </v-list-item-group>
          </v-list>
        </v-navigation-drawer>

        <nuxt />
        <v-row :style="`${$vuetify.breakpoint.smAndUp ? '' : 'pointer-events: none;'} position: fixed; left: 45px; right: 45px; top: 0; z-index: 12; margin-top: ${$vuetify.breakpoint.smAndUp ? '78px' : '0'};`">
          <v-col>
            <v-row class="mx-auto" :style="$vuetify.breakpoint.lgAndUp ? 'width: 59vw;' : ($vuetify.breakpoint.mdAndDown ? 'width: 70vw;' : '')">
              <v-col>
                <v-row justify="space-around">
                  <v-col style="position: relative; min-width: 480px;" xs="6" sm="6" md="6" lg="6" xl="6">
                    <NuxtLink to="/">
                      <v-img 
                        src="logo.svg"
                        :style="`width: ${$vuetify.breakpoint.smAndUp ? '500px' : ($vuetify.breakpoint.width-80)+'px'}; 
                        height: 174px; ${$vuetify.breakpoint.smAndUp ? 'position: absolute; left: 20px; top: 0;' : 
                        'position: relative; margin: 0 auto;'}`"
                        contain
                      />
                    </NuxtLink>
                    <a href="https://www.instagram.com/squadom.hr/" v-if="$vuetify.breakpoint.smAndUp">
                      <v-img 
                        src="instagram.svg"
                        style="width: 30x; height: 30px; position: absolute; left: 64px; top: 27px;"
                        contain
                      />
                    </a>
                    <a href="https://www.facebook.com/squadom.hr" v-if="$vuetify.breakpoint.smAndUp">
                      <v-img 
                        src="fb.svg"
                        style="width: 30x; height: 30px; position: absolute; left: 98px; top: 27px;"
                        contain
                      />
                    </a>
                    <v-img v-if="$vuetify.breakpoint.smAndUp"
                      src="youtube.svg"
                      style="width: 30x; height: 30px; position: absolute; left: 132px; top: 27px;"
                      contain
                    />
                    <v-img v-if="$vuetify.breakpoint.smAndUp"
                      src="trip.svg"
                      style="width: 30x; height: 30px; position: absolute; left: 166px; top: 27px;"
                      contain
                    />
                  </v-col>
                  <v-col xs="6" sm="6" md="6" lg="6" xl="6" :style="$vuetify.breakpoint.width > 1630 ? 'margin-top: 80px;' : 'margin-top: '+($vuetify.breakpoint.smAndUp ? '140px;' : '-30px;')">
                    <a href="mailto:info@squadom.hr">
                      <v-img 
                        src="label_white.svg"
                        style="height: 57px;"
                        contain
                      />
                    </a>
                  </v-col>
                </v-row>
              </v-col>
            </v-row>
          </v-col>
        </v-row>
      </v-container>
    </v-main>
  </v-app>
</template>

<script>
export default {
  data () {
    return {
      fixed: false,
      title: 'Squadom.hr',
      drawer: false,
      group: null
    }
  },

  watch: {
      group () {
        this.drawer = false
      },
  },

  methods: {
    onScroll (e) {
      if (e.deltaY > 0 && this.$router.currentRoute.name !== 'lokacija') {
        this.$router.push('lokacija')
      } else if (e.deltaY < 0 && 
          this.$router.currentRoute.name !== 'index' && 
          this.$router.currentRoute.name !== '/' && 
          this.$router.currentRoute.name !== '') {
        this.$router.push('/')
      }
    },

    handleTouchStart (e) {
      var touchobj = e.changedTouches[0]
      dist = 0
      startX = touchobj.pageX
      startY = touchobj.pageY
      startTime = new Date().getTime() // record time when finger first makes contact with surface
      e.preventDefault()
    },

    handleTouchMove(e) {
      e.preventDefault() // prevent scrolling when inside DIV
    },

    handleTouchEnd(e) {
        var touchobj = e.changedTouches[0]
        distX = touchobj.pageX - startX // get horizontal dist traveled by finger while in contact with surface
        distY = touchobj.pageY - startY // get vertical dist traveled by finger while in contact with surface
        elapsedTime = new Date().getTime() - startTime // get time elapsed
        if (elapsedTime <= allowedTime){ // first condition for awipe met
            if (Math.abs(distX) >= threshold && Math.abs(distY) <= restraint){ // 2nd condition for horizontal swipe met
                swipedir = (distX < 0)? 'left' : 'right' // if dist traveled is negative, it indicates left swipe
            }
            else if (Math.abs(distY) >= threshold && Math.abs(distX) <= restraint) { // 2nd condition for vertical swipe met
                if (distY < 0) {
                  this.$router.push('lokacija')
                } else if (distY >= 0  && 
                  this.$router.currentRoute.name !== 'index' && 
                  this.$router.currentRoute.name !== '/' && 
                  this.$router.currentRoute.name !== '') { // if dist traveled is negative, it indicates up swip
                  
                  this.$router.push('/')
                }
                e.preventDefault()
            }
        }
    }
  },

  created () {
      if (process.client) {
          // window.addEventListener('wheel', this.onScroll);

          // window.addEventListener("touchstart", this.handleTouchStart, false);
          // window.addEventListener("touchend", this.handleTouchEnd, false);
          // window.addEventListener("touchmove", this.handleTouchMove, false);

          // window.addEventListener("touchcancel", this.handleTouchCancel, false);

          // set on scroll
          // window.addEventListener('scroll', this.detectScrollMode);
          // init
          // this.detectScrollMode();
      }
  },

  destroyed () {
      if (process.client) { 
          // window.removeEventListener('wheel', this.onScroll);

          // window.addEventListener("touchstart", this.handleTouchStart, false);
          // window.addEventListener("touchend", this.handleTouchEnd, false);
          // window.addEventListener("touchmove", this.handleTouchMove, false);

          // window.addEventListener("touchcancel", this.handleTouchCancel, false);
      }
  }
}
</script>
<style lang="scss">
  .text-normal {
    font-size: 24pt;
  }

  .rounded-btn {
    height: 20px;
    min-height: 20px !important;
    padding: 15px 15px !important;
    width: 100px;
    font-size: 10pt;
    font-weight: 400;
    text-transform: none !important;
    margin-top: 15px;
    margin-left: 5px;
    margin-right: 5px;
  }

  .v-btn:not(.v-btn--round).v-size--default {
    height: 20px;
  }

  .text-area {
    bottom: 200px;
    max-height: 50%;
    overflow-y: scroll;
    width: 58vw;
    background-color: #009c00d0;
    position: fixed;
    display: flex;
    border-radius: 20px;
    align-items: center;
    color: white;

    & a {
      pointer-events: all;
      color: lightblue !important;
    }
  }

  .top-menu-icon .v-icon {
    font-size: 36px !important;
  }

  .v-navigation-drawer--bottom.v-navigation-drawer--is-mobile {
    bottom: auto;
    top: 60px !important;
    max-height: 70%;
    background-color: #388e3c;
    position: fixed;
  }

  .v-list--nav {
    top: 200px;
    width: 100%;
    position: absolute;
  }

  .v-list--nav .v-list-item {
    border-top: 1px #50C878 solid;
    border-radius: 0;
    text-align: center;
  }
</style>
