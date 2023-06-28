import {modalInitialState} from '@/constants'
import {Dispatch, MouseEvent, SetStateAction} from 'react'

interface ModalProps {
  setOpenModal: Dispatch<
    SetStateAction<{
      open: boolean
      newRoom: boolean
      joinRoom: boolean
    }>
  >
  children: React.ReactNode
}

export const Modal = ({setOpenModal, children}: ModalProps) => {
  const handleCloseModal = (
    event: MouseEvent<HTMLDivElement, globalThis.MouseEvent>,
  ) => {
    const target = event.target as HTMLDivElement
    if (target.id === 'modal-container') setOpenModal(modalInitialState)
  }

  return (
    <div
      onClick={e => handleCloseModal(e)}
      id="modal-container"
      className="absolute flex items-center justify-center w-full h-full bg-black/70"
    >
      {children}
    </div>
  )
}
export default Modal
