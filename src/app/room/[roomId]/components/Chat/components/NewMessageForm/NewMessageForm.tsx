import {Message} from '@/app/room/[roomId]/models'
import {userStore} from '@/app/store'
import {ChangeEvent, Dispatch, FormEvent, SetStateAction} from 'react'

interface Props {
  message: Message
  setMessage: Dispatch<SetStateAction<Message>>
  sendMessage: (e: FormEvent<HTMLFormElement>) => void
  handleChange: (e: ChangeEvent<HTMLInputElement>) => void
}

export const NewMessageForm = ({sendMessage, message, handleChange}: Props) => {
  return (
    <form
      onSubmit={e => sendMessage(e)}
      className="w-full h-[12%] flex items-center mt-1 flex-row gap-x-2  "
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
