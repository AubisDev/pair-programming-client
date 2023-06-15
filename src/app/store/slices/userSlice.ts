import {StateCreator} from 'zustand'

export interface UserSlice {
  user: User
  setUserData: (user: User) => void
}

export const createUserSlice: StateCreator<UserSlice> = set => ({
  user: {
    userName: '',
    userID: '',
    rol: Rol.notAssigned,
  },
  setUserData: (userData: User) =>
    set((state: UserSlice) => ({...state, user: userData})),
})

export type User = {
  userName: string
  userID: string
  rol: Rol.notAssigned
}

export enum Rol {
  roomCreator = 'room creator',
  invited = 'user invited',
  moderator = 'moderator',
  notAssigned = 'Not assigned',
}
