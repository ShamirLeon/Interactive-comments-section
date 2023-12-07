import { defineStore } from 'pinia'
import data from '@/data/data.json'
import type { IUser } from '@/interfaces/Interfaces'

export const useCommentsStore = defineStore('comments', {
  state: () => ({
    commentList: data.comments,
    replie: {
      content: '',
      createdAt: '1 hour',
      score: 0,
      replyingTo: ''
    }
  }),

  getters: {},

  actions: {
    addComment(comment: any) {
      console.log(comment)
      this.commentList.push(comment)
    },

    deleteComment(id: number) {
      this.commentList = this.commentList.filter((comment) => comment.id !== id)
    },

    editComment(id: number, content: string) {
      const indexComment = this.commentList.findIndex((comm) => comm.id == id)
      this.commentList[indexComment].content = content
    },

    addReply(
      idComment: number,
      content: string,
      replyingTo: string,
      user: IUser = data.currentUser
    ) {
      const commentR = this.commentList.find((comment) => {
        return comment.id == idComment
      })

      const id = commentR?.replies.length! + 1

      const reply = {
        ...this.replie,
        id: id,
        content: content,
        replyingTo: replyingTo,
        user: user
      }
      commentR?.replies.push(reply)
    },

    editReply() {}
  }
})
