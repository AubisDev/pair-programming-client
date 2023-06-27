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
    <div className="w-full p-2 px-2 overflow-hidden h-1/2">
      <p className="text-lg font-semibold text-center text-purple-500 h-[8%]">
        Room Chat
      </p>
      <div className="w-full h-[84%] overflow-y-scroll" id="chat-messages">
        {messages.map((chatMessage: Message) => (
          <div
            key={uuidv4()}
            className="relative flex items-end p-2 mb-2 text-sm text-white break-words rounded-lg bg-gradient-to-tr from-blue-800/40 to-purple-800/40"
          >
            <span className="absolute top-0 left-0 p-2 text-xs text-white/40">
              {chatMessage.time}
            </span>
            <p className="pt-3">
              <span className="text-sky-400">
                {chatMessage.username}:{'  '}
              </span>
              {chatMessage.text}
            </p>
          </div>
        ))}
      </div>
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
    </div>
  )
}
export default Chat
