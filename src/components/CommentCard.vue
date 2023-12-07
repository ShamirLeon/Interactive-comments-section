<script setup lang="ts">
import { ref } from 'vue'
import FormC from './FormC.vue'
import { useCommentsStore } from '@/stores/comments'

const props = defineProps<{
  data: {
    id: number
    content: string
    createdAt: string
    score: number
    replyingTo?: string
    user: {
      image: {
        png: string
        webp: string
      }
      username: string
    }
    replies: any[]
  }
  currentUser?: string
}>()

const store = useCommentsStore()

function deleteComment(id: number) {
  store.deleteComment(id)
}

function editComment(id: number, content: string) {
  store.editComment(id, content)
  handleEdit()
}

let score = ref(props.data.score)
let isEdit = ref(false)
let isReply = ref(false)
let content = ref(props.data.content)
let replyingTo = ref('')

function addR() {
  store.addReply(2, content.value, replyingTo.value)
}

const increaseScore = () => score.value++
const decreaseScore = () => {
  score.value--
  if (score.value < 0) {
    score.value = 0
  }
}

const handleReply = () => (isReply.value = !isReply.value)
const handleEdit = () => (isEdit.value = !isEdit.value)
</script>

<template>
  <div class="bg-white p-8 rounded-md flex gap-8 w-full max-w-3xl mb-4">
    <div class="flex flex-col items-center justify-center">
      <button
        @click="increaseScore"
        class="grid place-content-center rounded-t-lg bg-Light-Gray w-8 h-8"
      >
        <img src="../assets/images/icon-plus.svg" alt="" />
      </button>
      <span class="w-8 h-8 text-center bg-Light-Gray font-bold text-Moderate-Blue">{{
        score
      }}</span>
      <button
        @click="decreaseScore"
        class="grid place-content-center rounded-b-lg bg-Light-Gray w-8 h-8"
      >
        <img src="../assets/images/icon-minus.svg" alt="" />
      </button>
    </div>
    <div class="w-full">
      <div class="flex justify-between items-center mb-4">
        <div class="flex gap-4 items-center">
          <img class="w-10 h-10" :src="props.data.user.image.png" :alt="props.data.user.username" />
          <h2 class="text-Dark-Blue font-bold">{{ props.data.user.username }}</h2>
          <span class="text-Grayish-Blue">{{ props.data.createdAt }}</span>
        </div>
        <div>
          <div class="flex gap-4 items-center">
            <button
              v-if="props.data.user.username == props.currentUser"
              @click="deleteComment(props.data.id)"
              class="flex gap-2 items-center text-Soft-Red font-bold"
            >
              <img src="../assets/images/icon-delete.svg" />
              Delete
            </button>
            <button
              v-if="props.data.user.username == props.currentUser"
              @click="handleEdit"
              class="flex gap-2 items-center text-Moderate-Blue font-bold"
            >
              <img src="../assets/images/icon-edit.svg" />
              Edit
            </button>
            <button
              v-if="props.data.user.username !== props.currentUser"
              @click="handleReply"
              class="flex gap-2 items-center text-Moderate-Blue font-bold"
            >
              <img src="../assets/images/icon-reply.svg" />
              Reply
            </button>
          </div>
        </div>
      </div>
      <div class="w-full">
        <textarea
          v-if="isEdit"
          v-model="content"
          class="w-full border p-4 h-24 rounded-md border-Light-Gray focus:outline-none focus:border-Moderate-Blue resize-none text-Grayish-Blue min-h-max"
          >{{ props.data.content }}</textarea
        >
        <p v-else class="text-Grayish-Blue">
          <span v-if="props.data.replyingTo" class="text-Moderate-Blue font-bold"
            >@{{ props.data.replyingTo }}</span
          >
          {{ props.data.content }}
        </p>
        <button
          v-if="isEdit"
          @click="editComment(props.data.id, content)"
          class="py-2 px-4 h-min rounded text-white bg-Moderate-Blue"
        >
          Update
        </button>
      </div>
    </div>
  </div>
  <div v-if="isReply" class="w-full mb-1">
    <FormC
      :action="'reply'"
      :replying-to="props.data.user.username"
      :id-com="props.data.id"
    ></FormC>
  </div>
  <div v-if="props.data.replies?.length != 0" class="flex flex-col items-end">
    <div
      v-for="(replie, index) in props.data.replies"
      :key="index"
      class="flex gap-[46px] max-w-3xl"
    >
      <div class="w-1 bg-Light-Gray ml-[46px]"></div>
      <div class="flex-1">
        <CommentCard :current-user="props.currentUser" :data="replie"></CommentCard>
      </div>
    </div>
  </div>
</template>
