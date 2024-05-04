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
    <main class="mt-8 lg:p-16">
        <h1 class="text-center text-4xl lg:text-6xl">Products</h1>

        <section class="mt-32 flex flex-col items-center space-y-8">
            <div
                v-for="product in products"
                :key="product?.name"
                class="lg:w-[50rem]"
            >
                <div class="flex flex-col gap-8 lg:flex-row">
                    <div class="flex justify-center">
                        <img
                            :src="product.main_image"
                            width="300"
                            class="rounded-xl"
                            style="view-transition-name: product-image"
                        />
                    </div>

                    <div class="flex flex-col justify-between lg:items-start">
                        <div class="space-y-4 text-center lg:text-left">
                            <h2
                                class="text-xl lg:text-3xl"
                                style="view-transition-name: product-name"
                            >
                                {{ product.name }}
                            </h2>

                            <p style="view-transition-name: product-desc">
                                {{ product.description }}
                            </p>

                            <div
                                class="flex flex-row justify-center gap-2 lg:justify-start"
                            >
                                <Tag
                                    v-for="feature in product.features"
                                    :key="feature"
                                    :value="feature"
                                    severity="info"
                                />
                            </div>
                        </div>

                        <div class="mt-4 flex justify-center lg:mt-0">
                            <NuxtLink
                                :href="`/products/${product.slug}`"
                                class="w-full"
                            >
                                <Button class="w-full" label="View Product" />
                            </NuxtLink>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    </main>
</template>
