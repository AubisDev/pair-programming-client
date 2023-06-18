'use client'
import {FormEvent, useEffect, useState} from 'react'
import ResizableContainer from './components/ResizableContainer'
import TextSection from './components/TextSection'
import Chat from './components/Chat/Chat'
import {useParams, useRouter} from 'next/navigation'
import {Role, User} from '@/models/user.model'
import {Socket, io} from 'socket.io-client'
import {DefaultEventsMap} from 'socket.io/dist/typed-events'
import {userStore, editorStore} from '@/app/store/store'
import {randomID} from '@/app/utils/username'
import {socket} from '@/app/utils/socket'
import CodeEditor from './components/CodeEditor/CodeEditor'

// export const socket: Socket<DefaultEventsMap, DefaultEventsMap> = io(
//   'http://localhost:4000',
// )

export interface Message {
  text: string
  time: string
  username: string
}

const Room = () => {
  const [users, setUsers] = useState<User[]>([])
  const [text, setText] = useState('')
  const content = editorStore(state => state.editorContent)
  const [editorContent, setEditorContent] = useState(content)
  const username = userStore(state => state.username)
  const setContent = editorStore(state => state.setEditorContent)
  const messageInitialState = {
    text: '',
    time: '',
    username: username.length !== 0 ? username : `User-${randomID()}`,
  }
  const [message, setMessage] = useState<Message>(messageInitialState)
  const [messages, setMessages] = useState<Message[]>([])
  const params = useParams()

  const onSaveClick = () => {
    socket.emit('update-editor', {
      room: params.roomId,
      content: editorContent,
    })
  }

  useEffect(() => {
    document.addEventListener('keydown', function (event) {
      if (event.ctrlKey && event.key === 's') {
        event.preventDefault()
        socket.emit('update-editor', {
          room: params.roomId,
          content: editorContent,
        })
      }
    })
  }, [editorContent, params.roomId])

  useEffect(() => {
    //join chatroom
    socket.emit('join-room', {username: message.username, room: params.roomId})

    //get room and users
    socket.on('room-users', ({room, users}) => {
      setUsers(users)
      console.log(users)
    })

    //join chatroom
    socket.on('connect', () => {
      console.log('connect')
      socket.emit('userName', username)
    })

    socket.on('users', users => {
      console.log(users)
      setUsers(users)
    })

    //Message from server
    socket.on('message', (message: Message) => {
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
      setUsers(users => {
        return users.filter(user => user.userID !== id)
      })
    })

    socket.on('client-editor', newEditorContent => {
      console.log(newEditorContent)
      setContent(newEditorContent)
    })

    socket.on('textarea', newText => {
      console.log('after: ' + newText)
      setText(newText)
    })
  }, [])

  const sendMessage = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    socket.emit('send-message', message.text)
    setMessage(messageInitialState)
  }

  return (
    <div className="flex flex-row h-screen overflow-hidden">
      <ResizableContainer>
        <CodeEditor
          content={content}
          onSaveClick={onSaveClick}
          editorContent={editorContent}
          setEditorContent={setEditorContent}
        />
      </ResizableContainer>
      <div className="flex flex-col w-full h-full min-w-[400px] overflow-hidden">
        {/* <Whiteboard /> */}
        <TextSection text={text} setText={setText} />
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
