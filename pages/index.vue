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
          :src="`https://github.com/FrameBassman/squadom/raw/master/static/video/${item + '-' + season()}.mp4?nocache=true`"
          :poster="`/video/${item + '-' + season()}.jpg?nocache=true`"
          style="height: 100vh;">
        </video-background>
      </v-carousel-item>
    </v-carousel>
  </v-row>
  <v-row v-if="$vuetify.breakpoint.smAndUp">
    <v-img
      v-for="(item, i) in photos"
      :key="i"
      height="101vh"
      :id="`photo-id-${item}`"
      :src="`https://github.com/FrameBassman/squadom/raw/master/static/photo/${item+($vuetify.breakpoint.mdAndDown ? '-mob' : '')}.jpg?nocache=true`"
      :alt="`${photo_alts[item]}`"
      :lazy-src="`https://github.com/FrameBassman/squadom/raw/master/static/photo/${item+'-blurry'+($vuetify.breakpoint.mdAndDown ? '-mob' : '')}.jpg?nocache=true`"
      fit>
    </v-img>
    <!-- <v-carousel hide-delimiters style="margin-top: 15px;"  v-model="photo_number" :show-arrows="$vuetify.breakpoint.smAndUp">
      <v-carousel-item
        v-for="(item, i) in photos"
        :key="i"
        :src="`https://github.com/FrameBassman/squadom/raw/master/static/photo/${item+($vuetify.breakpoint.mdAndDown ? '-mob' : '')}.jpg?nocache=true`"
        :alt="`${photo_alts[item]}`"
        :lazy-src="`https://github.com/FrameBassman/squadom/raw/master/static/photo/${item+'-blurry'+($vuetify.breakpoint.mdAndDown ? '-mob' : '')}.jpg?nocache=true`"
      >
      </v-carousel-item>
    </v-carousel> -->
  </v-row>
  <v-row v-else>
    <v-carousel hide-delimiters style="margin-top: 15px;" height="101vh" v-model="photo_number" :show-arrows="$vuetify.breakpoint.smAndUp">
      <v-carousel-item
        v-for="(item, i) in photos"
        :key="i"
        :src="`https://github.com/FrameBassman/squadom/raw/master/static/photo/${item+($vuetify.breakpoint.mdAndDown ? '-mob' : '')}.jpg?nocache=true`"
        :alt="`${photo_alts[item]}`"
        :lazy-src="`https://github.com/FrameBassman/squadom/raw/master/static/photo/${item+'-blurry'+($vuetify.breakpoint.mdAndDown ? '-mob' : '')}.jpg?nocache=true`"
      >
      </v-carousel-item>
    </v-carousel>
  </v-row>

  <v-row :class="`fadeclass${this.scrolledToBottom && this.texts[this.photo_number] ? '--visible' : ''}`">
    <v-col>
      <v-row :class="`mx-auto`" justify="center" :style="$vuetify.breakpoint.mdAndUp ? 'width: 80vw;' : ''">
        <div class="info-container">
          <div class="call-button" :style="$vuetify.breakpoint.mdAndUp ? 'width: 50vw;' : 'width: 89vw;'" >
            <a href="mailto:info@squadom.hr">
              <span>
                REZERVIRAJTE TURU!
              </span>
            </a>
          </div>
          <div class="text-area" :style="$vuetify.breakpoint.mdAndUp ? `width: 50vw; max-height: 25vh; font-size: ${this.photo_number === 5 ? '12px' : '16px'};` : `width: 89vw; max-height: 40vh; font-size: ${this.photo_number === 5 ? '11px' : '14px'};`">
            <span class="ma-3" style="width: 100%; text-align: justify;" v-html="this.texts[this.photo_number] || ''">
            </span>
          </div>
        </div>
      </v-row>
    </v-col>
  </v-row>

  <v-row :class="`fadeclass${this.scrolledToTop ? '--visible' : ''}`" 
    :style="`position: fixed; left: ${$vuetify.breakpoint.smAndUpmAndUp ? '40px' : '15px'}; 
    right: ${$vuetify.breakpoint.smAndUp ? '40px' : '15px'}; 
    bottom: ${$vuetify.breakpoint.smAndUp ? '86px' : '76px'}; margin-bottom: 0;`">
    <v-col>
      <v-row :class="`mx-auto`" :style="$vuetify.breakpoint.mdAndUp ? 'max-width: 650px;' : ''">
        <v-col>
          <v-row justify="center" align-content="center">
            <v-img v-if="$vuetify.breakpoint.smAndUp"
              :src="`sound_${this.isSoundEnabled ? 'on' : 'off'}.svg`"
              class="mr-3"
              :style="`cursor: pointer; width: 30px; height: 30px; margin-top: 14px; text-align: center; ${this.isSoundEnabled ? 'filter: invert(43%) sepia(33%) saturate(842%) hue-rotate(73deg) brightness(99%) contrast(89%);' : ''}`"
              contain
              
              @click="this.toggleSound"
            />
            <v-flex style="text-align: center; max-width: 120px;">
              <v-btn :color="this.video_number === 0 ? 'primary' : 'white'" @click="() => { this.video_number = 0; this.sendGAVideoEvent('Lokacija'); }" class="rounded-btn" light rounded>
                  {{ $t('lokacija') }}
              </v-btn>
            </v-flex>
            <v-flex style="text-align: center; max-width: 120px;">
              <v-btn :color="this.video_number === 1 ? 'primary' : 'white'" @click="() => { this.video_number = 1; this.sendGAVideoEvent('Rute'); }" class="rounded-btn" light rounded>
                  {{ $t('rute') }}
              </v-btn>
            </v-flex>
            <v-flex style="text-align: center; max-width: 120px;">
              <v-btn :color="this.video_number === 2 ? 'primary' : 'white'" @click="() => { this.video_number = 2; this.sendGAVideoEvent('Vozila'); }" class="rounded-btn" light rounded>
                  {{ $t('vozila') }}
              </v-btn>
            </v-flex>
            <v-flex style="text-align: center; max-width: 120px;">
              <v-btn :color="this.video_number === 3 ? 'primary' : 'white'" @click="() => { this.video_number = 3; this.sendGAVideoEvent('Oprema'); }" class="rounded-btn" light rounded>
                  {{ $t('oprema') }}
              </v-btn>
            </v-flex>
            <v-flex style="text-align: center; max-width: 120px;">
              <v-btn :color="this.video_number === 4 ? 'primary' : 'white'" @click="() => { this.video_number = 4; this.sendGAVideoEvent('Vidikovci'); }" class="rounded-btn" light rounded>
                  {{ $t('vidikovci') }}
              </v-btn>
            </v-flex>
            <v-flex style="text-align: center; max-width: 120px;">
              <v-btn :color="this.video_number === 5 ? 'primary' : 'white'" @click="() => { this.video_number = 5; this.sendGAVideoEvent('Opustanje'); }"  class="rounded-btn" light rounded>
                  {{ $t('opustanje') }}
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
      bottom: ${$vuetify.breakpoint.smAndUp ? '86px' : '76px'}; margin-bottom: 0;`">
    <v-col>
      <v-row :class="`mx-auto`" :style="$vuetify.breakpoint.mdAndUp ? 'max-width: 650px;' : ''">
        <v-col>
          <v-row justify="center" align-content="center">
            <v-img v-if="$vuetify.breakpoint.smAndUp"
              :src="`sound_${this.isSoundEnabled ? 'on' : 'off'}.svg`"
              class="mr-3"
              :style="`cursor: pointer; width: 30px; height: 30px; margin-top: 14px; text-align: center; ${this.isSoundEnabled ? 'filter: invert(43%) sepia(33%) saturate(842%) hue-rotate(73deg) brightness(99%) contrast(89%);' : ''}`"
              contain
              
              @click="this.toggleSound"
            />
            <v-flex style="text-align: center; max-width: 120px;">
              <v-btn :color="this.photo_number === 0 ? 'primary' : 'white'" @click="() => { this.photo_number = 0; this.resetRoute(); this.sendGAPhotoEvent('Avanture'); } " :to="$vuetify.breakpoint.smAndUp ? '/#photo-id-1' : null" :nuxt="$vuetify.breakpoint.smAndUp ? true : null" class="rounded-btn" light rounded>
                {{ $t('avanture') }}
              </v-btn>
            </v-flex>
            <v-flex style="text-align: center; max-width: 120px;">
              <v-btn :color="this.photo_number === 1 ? 'primary' : 'white'" @click="() => { this.photo_number = 1; this.resetRoute(); this.sendGAPhotoEvent('Lokacija'); }" :to="$vuetify.breakpoint.smAndUp ? '/#photo-id-2' : null" :nuxt="$vuetify.breakpoint.smAndUp ? true : null" class="rounded-btn" light rounded>
                {{ $t('lokacija') }}
              </v-btn>
              </v-flex>
            <v-flex style="text-align: center; max-width: 120px;">
              <v-btn :color="this.photo_number === 2 ? 'primary' : 'white'" @click="() => { this.photo_number = 2; this.resetRoute(); this.sendGAPhotoEvent('Vozila'); }" :to="$vuetify.breakpoint.smAndUp ? '/#photo-id-3' : null" :nuxt="$vuetify.breakpoint.smAndUp ? true : null" class="rounded-btn" light rounded>
                {{ $t('vozila') }}
              </v-btn>
            </v-flex>
            <v-flex style="text-align: center; max-width: 120px;">
              <v-btn :color="this.photo_number === 3 ? 'primary' : 'white'" @click="() => { this.photo_number = 3; this.resetRoute(); this.sendGAPhotoEvent('Opcije'); }" :to="$vuetify.breakpoint.smAndUp ? '/#photo-id-4' : null" :nuxt="$vuetify.breakpoint.smAndUp ? true : null" class="rounded-btn" light rounded>
                {{ $t('opcije') }}
              </v-btn>
            </v-flex>
            <v-flex style="text-align: center; max-width: 120px;">
              <v-btn :color="this.photo_number === 4 ? 'primary' : 'white'" @click="() => { this.photo_number = 4; this.resetRoute(); this.sendGAPhotoEvent('O nama'); }" :to="$vuetify.breakpoint.smAndUp ? '/#photo-id-5' : null" :nuxt="$vuetify.breakpoint.smAndUp ? true : null" class="rounded-btn" light rounded>
                {{ $t('onama') }}
              </v-btn>
            </v-flex>
            <v-flex style="text-align: center; max-width: 120px;">
              <v-btn :color="this.photo_number === 5 ? 'primary' : 'white'" @click="() => { this.photo_number = 5; this.resetRoute(); this.sendGAPhotoEvent('Cjenik'); }" :to="$vuetify.breakpoint.smAndUp ? '/#photo-id-6' : null" :nuxt="$vuetify.breakpoint.smAndUp ? true : null" class="rounded-btn" light rounded>
                {{ $t('cjenik') }}
              </v-btn>
            </v-flex>
            <v-flex style="text-align: center; max-width: 120px;">
              <v-btn :color="this.photo_number === 6 ? 'primary' : 'white'" @click="() => { this.photo_number = 6; this.resetRoute(); this.sendGAPhotoEvent('Uvjeti'); }" :to="$vuetify.breakpoint.smAndUp ? '/#photo-id-7' : null" :nuxt="$vuetify.breakpoint.smAndUp ? true : null" class="rounded-btn" light rounded>
                {{ $t('uvjeti') }}
              </v-btn>
            </v-flex>
            <v-flex style="text-align: center; max-width: 120px;">
              <v-btn :color="this.photo_number === 7 ? 'primary' : 'white'" @click="() => { this.photo_number = 7; this.resetRoute(); this.sendGAPhotoEvent('Rezervacije'); }" :to="$vuetify.breakpoint.smAndUp ? '/#photo-id-8' : null" :nuxt="$vuetify.breakpoint.smAndUp ? true : null" class="rounded-btn" light rounded>
                {{ $t('rezervacije') }}
              </v-btn>
            </v-flex>
            <v-flex style="text-align: center; max-width: 120px;">
              <v-btn :color="this.photo_number === 8 ? 'primary' : 'white'" @click="() => { this.photo_number = 8; this.resetRoute(); this.sendGAPhotoEvent('Kontakt'); }" :to="$vuetify.breakpoint.smAndUp ? '/#photo-id-9' : null" :nuxt="$vuetify.breakpoint.smAndUp ? true : null" class="rounded-btn" light rounded>
                {{ $t('kontakt') }}
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
          0: this.$t('avanture_text'),
          1: this.$t('lokacija_text'),
          2: this.$t('vozila_text'),
          3: this.$t('opcije_text'),
          4: this.$t('onama_text'),
          5: this.$t('cjenik_text'),
          6: this.$t('uvjeti_text'),
          7: this.$t('rezervacije_text'),
          8: this.$t('kontakt_text'),
        },
        photos: [
          1, 2, 3, 4, 5, 6, 7, 8, 9
        ],
        photo_alts: [
          'quad, tura, vožnja, odmor, vikend, priroda, ivanščica, zagorje, varazdin, ivanec, zlatar, lepoglava, lobor, avantura, izlet, zima, snijeg, planine, šuma, zabava, extreme',
          'planinarenje, snijeg, sljeme, quad, ture, extreme, ivanščica staze, odmor, priroda, hlad, vidikovac, pogled, opuštanje, tišina, mirno, spokojno',
          'quad, ture, ekipa, atv, can-am, canam, outlander, brp, izlet, Zagreb, okolica, aktivno, odmor, zabava, druženje, party, zima, priroda, šuma, planina, ivanščica, ivanec, sljeme, obitelj, aktivnosti, snijeg, planinarenje, extreme, team building, ideja, fotograf',
          'kava, čaj, zima, sunce, snijeg, ivanščica, ivancica, ljubav, romantika, vikend, poklonbon, sljeme, priroda, vožnja, pas, obitelj, osmijeh',
          'šuma, quad, tura, vodič, snijeg, zima, ivanščica, planina, romantika, aktivnost, zabava, opuštanje',
          'ivanščica, sljeme, mir, nebo, tišina, visina, oblaci, zima, snijeg, vrh, planinarenje, ture, quad, poklonbon, zlatar, ivanec, varaždin, planina',
          'quad, atv, cfmoto, canam, can-am, brp, outlander, polaris, 4x4, offroad, staze, extreme, izlet, zabava, tragove, snijeg, gume, tura, vodič',
          'Ivanec, vidikovac, Varaždin, Mađarska, Slovenija, Ivanščica, planina, izlet, romantika, aktivnosti, planinarenje, pogled, vrh, visina, oblaci, noć, grad, rasvjeta, ulice, vožnja',
          'Ivanščica, šuma, snijeg, zima, staze, planinarenje, vožnja'
        ],
        photo_descr: [
          this.$t('avanture_photo'),
          this.$t('lokacija_photo'),
          this.$t('vozila_photo'),
          this.$t('opcije_photo'),
          this.$t('onama_photo'),
          this.$t('cjenik_photo'),
          this.$t('uvjeti_photo'),
          this.$t('rezervacije_photo'),
          this.$t('kontakt_photo')
        ],
        videos: [
          1, 2, 3, 4, 5, 6
        ]
      }
    }

    created () {
      if (process.client) {

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
        // @ts-ignore
        this.$gtag.pageview('/');

        this.$store.commit('initializeSound');
        setTimeout(() => {
          this.playSound();
        }, 1500)
      }
    }

    sendGAPhotoEvent(ename: string) {
      // @ts-ignore
      this.$gtag.event('click', {
        'event_category': 'photo-btn',
        'event_label': ename,
        'value': 0
      })
    }

    resetRoute() {
      window.history.replaceState({}, '' ,'/');
    }

    sendGAVideoEvent(ename: string) {
      // @ts-ignore
      this.$gtag.event('click', {
        'event_category': 'video-btn',
        'event_label': ename,
        'value': 0
      })
    }

    detectScrollMode() {
        let topOfWindow = Math.max(window.pageYOffset, document.documentElement.scrollTop, document.body.scrollTop) + window.innerHeight <= document.documentElement.offsetHeight +50;
        let bottomOfWindow = Math.max(window.pageYOffset, document.documentElement.scrollTop, document.body.scrollTop) + window.innerHeight / 2 > document.documentElement.offsetHeight +200;

        this.scrolledToTop = topOfWindow
        this.scrolledToBottom = bottomOfWindow

        // console.log(Math.max(window.pageYOffset, document.documentElement.scrollTop, document.body.scrollTop) + window.innerHeight / 2)
        // console.log(document.documentElement.offsetHeight + 100)
        // console.log('')

        const scrollAmount = document.documentElement.scrollTop

        let found = false
        let ph = 8
        // detect new pos
        while (!found && ph >= 0) {
          const elPos = document.getElementById(`photo-id-${this.$data.photos[ph]}`)?.offsetTop || 99999
          if (scrollAmount + window.innerHeight / 2 >= elPos || ph === 0) {
            this.photo_number = ph
            // this.link = 'https://expmaple-2.com'
            // console.log("reached photo "+this.$data.photos[this.photo_number])
            found = true
          }
          ph--
        }
    }

    season() {
        const getSeason = (d:any) => Math.floor(((d.getMonth()+1) / 12 * 4)) % 4;
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
        this.audio.loop = true;
        this.audio.play();
      } else {
        if (this.audio) {
          this.audio.pause();
          this.audio = null;
        }
      }

      // this.writeJson()
    }


   /* async writeJson(): Promise<any> {

        let json_text = ``

        const fs = require('fs')
        const file_path = 'static/orders.json'
        try {
            json_text = fs.readFileSync(file_path).toString()
        } catch (e) {
            console.log(e)
            // throw Error('file not found')
            return { "error": e };
        }

        // let goods_object = JSON.parse(goods_json_text)

        // modify

        // create purchase
        let purchase_object = {
            result: 0,
            invoice_url: "https://smartex-it.com",
            goods: [],
            documents: []
        }

        // save both files
        fs.writeFile(file_path, JSON.stringify(purchase_object), function writeJSON(err: any) {
            if (err) return console.log(err);
            console.log(JSON.stringify(purchase_object));
            console.log('writing to ' + purchase_object);
        });
    } */
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
