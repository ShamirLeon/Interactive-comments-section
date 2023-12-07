<script setup lang="ts">
import { ref } from 'vue'
import data from '@/data/data.json'
import CommentCard from './components/CommentCard.vue'
import FormC from './components/FormC.vue'

import { useCommentsStore } from '@/stores/comments'

const store = useCommentsStore()

let { currentUser } = data

let come = ref(data.comments)

</script>

<template>
  <main class="bg-Backgroun w-[100vw] px-32 pt-16 flex flex-col items-center gap-4 font-Rubik">
    <div
      v-for="(comment, index) in store.commentList"
      :key="index"
      class="w-full flex flex-col items-center"
    >
      <CommentCard :currentUser="currentUser.username" :data="comment"></CommentCard>
    </div>
    <div class="w-full flex justify-center">
      <FormC :action="'send'"></FormC>
    </div>
  </main>
</template>
