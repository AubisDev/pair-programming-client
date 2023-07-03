'use client'
import {ChangeEvent, FormEvent, useEffect, useState} from 'react'
import {
  Chat,
  CodeEditor,
  MultiplePurpose,
  ResizableContainer,
} from './components'
import {useParams} from 'next/navigation'
import {User} from '@/models'
import {userStore, editorStore} from '@/app/store'
import {socket, moveToLastMessage, randomID} from '@/app/utils'
import EditorConfigProvider from './context/editorContext'
import {Message} from './models'
import {setMessageInitialState} from './utils'

const Room = () => {
  const [users, setUsers] = useState<User[]>([])
  const content = editorStore(state => state.editorContent)
  const [editorContent, setEditorContent] = useState(content)
  const username = userStore(state => state.username)
  const [message, setMessage] = useState<Message>(
    setMessageInitialState(username),
  )
  const [messages, setMessages] = useState<Message[]>([])
  const params = useParams()

  useEffect(() => {
    moveToLastMessage()
  }, [messages])

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
    // adding users
    socket.on('users', users => {
      console.log(users)
      setUsers(users)
    })

    //Message from server
    socket.on('message', ({message: Message}) => {
      setMessages(prevMessages => [...prevMessages, message])
    })
    // user enters the  room
    socket.on('connected', user => {
      console.log('connected')
      setUsers(users => [...users, user])
    })
    // Disconnected user
    socket.on('disconnected', id => {
      setUsers(users => {
        return users.filter(user => user.userID !== id)
      })
    })
  }, [])

  const sendMessage = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    socket.emit('send-message', {message: message.text, roomId: params.roomId})
    setMessage(setMessageInitialState(username))
  }

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    let prevState = {...message}
    prevState.text = e.target.value
    setMessage(prevState)
  }

  return (
    <EditorConfigProvider>
      <div className="flex flex-row h-screen overflow-hidden">
        <ResizableContainer>
          <CodeEditor />
        </ResizableContainer>
        <div className="flex flex-col w-full h-full min-w-[400px] overflow-hidden">
          <MultiplePurpose editorContent={editorContent} />
          <Chat
            messages={messages}
            message={message}
            setMessage={setMessage}
            sendMessage={sendMessage}
            handleChange={handleChange}
          />
        </div>
      </div>
    </EditorConfigProvider>
  )
}
export default Room
