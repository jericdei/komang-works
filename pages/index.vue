<script setup lang="ts">
useHead({
    title: 'KomangWorks - Da Original Maker of Kalan de Used Oil, All Stainless',
})
</script>

<template>
    <main class="lg:px-16">
        <section
            class="grid grid-cols-2 items-center text-center lg:py-32 lg:text-left"
        >
            <div class="space-y-8">
                <h1 class="text-4xl lg:text-7xl">KomangWorks</h1>

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

            <div>
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
