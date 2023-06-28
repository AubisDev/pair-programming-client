'use client'
import {Modal, ActionButtons, Loader, Form, Header} from '@/components'
import {modalInitialState} from '@/constants'
import {useToggle} from '@/hooks'
import {useState} from 'react'

export const Home = () => {
  const [openModal, setOpenModal] = useState(modalInitialState)
  const {on: loading, toggleState} = useToggle(false)

  return (
    <main className="flex flex-col items-center justify-center h-screen min-h-screen overflow-hidden text-gray-200 bg-gradient-to-b from-slate-900 via-purple-900 to-slate-900">
      <div className="relative flex flex-col items-center justify-center w-full h-full bg-black/50">
        <Header />
        <ActionButtons setOpenModal={setOpenModal} openModal={openModal} />
        {openModal.open ? (
          <Modal setOpenModal={setOpenModal}>
            {loading ? (
              <Loader
                loadingReason={`${
                  openModal.newRoom ? 'Creating a room' : 'Joining room'
                }`}
              />
            ) : (
              <Form
                openModal={openModal}
                setLoading={toggleState}
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
