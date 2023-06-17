import {Socket} from 'socket.io-client'
import {create} from 'zustand'
import {UserSlice, createUserSlice} from './slices/userSlice'
import {createJSONStorage, devtools, persist} from 'zustand/middleware'

export interface UserState {
  username: string
  setUsername: (user: string) => void
}
export interface EditorState {
  editorContent: string | undefined
  room: string
  setEditorContent: (editorContent: string | undefined) => void
  setRoom: (room: string) => void
}

export const userStore = create<UserState>()(
  persist(
    set => ({
      username: '',
      setUsername: (userName: string) => set(() => ({username: userName})),
    }),
    {
      name: 'user',
    },
  ),
)

export const editorStore = create<EditorState>()(set => ({
  room: '',
  editorContent: '',
  setEditorContent: (newContent: string | undefined) =>
    set(() => ({editorContent: newContent})),
  setRoom: (room: string) => set(() => ({room: room})),
}))
