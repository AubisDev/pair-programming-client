import {Message} from '../../../models'
import {v4 as uuidv4} from 'uuid'

interface Props {
  messages: Message[]
}

const Messages = ({messages}: Props) => {
  return (
    <div className="w-full h-[80%]  overflow-y-scroll " id="chat-messages">
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
  )
}
export default Messages
