<script setup lang="ts">
import data from '@/data/data.json'
import CommentCard from './components/CommentCard.vue'

</script>

<template>
  <main class="bg-Backgroun w-[100vw] h-[100vh] px-32 pt-16 flex flex-col items-center">
    <div v-for="(comment, index) in data.comments" key="index">
      <CommentCard :data="comment"></CommentCard>
    </div>
  </main>
</template>
