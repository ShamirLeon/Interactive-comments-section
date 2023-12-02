<script setup lang="ts">
defineProps<{
  data: {
    id: number
    content: string
    createdAt: string
    score: number
    user: {
      image: {
        png: string
        webp: string
      }
      username: string
    }
  }
}>()
</script>

<template>
  <div class="bg-white p-8 rounded-md">
    <div class="flex justify-between mb-4">
      <div class="flex gap-4 items-center">
        <img class="w-10 h-10" :src="data.user.image.png" :alt="data.user.username" />
        <h2 class="text-Dark-Blue font-bold">{{ data.user.username }}</h2>
        <span class="text-Grayish-Blue">{{ data.createdAt }}</span>
      </div>
      <div class="flex gap-2 items-center">
        <img src="./assets/images/icon-reply.svg" alt="" />
        <span class="text-Moderate-Blue font-bold">Reply</span>
      </div>
    </div>
    <div>
      <p class="text-Grayish-Blue">{{ data.content }}</p>
    </div>
  </div>
</template>
