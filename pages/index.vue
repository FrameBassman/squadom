<template>
 <v-col>
  <v-row>
    <!-- <video-background
      :src="`/video/${video_number}.mp4`"
      style="height: 100vh;"
      muted="false"
      autoplay="true"
      preload="true"
      plays-when="canplaythrough">
    </video-background> -->
    <v-carousel hide-delimiters height="100vh" v-model="video_number" :show-arrows="$vuetify.breakpoint.smAndUp">
      <v-carousel-item v-for="(item, vi) in videos"
        :key="vi">
        <video-background
          :src="`/video/${item}.mp4`"
          style="height: 100vh;"
          muted="false"
          autoplay="true"
          preload="true"
          plays-when="canplaythrough">
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
      ></v-carousel-item>
    </v-carousel>
  </v-row>

  <v-row :class="`fadeclass${this.scrolledToBottom && this.texts[this.photo_number] ? '--visible' : ''}`" style="pointer-events: none;">
    <v-col>
      <v-row :class="`mx-auto`" justify="center" :style="$vuetify.breakpoint.mdAndUp ? 'width: 80vw;' : ''">
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
              style="height: 30px; margin-top: 14px; text-align: center;"
              contain
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
              <v-btn :color="this.photo_number === 5 ? 'primary' : 'white'" @click="() => { this.photo_number = 5; }" class="rounded-btn" light rounded>
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

<script>

  export default {
    data () {
      return {
        text: 'center',
        photo_number: 0,
        video_number: 0,
        scrolledToTop: true,
        scrolledToBottom: true,
        texts: {
          1: `Squadom avanture počinju u Juranščini (Grad Zlatar, Krapinsko-zagorska županija). Polazište se nalazi na privatnom imanju s osiguranim parkirnim mjestom, nedaleko od Zagreba (oko 60 km) i Varaždina (oko 50 km). Lokacija na karti može se <a href="https://goo.gl/maps/KuSersySXDrcHWbV9">preuzeti ovdje</a>.`,
          2: `Garantiramo kvalitetu, udobnost i sigurnost! Ture se vode na kvalitetnim, udobnim i sigurnim vozilima uglednog kanadsko-američkog proizvođača BRP. Modeli koje trenutno nudimo su Can-am Outlander Max DPS 450 i Can-am Outlander Max DPS 570. Sva vozila su predviđena za dvije osobe – vozača i suvozača.`,
          5: `<table border-spacing="15px">
            <tr>
              <td rowspan="2">Osnovne usluge</td>
              <td colspan="2">1 osoba / 1 quad</td>
              <td colspan="2">2 osobe / 1 quad</td>
            </tr>
            <tr>
              <td>HRK</td>
              <td>EUR</td>
              <td>HRK</td>
              <td>EUR</td>
            </tr>
            <tr>
              <td>Vođena quad tura (90 min)</td>
              <td>500,00 kn</td>
              <td>65,00 €</td>
              <td>600,00 kn</td>
              <td>80,00 €</td>
            </tr>
            <tr>
              <td>Vođena quad tura (120 min)</td>
              <td>600,00 kn</td>
              <td>80,00 €</td>
              <td>700,00 kn</td>
              <td>90,00 €</td>
            </tr>
            <tr>
              <td>Vođena quad tura (180 min)</td>
              <td>800,00 kn</td>
              <td>105,00 €</td>
              <td>900,00 kn</td>
              <td>120,00 €</td>
            </tr>
            <tr></tr>
            <tr>
              <td>Dodatne opcije</td>
              <td>HRK</td>
              <td>EUR</td>
              <td></td>
              <td></td>
            </tr>
            <tr>
              <td>Prostor za slobodno roštiljanje (3 sata)</td>
              <td>300,00 kn</td>
              <td>40,00 €</td>
              <td></td>
              <td></td>
            </tr>
            <tr>
              <td>Ručak u prirodi (catering) po osobi</td>
              <td>110,00 kn</td>
              <td>40,00 €</td>
              <td></td>
              <td></td>
            </tr>
            <tr>
              <td>Profesionalno fotografiranje</td>
              <td>110,00 kn</td>
              <td>40,00 €</td>
              <td></td>
              <td></td>
            </tr>
            <tr></tr>
            <tr>
              <td colspan="5">Cijene su izražene s PDV-om.</td>
            </tr>
            <tr>
              <td colspan="5">U cijenu vođene ture uključena je usluga vođenja, kaciga, potkapa, boca vode, trošak goriva i održavanja vozila.</td>
            </tr>
            <tr></tr>
            <tr>
              <td colspan="5">Vrijedi od 01.10.2021.</td>
            </tr>
          </table>`
        },
        photos: [
          1, 2, 3, 4, 5, 6, 7, 8, 9
        ],
        videos: [
          1, 2, 3, 4, 5, 6
        ]
      }
    },

    methods: {
      detectScrollMode() {
        let topOfWindow = Math.max(window.pageYOffset, document.documentElement.scrollTop, document.body.scrollTop) + window.innerHeight <= document.documentElement.offsetHeight +50;
        let bottomOfWindow = Math.max(window.pageYOffset, document.documentElement.scrollTop, document.body.scrollTop) + window.innerHeight / 2 > document.documentElement.offsetHeight +200;

        this.scrolledToTop = topOfWindow
        this.scrolledToBottom = bottomOfWindow

        // console.log(Math.max(window.pageYOffset, document.documentElement.scrollTop, document.body.scrollTop) + window.innerHeight / 2)
        // console.log(document.documentElement.offsetHeight + 100)
        // console.log('')
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
          window.addEventListener('scroll', this.detectScrollMode);
          // init
          this.detectScrollMode();
      }
    },

    destroyed () {
        if (process.client) { 
            // window.removeEventListener('wheel', this.onScroll);

            // window.removeEventListener("touchstart", this.handleTouchStart, false);
            // window.removeEventListener("touchend", this.handleTouchEnd, false);
            // window.removeEventListener("touchmove", this.handleTouchMove, false);

            // window.removeEventListener("touchcancel", this.handleTouchCancel, false);

            window.removeEventListener('scroll', this.detectScrollMode);
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
