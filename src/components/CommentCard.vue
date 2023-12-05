<script setup lang="ts">
import { ref } from 'vue';
import { type IData, type IUser, type IReplies } from '@/interfaces/Interfaces';

const props = defineProps<{
  data: {
    id: number;
    content: string;
    createdAt: string;
    score: number;
    replyingTo?: string;
    user: {
      image: {
        png: string;
        webp: string;
      };
      username: string;
    }
    replies: any[]
  }
}>()

let score =  ref(props.data.score)

const increaseScore = () =>  score.value++; 
const decreaseScore = () =>  score.value-- ;
</script>

<template>
  <div class="bg-white p-8 rounded-md flex gap-8 w-full max-w-3xl mb-4">
    <div class="flex flex-col items-center justify-center">
      <button @click="increaseScore" class="grid place-content-center rounded-t-lg bg-Light-Gray w-8 h-8"><img src="../assets/images/icon-plus.svg" alt=""></button>
      <span class="w-8 h-8 text-center bg-Light-Gray font-bold text-Moderate-Blue">{{ score }}</span>
      <button @click="decreaseScore" class="grid place-content-center rounded-b-lg bg-Light-Gray w-8 h-8"><img src="../assets/images/icon-minus.svg" alt=""></button>
    </div>
    <div>
      <div class="flex justify-between mb-4">
        <div class="flex gap-4 items-center">
          <img class="w-10 h-10" :src="props.data.user.image.png" :alt="props.data.user.username" />
          <h2 class="text-Dark-Blue font-bold">{{ props.data.user.username }}</h2>
          <span class="text-Grayish-Blue">{{ props.data.createdAt }}</span>
        </div>
        <button @click="increaseScore" class="flex gap-2 items-center">
          <img src="../assets/images/icon-reply.svg" />
          <span class="text-Moderate-Blue font-bold">Reply</span>
        </button>
      </div>
      <div>
        <p class="text-Grayish-Blue">{{ props.data.content }}</p>
      </div>
    </div>
  </div>

  <div v-if="props.data.replies?.length != 0" class="flex flex-col items-end">
    <div v-for="(replie, index) in props.data.replies" class="flex max-w-3xl pl-12">
      <div class="w-1 bg-LightGrayish-Blue mr-10"></div>
      <CommentCard :data="replie"></CommentCard>
    </div>
  </div>
</template>
