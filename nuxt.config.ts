// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },
  ssr: false,
      runtimeConfig: {
        // The private keys which are only available within server-side
        // apiUrl: '',
        // Keys within public, will be also exposed to the client-side
        public: {
            // from env
            apiUrl: process.env.API_URL,
        }
    },
    build: {
        transpile: ['primevue']
    },
    modules: [
        '@formkit/nuxt',
        '@sfxcode/nuxt-primevue',
        '@nuxtjs/tailwindcss',
    ],
    primevue: {
        config: {
            ripple: true,
        }
    },
    css: [
        'primevue/resources/primevue.css',
        'primevue/resources/themes/saga-blue/theme.css',
        'primeicons/primeicons.css',
        '@sfxcode/formkit-primevue/dist/sass/formkit-prime-inputs.scss',
        '@sfxcode/formkit-primevue/dist/sass/formkit-primevue.scss'
    ]
})
