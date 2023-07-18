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
      { hid: 'keywords', name: 'keywords', content: '4x4, Ivanec, Ivanščica, Mađarska, Slovenija, Varaždin, Zagreb, aktivno, aktivnost, aktivnosti, atv, avantura, brp, building, can-am, canam, cfmoto, druženje, ekipa, extreme, fotograf, grad, gume, hlad, ideja, ivancica, ivanec, ivanščica ivanščica, izlet, kava, lepoglava, ljubav, lobor, mir, mirno, nebo, noć, obitelj, oblaci, odmor, offroad, okolica, opuštanje, osmijeh, outlander, party, pas, planina, planina,quad, planinarenje, planine, pogled, poklonbon, polaris, priroda, quad, rasvjeta, romantika, sljeme, snijeg, spokojno, staze, sunce, team tišina, tragove, tura, ture, ulice, varazdin, varaždin, vidikovac, vikend, visina, vodič, vožnja vožnja, vrh, zabava, zagorje, zima, zlatar, čaj, šuma' },
      { hid: 'og:title', property: 'og:title', content: 'ATV gorske avanture na sjeveru Hrvatske' },
      { hid: 'og:image', property: 'og:image', content: `/photo/1.jpg` },
      { hid: 'og:description', property: 'og:description', content: 'Najbolja kava u šumi! - Quad ture, planinarenje u zagorju' },
      { hid: 'og:keywords', property: 'og:keywords', content: '4x4, Ivanec, Ivanščica, Mađarska, Slovenija, Varaždin, Zagreb, aktivno, aktivnost, aktivnosti, atv, avantura, brp, building, can-am, canam, cfmoto, druženje, ekipa, extreme, fotograf, grad, gume, hlad, ideja, ivancica, ivanec, ivanščica ivanščica, izlet, kava, lepoglava, ljubav, lobor, mir, mirno, nebo, noć, obitelj, oblaci, odmor, offroad, okolica, opuštanje, osmijeh, outlander, party, pas, planina, planina,quad, planinarenje, planine, pogled, poklonbon, polaris, priroda, quad, rasvjeta, romantika, sljeme, snijeg, spokojno, staze, sunce, team tišina, tragove, tura, ture, ulice, varazdin, varaždin, vidikovac, vikend, visina, vodič, vožnja vožnja, vrh, zabava, zagorje, zima, zlatar, čaj, šuma' },
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }
    ]
  },

  target: 'static',

  generate: {
    routes: ['/detail/price', '/detail/contacts']
  },

  static: {
    prefix: false
  },

  // Global CSS: https://go.nuxtjs.dev/config-css
  css: ['~/assets/main.css'],

  // Plugins to run before rendering page: https://go.nuxtjs.dev/config-plugins
  plugins: [
    { src: './plugins/video-background', mode: 'client' },
    { src: './plugins/ga', mode: 'all' }
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
    '@nuxtjs/i18n',
    '@nuxtjs/robots',
  ],

  i18n: {
    locales: [
      { code: 'en', iso: 'en-US', file: 'en-US.js', name: 'EN', dir: 'ltr' },
      { code: 'hr', iso: 'hr-HR', file: 'hr-HR.js', name: 'HR', dir: 'ltr' },
    ],
    defaultLocale: 'hr',
    strategy: 'no_prefix',
    vueI18n: {
      fallbackLocale: 'hr'
    },
    baseUrl: 'https://squadom.hr',
    lazy: false,
    langDir: 'lang/',
  },

  robots: () => {
    return {
      UserAgent: '*',
      Disallow: '/'
    }
  },

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
    devMiddleware: {
      headers: {
        'Cache-Control': 'no-store',
        Vary: '*'
      }
    },
    extend(config, ctx) {
      config.module.rules.push({
        test: /\.(ogg|mp3|wav|mpe?g)$/i,
        loader: 'file-loader',
        options: {
          name: '[path][name].[ext]'
        }
      })
    }
  }
}
