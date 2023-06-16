import {Dispatch, MouseEvent, ReactNode, SetStateAction, useState} from 'react'
import io from 'socket.io-client'
import Form from './Form/Form'
import Loader from '@/app/room/[roomId]/components/EditorLoader'
import {modalInitialState} from '@/app/page'

const socket = io('http://localhost:4000')

interface ModalProps {
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
  children: React.ReactNode
}

const Modal = ({setOpenModal, children, openModal}: ModalProps) => {
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
