import {Socket, io} from 'socket.io-client'
import {DefaultEventsMap} from 'socket.io/dist/typed-events'

interface Message {
  message: string
  roomId: string
  // userName: string
}

export const socket: Socket<DefaultEventsMap, DefaultEventsMap> = io(
  'http://localhost:4000',
)

export const socketHandler = (
  socket: Socket<DefaultEventsMap, DefaultEventsMap>,
) => {
  const createRoom = (userName: string) => {
    socket.emit('create-room', userName)
  }

  const joinRoom = (userName: string, roomId: string) => {
    socket.emit('join-room', {userName, roomId})
  }

  const leaveRoom = (userName: string, roomId: string) => {
    socket.emit('leave-room', {userName, roomId})
  }

  const sendMessage = (data: Message) => {
    socket.emit('message', data)
  }

  return {
    createRoom,
    joinRoom,
    leaveRoom,
    sendMessage,
  }
}
