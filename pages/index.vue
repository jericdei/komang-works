<script setup lang="ts">
useHead({
    title: 'KomangWorks - Da Original Maker of Kalan de Used Oil, All Stainless',
})
</script>

<template>
    <main class="pt-32 lg:px-16 lg:pt-0">
        <section
            class="grid items-center gap-16 text-center lg:grid-cols-2 lg:py-32 lg:text-left"
        >
            <div class="mt-8 space-y-8 lg:mt-0">
                <h1 class="text-4xl md:text-5xl lg:text-6xl xl:text-7xl">
                    KomangWorks
                </h1>

                <p class="text-xl">
                    Home of
                    <strong class="italic"
                        >"Da Original Maker of Kalan de Used Oil, All
                        Stainless"</strong
                    >
                </p>

                <NuxtLink class="inline-block" href="/products">
                    <Button label="Learn More" />
                </NuxtLink>
            </div>

            <div class="order-first flex justify-center lg:order-last">
                <img
                    class="rounded-lg"
                    alt="Kalan de Used Oil"
                    src="/images/kalan-de-used-oil/main.jpg"
                    width="600"
                />
            </div>
        </section>
    </main>
</template>
