import {Dispatch, SetStateAction, useState} from 'react'
import Input from './Input/Input'
import Label from './Label/Label'
import {userStore} from '@/app/store/store'
import {modalInitialState} from '@/app/page'
import Button from '../ActionsButtons/Button/Button'
import {useRouter} from 'next/navigation'
import {socket} from '@/app/utils/socket'

interface Props {
  openModal: {
    open: boolean
    newRoom: boolean
    joinRoom: boolean
  }
  setLoading: Dispatch<SetStateAction<boolean>>
  setOpenModal: Dispatch<
    SetStateAction<{
      open: boolean
      newRoom: boolean
      joinRoom: boolean
    }>
  >
}

const Form = ({openModal, setLoading, setOpenModal}: Props) => {
  const route = useRouter()
  const [roomToJoin, setRoomToJoin] = useState<string>('')
  const [newUsername, setNewUsername] = useState<string>('')
  const setUsername = userStore(state => state.setUsername)

  const handleClick = () => {
    setLoading(true)
    setUsername(newUsername)
    setTimeout(() => {
      setLoading(false)
      setOpenModal(modalInitialState)
      if (openModal.joinRoom) joinRoom()
      else createRoom()
    }, 3000)
  }

  const joinRoom = () => route.push(`/room/${roomToJoin}`)
  const createRoom = () => route.push(`/room/${socket.id}`)

  return (
    <form
      id="modal"
      className=" z-[100] w-[500px] h-[250px] border-purple-600 border-2 duration-300 bg-gradient-to-r from-gray-900 to-purple-950   flex  rounded-lg items-center flex-col relative"
      // onSubmit={e => handleJoinRoom(roomToJoin)}
    >
      <div className="flex flex-col items-center justify-center w-full max-w-xs h-3/4 form-control">
        <div className="flex flex-col gap-2">
          <div className="flex flex-row items-center">
            <Label inputLabel="Username" />
            <Input
              label="username"
              value={newUsername}
              modifier={setNewUsername}
            />
          </div>
          {openModal.joinRoom ? (
            <div className="flex flex-row items-center w-full">
              <Label inputLabel="Room ID" />
              <Input label="room" value={roomToJoin} modifier={setRoomToJoin} />
            </div>
          ) : null}
        </div>
      </div>
      <div className="absolute flex flex-row items-center w-4/5 px-12 py-2 rounded-lg justify-evenly bottom-3 ">
        <Button
          text={`${openModal.joinRoom ? 'Join' : 'Create'}`}
          action={() => handleClick()}
        />
        <Button text="Cancel" action={() => setOpenModal(modalInitialState)} />
      </div>
    </form>
  )
}
export default Form
