<script setup lang="ts">
import '@fontsource-variable/montserrat'
import '@fontsource-variable/inter'
import 'remixicon/fonts/remixicon.css'

useHead({
    link: [
        {
            rel: 'icon',
            type: 'image/svg+xml',
            href: '/favicon.svg',
        },
    ],
})

const menuItems = [
    {
        label: 'Home',
        to: '/',
    },
    {
        label: 'Products',
        to: '/products',
    },
]
</script>

<template>
    <NuxtLayout>
        <div
            class="container mx-auto min-h-screen min-w-full bg-gradient-to-r from-surface-50 to-surface-100 p-4 text-surface-900 dark:from-surface-800 dark:to-surface-900 dark:text-surface-50"
        >
            <header class="px-4 lg:px-16 lg:py-8">
                <div class="flex items-center justify-between">
                    <NuxtLink
                        to="/"
                        class="flex items-center gap-2 font-heading text-lg font-bold lg:text-2xl"
                    >
                        <Logo :width="30" />
                        <span class="hidden text-primary-500 lg:block"
                            >KomangWorks</span
                        >
                    </NuxtLink>

                    <MobileMenu :menuItems />
                    <DesktopMenu :menuItems />
                </div>
            </header>

            <NuxtPage class="container mx-auto" />
        </div>
    </NuxtLayout>
</template>
