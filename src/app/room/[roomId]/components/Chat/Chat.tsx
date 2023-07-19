import {Message} from '../../models'
import Title from './components/Title/Title'
import Messages from './Messages/Messages'
import NewMessageForm from './components/NewMessageForm/NewMessageForm'
import {ChangeEvent, Dispatch, FormEvent, SetStateAction} from 'react'

interface Props {
  messages: Message[]
  message: Message
  setMessage: Dispatch<SetStateAction<Message>>
  sendMessage: (e: FormEvent<HTMLFormElement>) => void
  handleChange: (e: ChangeEvent<HTMLInputElement>) => void
}

export const Chat = ({
  message,
  messages,
  setMessage,
  sendMessage,
  handleChange,
}: Props): React.JSX.Element => {
  return (
    <div className="w-full p-2 overflow-hidden h-1/2 ">
      <Title />
      <Messages messages={messages} />
      <NewMessageForm
        message={message}
        setMessage={setMessage}
        sendMessage={sendMessage}
        handleChange={handleChange}
      />
    </div>
  )
}

export default Chat
