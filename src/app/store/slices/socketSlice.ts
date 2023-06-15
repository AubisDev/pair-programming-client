import {Socket} from 'socket.io-client'
import {StateCreator} from 'zustand'

export interface SocketSlice {
  socket: Socket | null
  setSocket: (socketData: Socket) => void
}

export const createSocketSlice: StateCreator<SocketSlice> = (set: any) => ({
  socket: null,
  setSocket: (socketData: Socket) =>
    set((state: SocketSlice) => ({...state, socket: socketData})),
})
