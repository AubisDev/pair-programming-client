import Button from './Button/Button'
import {Dispatch, SetStateAction} from 'react'

interface Props {
  setOpenModal: Dispatch<
    SetStateAction<{
      open: boolean
      newRoom: boolean
      joinRoom: boolean
    }>
  >
  openModal: {
    open: boolean
    newRoom: boolean
    joinRoom: boolean
  }
}

export const ActionButtons = ({setOpenModal, openModal}: Props) => {
  const handleCreateRoomClick = () => {
    const openNewRoomModal = {
      ...openModal,
      open: true,
      joinRoom: false,
      newRoom: true,
    }
    setOpenModal(openNewRoomModal)
  }

  const handleJoinRoomClick = (roomId: string, username: string) => {
    const openJoinRoomModal = {
      ...openModal,
      open: true,
      joinRoom: true,
      newRoom: false,
    }
    setOpenModal(openJoinRoomModal)
  }

  return (
    <div className="flex flex-row">
      <Button text="Create Room" action={handleCreateRoomClick} />
      <Button text="Join Room" action={handleJoinRoomClick} />
    </div>
  )
}
export default ActionButtons
