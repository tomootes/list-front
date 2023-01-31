
export default {
  target: 'static',
  /*
  ** Headers of the page
  */
  head: {
    title: 'my songs',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: process.env.npm_package_description || '' }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' },
      { rel: 'stylesheet', href: 'https://fonts.googleapis.com/css?family=Fira+Mono&display=swap' }
    ],
  },
  /*
  ** Customize the progress-bar color
  */
  loading: { color: '#fff' },

  css: [
    // SCSS file in the project
    '@/assets/css/main.scss'
  ],

  styleResources: {
    scss: ['@/assets/css/*.scss']
  },

  /*
  ** Plugins to load before mounting the App
  */
  plugins: [
  ],
  /*
  ** Nuxt.js dev-modules
  */
  buildModules: [
  ],
  /*
  ** Nuxt.js modules
  */
  modules: [
    '@nuxtjs/axios',
    '@nuxtjs/style-resources'
  ],

  axios: {
    baseURL: 'http://37.139.26.166:1337'
  },

  /*
  ** Build configuration
  */
  build: {
    /*
    ** You can extend webpack config here
    */
    // extend (config, ctx) {
    // }
  }
}
