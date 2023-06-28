import {Message} from '../../models'
import Title from './components/Title/Title'
import Messages from './Messages/Messages'
import NewMessageForm from './components/NewMessageForm/NewMessageForm'

interface Props {
  messages: Message[]
}

export const Chat = ({messages}: Props) => {
  return (
    <div className="w-full p-2 px-2 overflow-hidden h-1/2">
      <Title />
      <Messages messages={messages} />
      <NewMessageForm />
    </div>
  )
}
export default Chat
