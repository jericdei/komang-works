<script setup lang="ts">
defineProps<{
    menuItems: { label: string; to: string }[]
}>()

const sidebarIsVisible = ref(false)
</script>

<template>
    <Button
        class="lg:hidden"
        icon="ri-menu-line font-bold ri-lg"
        text
        rounded
        @click="sidebarIsVisible = !sidebarIsVisible"
    />

    <Sidebar v-model:visible="sidebarIsVisible" position="right">
        <template #header>
            <Logo :width="30" />
        </template>

        <nav class="mt-16 flex flex-col items-center justify-center space-y-8">
            <NuxtLink
                v-for="{ label, to } in menuItems"
                :key="to"
                :to="to"
                class="font-heading text-lg"
                :class="{
                    'inline-block w-full rounded-lg border-2 border-primary-500 px-4 py-2 text-center font-bold text-primary-500':
                        $route.path === to,
                }"
                @click="sidebarIsVisible = false"
            >
                {{ label }}
            </NuxtLink>
        </nav>
    </Sidebar>
</template>
