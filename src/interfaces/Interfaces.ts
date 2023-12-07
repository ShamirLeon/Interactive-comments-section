export interface IReplies {
  id: number
  content: string
  createdAt: string
  score: number
  replyingTo: string | null
}

export interface IData {
  id: number
  content: string
  createdAt: string
  score: number
  user: IUser
}

export interface IUser {
  image: {
    png: string
    webp: string
  }
  username: string
}

export interface IDataStorage {
  currentUser: IUser
  comments: IData[]
}
