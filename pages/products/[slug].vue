<script setup lang="ts">
import type { Product as TProduct } from '~/types/product'
import type { ParsedContent } from '@nuxt/content/dist/runtime/types'
import fs from 'fs'
import path from 'path'

const route = useRoute()

interface Product extends TProduct, ParsedContent {}

const { data: product } = await useAsyncData('products', () =>
    queryContent<Product>('products')
        .where({ slug: route.params.slug })
        .findOne(),
)

if (!product.value) {
    throw createError({ statusCode: 404, statusMessage: 'Product not found' })
}

useHead({
    title: `${product.value?.name} - KomangWorks`,
})

const selectedVariation = ref(product.value?.variations[0])

watch(selectedVariation, () => console.log(selectedVariation.value))
</script>

<template>
    <main>
        <div v-if="product" class="container mx-auto flex w-1/2 flex-col gap-8">
            <NuxtLink class="inline-block" href="/products">
                <Button icon="ri ri-arrow-left-line" label="Back to Products" />
            </NuxtLink>

            <h1
                class="mt-16 text-center text-4xl"
                style="view-transition-name: product-name"
            >
                {{ product.name }}
            </h1>

            <div class="flex flex-col items-center">
                <Galleria
                    :value="selectedVariation.images"
                    container-class="w-[30rem]"
                    circular
                >
                    <template #item="{ item }">
                        <NuxtImg
                            :src="`/images/${product.slug}/${selectedVariation.name.toLowerCase()}/${item}`"
                            class="w-full"
                            width="300"
                        />
                    </template>

                    <template #thumbnail="{ item }">
                        <NuxtImg
                            :src="`/images/${product.slug}/${selectedVariation.name.toLowerCase()}/${item}`"
                            width="100"
                        />
                    </template>
                </Galleria>

                <SelectButton
                    v-model="selectedVariation"
                    class="mt-8"
                    :options="product.variations"
                    option-label="label"
                />
            </div>

            <div class="flex flex-col items-center">
                <div class="space-y-4">
                    <h2 class="text-2xl font-bold">Description</h2>

                    <p style="view-transition-name: product-desc">
                        {{ product.description }}
                    </p>

                    <Divider />

                    <h2 class="text-2xl font-bold">Features</h2>

                    <ul class="mt-4 space-y-2">
                        <li
                            v-for="feature in product.features"
                            :key="feature"
                            class="list-disc"
                        >
                            {{ feature }}
                        </li>
                    </ul>

                    <Divider />
                </div>
            </div>
        </div>
    </main>
</template>
