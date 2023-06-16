import {randomUUID} from 'crypto'
import {Dispatch, FormEvent, SetStateAction} from 'react'
import {Message} from '../page'

interface Props {
  messages: string[]
  setMessages: Dispatch<SetStateAction<string[]>>
  roomId: string
  sendMessage: (e: FormEvent<HTMLFormElement>) => void
  message: string
  setMessage: (message: string) => void
}

const Chat = ({messages, sendMessage, message, setMessage}: Props) => {
  return (
    <div className="w-full px-2 overflow-hidden h-1/2">
      <p>Messages</p>
      <div className="w-full h-[85%] overflow-y-scroll">
        {messages.map((chatMessage, i) => (
          <p
            key={chatMessage + i}
            className="p-1 px-3 mb-2 text-white break-words rounded-lg bg-gradient-to-tr from-blue-800/30 to-purple-800/30"
          >
            {chatMessage}
          </p>
        ))}
      </div>
      <form onSubmit={e => sendMessage(e)} className="w-full h-[15%]">
        <input
          type="text"
          placeholder="New Message"
          onChange={e => setMessage(e.currentTarget.value)}
          value={message}
          className="w-4/5"
        />
        <button>Send</button>
      </form>
    </div>
  )
}
export default Chat
