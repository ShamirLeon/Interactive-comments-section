<script setup lang="ts">
import data from '@/data/data.json'
import { useCommentsStore } from '@/stores/comments'
import { ref } from 'vue'

const store = useCommentsStore()

const props = defineProps<{
  replyingTo?: string
  action: string
  idCom?: number
}>()

function addComment() {
  store.addComment(comment)
}

function addR() {
  store.addReply(props.idCom!, contentC.value, props.replyingTo!)
}

let { currentUser } = data

let contentC = ref('')
let comment = {
  content: contentC,
  createdAt: '1 month ago',
  score: 0,
  user: {
    ...currentUser
  },
  replies: []
}
</script>

<template>
  <form
    class="bg-white p-8 rounded-md flex gap-8 mb-4 flex-1 max-w-3xl"
    @submit.prevent="props.action == 'reply' ? addR() : addComment()"
  >
    <img :src="data.currentUser.image.png" alt="" class="w-10 h-10" />
    <textarea
      :placeholder="props.action == 'reply' ? 'Add a replie' : 'Add a comment'"
      v-model="contentC"
      class="flex-1 border p-4 h-24 rounded-md border-Light-Gray focus:outline-none focus:border-Moderate-Blue resize-none"
    ></textarea>
    <button type="submit" class="py-2 px-4 h-min rounded text-white bg-Moderate-Blue">
      {{ props.action }}
    </button>
  </form>
</template>
