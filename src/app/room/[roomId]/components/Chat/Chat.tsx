import {randomUUID} from 'crypto'
import {ChangeEvent, Dispatch, FormEvent, SetStateAction} from 'react'
import {Message} from '../../page'
import {v4 as uuidv4} from 'uuid'

interface Props {
  messages: Message[]
  setMessages: Dispatch<SetStateAction<Message[]>>
  roomId: string
  sendMessage: (e: FormEvent<HTMLFormElement>) => void
  message: Message
  setMessage: (message: Message) => void
}

const Chat = ({messages, sendMessage, message, setMessage}: Props) => {
  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    let prevState = {...message}
    prevState.text = e.target.value
    setMessage(prevState)
  }

  return (
    <div className="w-full px-2 overflow-hidden h-1/2">
      <p>Messages</p>
      <div className="w-full h-[85%] overflow-y-scroll" id="chat-messages">
        {messages.map((chatMessage: Message) => (
          <div
            key={uuidv4()}
            className="relative flex items-end p-3 mb-2 text-sm text-white break-words rounded-lg bg-gradient-to-tr from-blue-800/10 to-purple-800/10"
          >
            <span className="absolute top-0 left-0 p-2 text-xs text-white/40">
              {chatMessage.time}
            </span>
            <p className="pt-3">
              <span className="text-purple-600">
                {chatMessage.username}:{'  '}
              </span>
              {chatMessage.text}
            </p>
          </div>
        ))}
      </div>
      <form onSubmit={e => sendMessage(e)} className="w-full h-[15%]">
        <input
          type="text"
          placeholder="New Message"
          onChange={e => handleChange(e)}
          value={message.text}
          className="w-4/5"
        />
        <button>Send</button>
      </form>
    </div>
  )
}
export default Chat
