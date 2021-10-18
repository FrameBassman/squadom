import colors from 'vuetify/es5/util/colors'

export default {
  // Global page headers: https://go.nuxtjs.dev/config-head
  head: {
    titleTemplate: '%s | squadom',
    title: 'ATV gorske avanture na sjeveru Hrvatske',
    htmlAttrs: {
      lang: 'en'
    },
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: 'Odvezi se u veličanstva prirode! Vožnja. Druženje. Zabava. Odmor.' },
      { hid: 'keywords', name: 'keywords', content: 'vožnja quadovima, vožnja atv, atv ture, quad ture, extreme, offroad, avanturizam, planine, sport, odmor, zagorje, ivanscica, ivanščica, ivančica, vožnja, zabava, odmor, za dvoje, team building, priroda, vrijeme u prirodi, fotografiranje, snimanje dronom, hrana u prirodi, vožnja u prirodi, catering, catering u prirodi, ranč, selo, ruralni turizam, odmor u šumi, vožnja u šumi, vožnja u blatu, turistička tura, organizacija događaja, događaj u prirodi, noćna vožnja, vožnja po kiši, vožnja u grupi, grupna vožnja, izlet, izlet u prirodu, obiteljski izlet, prijateljski izlet, aktivni odmor, zabava na otvorenom, team building za tvrtke, aktivnosti u prirodi, vožnja quadom, rekreacija u prirodi, avantura u prirodi, cjelodnevni izlet, quad safari, atv safari, quad izlet, adventure program, vožnja s vodičem, vođena tura, offroad vožnja, vožnja 4x4, istraživanje okoline, vožnja za dvoje, adrenalinski turizam, kućice u prirodi, najam, kampiranje, najam prostora, najam prostora za proslave, najam prostora za rođendane, organizacija događaja, poklon bon za rođendan, poklon bon za vožnju, poklon za dvoje, prostor za tulume, privatne proslave, kuća za odmor, vikend kuća, vikend kuća za proslave, roštilj u prirodi, roštilj na otvorenom, roštilj u šumi, vatra u prirodi, druženje oko vatre, prostor za nastup, prostor za koncert, roštiljanje, šašlik, vegetarijanski roštilj, kamp u prirodi, smještaj kod Ivanščice, kamping, kamping resort, glamping, okolica Zagreba, okolica Varaždina, squadom, vožnja Canam, vožnja BRP, hrvatsko zagorje, krapinsko-zagorska županija, zlatar, grad zlatar, quadbike tura' }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }
    ]
  },

  target: 'static',

  generate: {
    routes: ['/lokacija/blablabla', '/lokacija/y786t']
  },

  static: {
    prefix: false
  },

  // Global CSS: https://go.nuxtjs.dev/config-css
  css: ['~/assets/main.css'],

  // Plugins to run before rendering page: https://go.nuxtjs.dev/config-plugins
  plugins: [
    { src: './plugins/video-background', mode: 'client' }
  ],

  // Auto import components: https://go.nuxtjs.dev/config-components
  components: true,

  // Modules for dev and build (recommended): https://go.nuxtjs.dev/config-modules
  buildModules: [
    // https://go.nuxtjs.dev/typescript
    '@nuxt/typescript-build',
    // https://go.nuxtjs.dev/vuetify
    '@nuxtjs/vuetify',
  ],

  // Modules: https://go.nuxtjs.dev/config-modules
  modules: [
  ],

  // Vuetify module configuration: https://go.nuxtjs.dev/config-vuetify
  vuetify: {
    customVariables: ['~/assets/variables.scss'],
    theme: {
      dark: true,
      themes: {
        dark: {
          primary: colors.green.darken2,
          accent: colors.grey.darken3,
          secondary: colors.amber.darken3,
          info: colors.teal.lighten1,
          warning: colors.amber.base,
          error: colors.deepOrange.accent4,
          success: colors.green.accent3
        }
      }
    }
  },

  // Build Configuration: https://go.nuxtjs.dev/config-build
  build: {
  }
}
