import {Socket} from 'socket.io-client'
import {create} from 'zustand'
import {UserSlice, createUserSlice} from './slices/userSlice'
import {createJSONStorage, devtools, persist} from 'zustand/middleware'

export interface UserState {
  username: string
  setUsername: (user: string) => void
}

const userStore = create<UserState>()(
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

export default userStore
