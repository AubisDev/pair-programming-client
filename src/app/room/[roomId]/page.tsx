'use client'
import {FormEvent, useEffect, useState} from 'react'
import CodeEditor from './components/CodeEditor'
import ResizableContainer from './components/ResizableContainer'
import TextSection from './components/TextSection'
import Chat from './components/Chat/Chat'
import {useParams, useRouter} from 'next/navigation'
import {Role, User} from '@/models/user.model'
import {Socket, io} from 'socket.io-client'
import {DefaultEventsMap} from 'socket.io/dist/typed-events'

export const socket: Socket<DefaultEventsMap, DefaultEventsMap> = io(
  'http://localhost:4000',
)

export interface Message {
  text: string
  time: string
  username: string
}

const messageInitialState = {
  text: '',
  time: '',
  username: 'username',
}

const Room = () => {
  const [users, setUsers] = useState<User[]>([])
  const [message, setMessage] = useState<Message>(messageInitialState)
  const [messages, setMessages] = useState<Message[]>([])
  const params = useParams()

  useEffect(() => {
    socket.emit('join-room', {username: message.username, room: params.roomId})

    socket.on('connect', () => {
      console.log('connect')
      socket.emit('userName', message.username)
    })

    socket.on('users', users => {
      console.log(users)
      setUsers(users)
    })

    //Message from server
    socket.on('message', (message: Message) => {
      console.log(message)
      setMessages(prevMessages => [...prevMessages, message])
      let messagesContainer = document.getElementById('chat-messages')
      if (messagesContainer) {
        messagesContainer.scrollTop = messagesContainer.scrollHeight
      }
    })

    socket.on('connected', user => {
      console.log('connected')
      setUsers(users => [...users, user])
    })

    socket.on('disconnected', id => {
      console.log('connected')
      setUsers(users => {
        return users.filter(user => user.userID !== id)
      })
    })
  }, [])

  const sendMessage = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    socket.emit('send-message', message.text)
    console.log(message)
    setMessage(messageInitialState)
  }

  //Message for DOM

  return (
    <div className="flex flex-row h-screen overflow-hidden">
      <ResizableContainer>
        <CodeEditor />
      </ResizableContainer>
      <div className="flex flex-col w-full h-full min-w-[400px] overflow-hidden">
        {/* <Whiteboard /> */}
        <TextSection />
        <Chat
          message={message}
          setMessage={setMessage}
          messages={messages}
          setMessages={setMessages}
          roomId={params.roomId}
          sendMessage={sendMessage}
        />
      </div>
    </div>
  )
}
export default Room
