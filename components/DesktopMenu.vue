<script setup lang="ts">
defineProps<{
    menuItems: { label: string; to: string }[]
}>()
</script>

<template>
    <div class="hidden items-center gap-8 lg:flex">
        <NuxtLink
            v-for="{ label, to } in menuItems"
            :key="to"
            :to
            class="font-heading text-lg"
            :class="{
                'font-bold text-primary-500 underline': $route.path === to,
            }"
        >
            {{ label }}
        </NuxtLink>
    </div>
</template>
