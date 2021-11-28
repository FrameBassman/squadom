<template>
 <v-col>
  <v-row>
    <!-- <video-background
      :src="`/video/${video_number}.mp4`"
      style="height: 100vh;"
      muted="false"
      autoplay="true"
      preload="auto"
      playsWhen="canplay">
    </video-background> -->
    <v-carousel hide-delimiters height="100vh" v-model="video_number" :show-arrows="$vuetify.breakpoint.smAndUp">
      <v-carousel-item v-for="(item, vi) in videos"
        :key="vi">
        <video-background :id="`video_${item}`"
          :src="`/video/${item + '-' + season()}.mp4?nocache=true`"
          :poster="`/video/${item + '-' + season()}.jpg?nocache=true`"
          style="height: 100vh;">
        </video-background>
      </v-carousel-item>
    </v-carousel>
  </v-row>
  <v-row>
    <!-- <v-img
      :src="`/photo/${photo_number}.jpg`"
      style="height: 100vh; margin-top: 15px;"
      fit>
    </v-img> -->
    <v-carousel hide-delimiters style="margin-top: 15px;" height="100vh" v-model="photo_number" :show-arrows="$vuetify.breakpoint.smAndUp">
      <v-carousel-item
        v-for="(item, i) in photos"
        :key="i"
        :src="`/photo/${item+($vuetify.breakpoint.mdAndDown ? '-mob' : '')}.jpg`"
        :lazy-src="`/photo/${item+'-blurry'+($vuetify.breakpoint.mdAndDown ? '-mob' : '')}.jpg`"
      >
      </v-carousel-item>
    </v-carousel>
  </v-row>

  <v-row :class="`fadeclass${this.scrolledToBottom && this.texts[this.photo_number] ? '--visible' : ''}`" style="pointer-events: none;">
    <v-col>
      <v-row :class="`mx-auto`" justify="center" :style="$vuetify.breakpoint.mdAndUp ? 'width: 80vw;' : ''">
        <div class="call-button" :style="$vuetify.breakpoint.mdAndUp ? 'width: 50vw;' : 'width: 89vw;'" >
          <a href="mailto:info@squadom.hr">
            <span>
              REZERVIRAJTE TURU!
            </span>
          </a>
        </div>
        <div class="text-area" :style="$vuetify.breakpoint.mdAndUp ? 'width: 50vw;' : 'width: 89vw;'">
          <span class="ma-3" style="width: 100%; text-align: justify;" v-html="this.texts[this.photo_number] || ''">
          </span>
        </div>
      </v-row>
    </v-col>
  </v-row>

  <v-row :class="`fadeclass${this.scrolledToTop ? '--visible' : ''}`" 
    :style="`position: fixed; left: ${$vuetify.breakpoint.smAndUpmAndUp ? '40px' : '15px'}; 
    right: ${$vuetify.breakpoint.smAndUp ? '40px' : '15px'}; 
    bottom: ${$vuetify.breakpoint.smAndUp ? '86px' : '46px'}; margin-bottom: 0;`">
    <v-col>
      <v-row :class="`mx-auto`" :style="$vuetify.breakpoint.mdAndUp ? 'max-width: 650px;' : ''">
        <v-col>
          <v-row justify="space-around" align-content="stretch">
            <v-img v-if="$vuetify.breakpoint.smAndUp"
              src="sound_off.svg"
              class="mr-3"
              :style="`height: 30px; margin-top: 14px; text-align: center; ${this.isSoundEnabled ? 'filter: invert(43%) sepia(33%) saturate(842%) hue-rotate(73deg) brightness(99%) contrast(89%);' : ''}`"
              contain
              
              @click="this.toggleSound"
            />    
            <v-flex style="text-align: center;">
              <v-btn :color="this.video_number === 0 ? 'primary' : 'white'" @click="() => { this.video_number = 0; }" class="rounded-btn" light rounded>
                  Lokacija
              </v-btn>
            </v-flex>
            <v-flex style="text-align: center;">
              <v-btn :color="this.video_number === 1 ? 'primary' : 'white'" @click="() => { this.video_number = 1; }" class="rounded-btn" light rounded>
                  Rute
              </v-btn>
            </v-flex>
            <v-flex style="text-align: center;">
              <v-btn :color="this.video_number === 2 ? 'primary' : 'white'" @click="() => { this.video_number = 2; }" class="rounded-btn" light rounded>
                  Vozila
              </v-btn>
            </v-flex>
            <v-flex style="text-align: center;">
              <v-btn :color="this.video_number === 3 ? 'primary' : 'white'" @click="() => { this.video_number = 3; }" class="rounded-btn" light rounded>
                  Oprema
              </v-btn>
            </v-flex>
            <v-flex style="text-align: center;">
              <v-btn :color="this.video_number === 4 ? 'primary' : 'white'" @click="() => { this.video_number = 4; }" class="rounded-btn" light rounded>
                  Vidikovci
              </v-btn>
            </v-flex>
            <v-flex style="text-align: center;">
              <v-btn :color="this.video_number === 5 ? 'primary' : 'white'" @click="() => { this.video_number = 5; }"  class="rounded-btn" light rounded>
                  Opustanje
              </v-btn>
            </v-flex>
          </v-row>
        </v-col>
      </v-row>
    </v-col>
  </v-row>
  <v-row :class="`fadeclass${this.scrolledToBottom ? '--visible' : ''}`" 
      :style="`position: fixed; left: ${$vuetify.breakpoint.smAndUp ? '40px' : '15px'}; 
      right: ${$vuetify.breakpoint.smAndUp ? '40px' : '15px'}; 
      bottom: ${$vuetify.breakpoint.smAndUp ? '86px' : '46px'}; margin-bottom: 0;`">
    <v-col>
      <v-row :class="`mx-auto`" :style="$vuetify.breakpoint.mdAndUp ? 'max-width: 650px;' : ''">
        <v-col>
          <v-row justify="space-around" align-content="center">
            <v-flex style="text-align: center;">
              <v-btn :color="this.photo_number === 0 ? 'primary' : 'white'" @click="() => { this.photo_number = 0; }" class="rounded-btn" light rounded>
                Avanture
              </v-btn>
            </v-flex>
            <v-flex style="text-align: center;">
              <v-btn :color="this.photo_number === 1 ? 'primary' : 'white'" @click="() => { this.photo_number = 1; }" class="rounded-btn" light rounded>
                Lokacija
              </v-btn>
              </v-flex>
            <v-flex style="text-align: center;">
              <v-btn :color="this.photo_number === 2 ? 'primary' : 'white'" @click="() => { this.photo_number = 2; }"  class="rounded-btn" light rounded>
                Vozila
              </v-btn>
            </v-flex>
            <v-flex style="text-align: center;">
              <v-btn :color="this.photo_number === 3 ? 'primary' : 'white'" @click="() => { this.photo_number = 3; }"  class="rounded-btn" light rounded>
                Opuštanje
              </v-btn>
            </v-flex>
            <v-flex style="text-align: center;">
              <v-btn :color="this.photo_number === 4 ? 'primary' : 'white'" @click="() => { this.photo_number = 4; }" class="rounded-btn" light rounded>
                O nama
              </v-btn>
            </v-flex>
            <v-flex style="text-align: center;">
              <v-btn :color="this.photo_number === 5 ? 'primary' : 'white'" @click="() => { this.$router.push('/detail/price') }" class="rounded-btn" light rounded>
                Cjenik
              </v-btn>
            </v-flex>
            <v-flex style="text-align: center;">
              <v-btn :color="this.photo_number === 6 ? 'primary' : 'white'" @click="() => { this.photo_number = 6; }" class="rounded-btn" light rounded>
                Uvjeti
              </v-btn>
            </v-flex>
            <v-flex style="text-align: center;">
              <v-btn :color="this.photo_number === 7 ? 'primary' : 'white'" @click="() => { this.photo_number = 7; }" class="rounded-btn" light rounded>
                Rezervacije
              </v-btn>
            </v-flex>
            <v-flex style="text-align: center;">
              <v-btn :color="this.photo_number === 8 ? 'primary' : 'white'" @click="() => { this.photo_number = 8; }" class="rounded-btn" light rounded>
                Kontakt
              </v-btn>
            </v-flex>
          </v-row>
        </v-col>
      </v-row>
    </v-col>
  </v-row>

 </v-col>
</template>

<script lang="ts">
import { Vue, Component, Action, namespace, Getter } from 'nuxt-property-decorator';

@Component({ layout: 'default' })
  export default class indexVue extends Vue {
    text = 'center'
    photo_number = 0
    video_number = 0
    scrolledToTop = true
    scrolledToBottom = false
    audio: any = null

    @Action('fetchData') fetch: any
    // @ts-ignore
    @Getter('pages') public pages: any[]

    data () {
      return {
        texts: {
          0: `<b>DO VRHA IVANŠČICE (1060 m)</b> - dvosatna avantura dinamičnim šumskim putevima s pauzom na najvišem vrhu Ivanščice za one koji žele samostalno provesti dio vremena na najvišem vrhu Hrvatskog zagorja ili <b>OD JUGA DO SJEVERA</b> - trosatna avantura na Ivanščici uz nezaboravan doživljaj šume u svako godišnje doba za istinske zaljubljenike u prirodu i prave avanturiste ili <b>OKO ZLATARA</b> - kraća avantura (1,5 h) pitomim brežuljcima podno južnih obronaka Ivanščice za potpune početnike ako nisu spremni za gorske staze ili pak potpuno INDIVIDUALNA AVANTURA (na upit).`,
          1: `Squadom avanture počinju i završavaju u Juranščini (Grad Zlatar), na privatnom imanju s osiguranim parkirnim mjestom. Sama lokacija nalazi se na udaljenosti oko 60 km od Zagreba i oko 50 km od Varaždina, a točan položaj može se vidjeti <a href="https://goo.gl/maps/KuSersySXDrcHWbV9">na karti</a>.`,
          2: `Ture se vode kvalitetnim, udobnim i sigurnim vozilima uglednog kanadsko-američkog proizvođača BRP. Modeli koje trenutno nudimo su CAN-AM OUTLANDER MAX DPS 450 i CAN-AM OUTLANDER MAX DPS 570. Sva vozila su predviđena za dvije osobe – vozača i suvozača.`,
          4: `squadom j.d.o.o. | Juranščina 12 f, 49250 Zlatar | OIB: 15351327278 | PDV ID: HR15351327278 | IBAN: HR1423400091111101124 | Privredna banka Zagreb d.d. | SWIFT: PBZGHR2X | Temeljni kapital: 7.800,00 kn | Trgovački sud u Zagrebu | MBS: 081336648`,
          
        },
        photos: [
          1, 2, 3, 4, 5, 6, 7, 8, 9
        ],
        videos: [
          1, 2, 3, 4, 5, 6
        ]
      }
    }

    created () {
      if (process.client) {
          // window.addEventListener('wheel', this.onScroll);

          // window.addEventListener("touchstart", this.handleTouchStart, false);
          // window.addEventListener("touchend", this.handleTouchEnd, false);
          // window.addEventListener("touchmove", this.handleTouchMove, false);

          // window.addEventListener("touchcancel", this.handleTouchCancel, false);

          // set on scroll
          window.addEventListener('scroll', this.detectScrollMode);
          // init
          this.detectScrollMode();
      }
    }

    destroyed () {
        if (process.client) {
          if (this.audio) {
            this.audio.pause();
            this.audio = null;
          }
            // window.removeEventListener('wheel', this.onScroll);

            // window.removeEventListener("touchstart", this.handleTouchStart, false);
            // window.removeEventListener("touchend", this.handleTouchEnd, false);
            // window.removeEventListener("touchmove", this.handleTouchMove, false);

            // window.removeEventListener("touchcancel", this.handleTouchCancel, false);

            window.removeEventListener('scroll', this.detectScrollMode);
        }
    }

    mounted() {
      // @ts-ignore
      this.fetch();

      if (process.client) {
        this.$store.commit('initializeSound');
        setTimeout(() => {
          this.playSound();
        }, 1500)
      }
    }

    detectScrollMode() {
        let topOfWindow = Math.max(window.pageYOffset, document.documentElement.scrollTop, document.body.scrollTop) + window.innerHeight <= document.documentElement.offsetHeight +50;
        let bottomOfWindow = Math.max(window.pageYOffset, document.documentElement.scrollTop, document.body.scrollTop) + window.innerHeight / 2 > document.documentElement.offsetHeight +200;

        this.scrolledToTop = topOfWindow
        this.scrolledToBottom = bottomOfWindow

        // console.log(Math.max(window.pageYOffset, document.documentElement.scrollTop, document.body.scrollTop) + window.innerHeight / 2)
        // console.log(document.documentElement.offsetHeight + 100)
        // console.log('')
    }

    season() {
        const getSeason = (d:any) => Math.floor((d.getMonth() / 12 * 4)) % 4;
        return ['winter', 'spring', 'summer', 'autumn'][getSeason(new Date())];
    }

    get isSoundEnabled() {
      return this.$store.state.isSoundEnabled;
    }

    toggleSound() {
      this.$store.commit('toggleSound');
      this.playSound();
    }

    playSound() {
      if (this.isSoundEnabled && !this.audio) { 
        this.audio = new Audio(require('@/assets/sounds/v1.mp3'));
        this.audio.play();
      } else {
        if (this.audio) {
          this.audio.pause();
          this.audio = null;
        }
      }
    }
  }

</script>

<style lang="scss">
.fadeclass {
  opacity: 0;
  visibility: hidden;
  z-index: 1;
  -webkit-transition: opacity .2s, visibility .2s;
  transition: opacity .2s, visibility .2s;

  &--visible {
    @extend .fadeclass;
    opacity: 1;
    visibility: visible;
  }

  .v-image.v-responsive.v-carousel__item {
    height: 100% !important;
  }
}
</style>
