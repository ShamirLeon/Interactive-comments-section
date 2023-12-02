<script setup lang="ts">
import data from '@/data/data.json'
import CommentCard from './components/CommentCard.vue'

const user = data.comments[0]
</script>

<template>
  <main class="bg-Backgroun w-[100vw] h-[100vh] px-32">
    <CommentCard :data="user"></CommentCard>
  </main>
</template>
