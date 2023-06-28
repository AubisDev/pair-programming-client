import {Message} from '@/app/room/[roomId]/models'
import {userStore} from '@/app/store'
import {socket} from '@/app/utils'
import {useParams} from 'next/navigation'
import {ChangeEvent, FormEvent, useEffect, useState} from 'react'
import {setMessageInitialState} from './utils'

export const NewMessageForm = () => {
  const username = userStore(state => state.username)
  const params = useParams()
  const [message, setMessage] = useState<Message>(
    setMessageInitialState(username),
  )

  useEffect(() => {
    socket.emit('join-room', {username: message.username, room: params.roomId})
  }, [])

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    let prevState = {...message}
    prevState.text = e.target.value
    setMessage(prevState)
  }

  const sendMessage = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    socket.emit('send-message', message.text)
    setMessage(setMessageInitialState(username))
  }

  return (
    <form
      onSubmit={e => sendMessage(e)}
      className="w-full h-[10%] flex items-center flex-row gap-x-2 "
    >
      <input
        type="text"
        placeholder="New Message"
        onChange={e => handleChange(e)}
        value={message.text}
        className="w-4/5 h-full px-2 text-white border-2 border-purple-700 rounded-md bg-black/30 focus:border-purple-700/30 focus:outline-purple-700/30"
      />
      <button className="h-full m-auto text-sm font-semibold text-white bg-purple-700 rounded-md w-28 ">
        SEND
      </button>
    </form>
  )
}
export default NewMessageForm
