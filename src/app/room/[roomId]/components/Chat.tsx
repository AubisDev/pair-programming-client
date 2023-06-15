import {SocketSlice} from '@/app/store/slices/socketSlice'
import useStore from '@/app/store/slices/store'
import {User, UserSlice} from '@/app/store/slices/userSlice'
import {useEffect, useState} from 'react'
import {Socket} from 'socket.io'
import {io} from 'socket.io-client'

const Chat = () => {
  const [message, setMessage] = useState('')
  const [messageReceived, setMessageReceived] = useState('')
  const socket = useStore((state: SocketSlice) => state.socket)
  const userName = useStore((state: UserSlice) => state.user.userName)

  const sendMessage = () => {
    if (socket) {
      socket.emit('send-message', {message, userName})
    }
  }

  useEffect(() => {
    if (socket) {
      socket.on('receive-message', (data: any) => {
        setMessageReceived(data.message)
      })
    }
  }, [socket])

  return <div className="h-1/2">chatWTe</div>
}
export default Chat
