<script setup lang="ts">
import type { Product as TProduct } from '~/types/product'
import type { ParsedContent } from '@nuxt/content/dist/runtime/types'

useHead({
    title: 'Products - KomangWorks',
})

interface Product extends TProduct, ParsedContent {}

const { data: products } = await useAsyncData('products', () =>
    queryContent<Product>('products').find(),
)
</script>

<template>
    <main class="lg:p-16">
        <h1 class="text-center text-4xl lg:text-6xl">Products</h1>

        <section class="mt-32 flex flex-col items-center space-y-8">
            <div
                v-for="product in products"
                :key="product?.name"
                class="w-[50rem]"
            >
                <div class="flex gap-8">
                    <NuxtImg
                        :src="product.main_image"
                        width="300"
                        class="rounded-xl"
                        style="view-transition-name: product-image"
                    />

                    <div class="flex flex-col items-start justify-between">
                        <div class="space-y-4">
                            <h2
                                class="text-3xl"
                                style="view-transition-name: product-name"
                            >
                                {{ product.name }}
                            </h2>

                            <p style="view-transition-name: product-desc">
                                {{ product.description }}
                            </p>

                            <div class="flex flex-row gap-2">
                                <Tag
                                    v-for="feature in product.features"
                                    :key="feature"
                                    :value="feature"
                                    severity="info"
                                />
                            </div>
                        </div>

                        <NuxtLink :href="`/products/${product.slug}`">
                            <Button label="View Product" />
                        </NuxtLink>
                    </div>
                </div>
            </div>
        </section>
    </main>
</template>
