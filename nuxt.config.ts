import path from 'path'

// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
    experimental: {
        viewTransition: true,
    },
    devtools: { enabled: true },
    modules: [
        '@nuxtjs/tailwindcss',
        'nuxt-primevue',
        '@nuxt/image',
        '@nuxt/content',
    ],
    primevue: {
        options: {
            unstyled: true,
        },
        importPT: { from: path.resolve(__dirname, './presets/Lara/') },
    },
})
