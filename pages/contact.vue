<script setup lang="ts">
useHead({
    title: 'Contact Us - KomangWorks',
})
</script>

<template>
    <main class="mt-8 lg:p-16">
        <h1 class="text-center text-4xl lg:text-6xl">Contact Us</h1>

        <div class="mt-8 flex flex-col gap-8 lg:flex-row">
            <LocationMap />

            <div>
                <p class="text-center text-xl lg:text-left">
                    Call or message us through
                </p>

                <ul
                    class="ml-4 mt-8 flex list-disc flex-col items-center text-lg lg:items-start"
                >
                    <li>09776138431 (Globe/TM)</li>
                    <li>09954400496 (Globe/TM)</li>
                    <li>09566613209 (Globe/TM)</li>
                </ul>

                <div class="mt-8">
                    <p class="text-center text-xl lg:text-left">
                        Or you can visit us at
                    </p>

                    <p class="mt-4 text-center lg:text-left">
                        <span>
                            Phase 9, Package 3C, Blk. 31, Lot 17, Bagong Silang,
                            Barangay 176, City of Caloocan, NCR, Third District,
                            Philippines
                        </span>
                    </p>
                </div>
            </div>
        </div>
    </main>
</template>
