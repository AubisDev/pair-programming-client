import {Socket} from 'socket.io-client'

export const socketHandler = (socket: Socket) => {
  const createRoom = (userName: string) => {
    socket.emit('create-room', userName)
  }

  const joinRoom = (userName: string, roomId: string) => {
    socket.emit('join-room', {userName, roomId})
  }

  const leaveRoom = (userName: string, roomId: string) => {
    socket.emit('leave-room', {userName, roomId})
  }

  const sendMessage = (message: string, roomId: string) => {
    socket.emit('send-message', {message, roomId})
  }
  return {
    createRoom,
    joinRoom,
    leaveRoom,
  }
}
