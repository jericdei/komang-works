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
</script>

<template>
    <main>
        <div v-if="product" class="mt-16 flex flex-col gap-8">
            <div class="grid gap-8 lg:grid-cols-2">
                <div>
                    <h1
                        class="text-center text-2xl lg:text-4xl"
                        style="view-transition-name: product-name"
                    >
                        {{ product.name }}
                    </h1>

                    <ClientOnly>
                        <div class="mt-8 flex flex-col items-center">
                            <Galleria
                                :value="selectedVariation.images"
                                container-class="lg:w-[30rem]"
                                circular
                            >
                                <template #item="{ item }">
                                    <img
                                        :src="item"
                                        class="w-full"
                                        width="300"
                                        height="200"
                                    />
                                </template>

                                <template #thumbnail="{ item }">
                                    <img
                                        :src="item"
                                        class="object-cover"
                                        width="100"
                                        height="100"
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

                        <template #fallback>
                            <div class="mt-8 flex justify-center">
                                <img
                                    :src="product.main_image"
                                    :alt="product.name"
                                    width="500"
                                    height="300"
                                />
                            </div>
                        </template>
                    </ClientOnly>
                </div>

                <div class="flex flex-col items-center">
                    <div class="space-y-4">
                        <h2 class="text-center text-2xl font-bold lg:text-left">
                            Description
                        </h2>

                        <p
                            class="text-center lg:text-left"
                            style="view-transition-name: product-desc"
                        >
                            {{ product.description }}
                        </p>

                        <Divider />

                        <h2 class="text-center text-2xl font-bold lg:text-left">
                            Features
                        </h2>

                        <ul class="ml-8 mt-4 space-y-2">
                            <li
                                v-for="feature in product.features"
                                :key="feature"
                                class="list-disc"
                            >
                                {{ feature }}
                            </li>
                        </ul>

                        <Divider />

                        <h2 class="text-center text-2xl font-bold lg:text-left">
                            Specifications
                        </h2>

                        <ul class="ml-8 mt-4 space-y-2">
                            <li
                                v-for="specification in product.specifications"
                                :key="specification.part"
                                class="list-disc"
                            >
                                <span class="font-bold">{{
                                    specification.part
                                }}</span>

                                <ul>
                                    <li
                                        v-for="(
                                            value, key
                                        ) in specification.value"
                                        :key="key"
                                        :class="key"
                                    >
                                        {{ capitalizeFirstLetter(key) }}:
                                        {{ value }}
                                    </li>
                                </ul>
                            </li>
                        </ul>

                        <Divider />

                        <Button
                            class="w-full lg:w-auto"
                            label="Order Now"
                            size="large"
                            icon="ri-shopping-cart-line"
                        />
                    </div>
                </div>
            </div>
        </div>
    </main>
</template>
