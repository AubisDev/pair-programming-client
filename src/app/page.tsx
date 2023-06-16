'use client'
import Modal from '@/components/Modal'
import {useState} from 'react'

import Header from '@/components/Header/Header'
import ActionButtons from '@/components/ActionsButtons/ActionButtons'
import Loader from '@/components/Loader/Loader'
import Form from '@/components/Form/Form'

export const modalInitialState = {
  open: false,
  newRoom: false,
  joinRoom: false,
}

export const Home = () => {
  const [openModal, setOpenModal] = useState(modalInitialState)
  const [loading, setLoading] = useState(false)

  return (
    <main className="flex flex-col items-center justify-center h-screen min-h-screen overflow-hidden text-gray-200 bg-gradient-to-b from-slate-900 via-purple-900 to-slate-900">
      <div className="relative flex flex-col items-center justify-center w-full h-full bg-black/50">
        <Header />
        <div className="flex flex-row">
          <ActionButtons setOpenModal={setOpenModal} openModal={openModal} />
        </div>
        {openModal.open ? (
          <Modal setOpenModal={setOpenModal} openModal={openModal}>
            {loading ? (
              <Loader
                loadingReason={`${
                  openModal.newRoom ? 'Creating a room' : 'Joining room'
                }`}
              />
            ) : (
              <Form
                openModal={openModal}
                setLoading={setLoading}
                setOpenModal={setOpenModal}
              />
            )}
          </Modal>
        ) : null}
      </div>
    </main>
  )
}

export default Home
