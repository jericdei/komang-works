<script setup lang="ts">
import '@fontsource-variable/montserrat'
import '@fontsource-variable/inter'
</script>

<template>
    <NuxtLayout>
        <div
            class="container mx-auto min-h-screen min-w-full bg-gradient-to-r from-surface-50 to-surface-100 p-4 text-surface-900 dark:from-surface-800 dark:to-surface-900 dark:text-surface-50"
        >
            <header class="px-16 py-8">
                <div class="flex items-center justify-between">
                    <NuxtLink to="/" class="font-heading text-2xl font-bold"
                        >KomangWorks</NuxtLink
                    >
                    <div class="flex items-center gap-8">
                        <NuxtLink to="/" class="font-heading text-lg font-bold"
                            >Home</NuxtLink
                        >
                        <NuxtLink
                            to="/products"
                            class="font-heading text-lg font-bold"
                            >Products</NuxtLink
                        >
                    </div>
                </div>
            </header>

            <NuxtPage class="container mx-auto" />
        </div>
    </NuxtLayout>
</template>
