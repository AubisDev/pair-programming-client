import {Socket} from 'socket.io-client'
import {create} from 'zustand'
import {SocketSlice, createSocketSlice} from './socketSlice'
import {UserSlice, createUserSlice} from './userSlice'
import {devtools, persist} from 'zustand/middleware'

const useStore = create<SocketSlice & UserSlice>()((...a) => ({
  ...createSocketSlice(...a),
  ...createUserSlice(...a),
}))

export default useStore
