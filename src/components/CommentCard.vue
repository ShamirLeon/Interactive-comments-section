<script setup lang="ts">
import { ref } from 'vue';
const props = defineProps<{
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

let score =  ref(props.data.score)

const increaseScore = () => score.value++; 
const decreaseScore = () => score.value-- ;
</script>

<template>
  <div class="bg-white p-8 rounded-md flex gap-8 max-w-3xl mb-4">
    <div class="flex flex-col items-center justify-center">
      <button @click="increaseScore" class="grid place-content-center rounded-t-lg bg-Light-Gray w-8 h-8"><img src="../assets/images/icon-plus.svg" alt=""></button>
      <span class="w-8 h-8 text-center bg-Light-Gray font-bold text-Moderate-Blue">{{ score }}</span>
      <button @click="decreaseScore" class="grid place-content-center rounded-b-lg bg-Light-Gray w-8 h-8"><img src="../assets/images/icon-minus.svg" alt=""></button>
    </div>
    <div>
      <div class="flex justify-between mb-4">
        <div class="flex gap-4 items-center">
          <img class="w-10 h-10" :src="data.user.image.png" :alt="data.user.username" />
          <h2 class="text-Dark-Blue font-bold">{{ data.user.username }}</h2>
          <span class="text-Grayish-Blue">{{ data.createdAt }}</span>
        </div>
        <button @click="increaseScore" class="flex gap-2 items-center">
          <img src="../assets/images/icon-reply.svg" />
          <span class="text-Moderate-Blue font-bold">Reply</span>
        </button>
      </div>
      <div>
        <p class="text-Grayish-Blue">{{ data.content }}</p>
      </div>
    </div>
  </div>
</template>
