'use client'
import Modal from '@/components/Modal'
import {useState} from 'react'
import io from 'socket.io-client'

const socket = io('http://localhost:4000')

export const Home = () => {
  const [openModal, setOpenModal] = useState(false)

  return (
    <main className="flex flex-col items-center justify-center h-screen min-h-screen overflow-hidden text-gray-200 bg-gradient-to-b from-slate-900 via-purple-900 to-slate-900">
      <div className="relative flex flex-col items-center justify-center w-full h-full bg-black/50">
        <h1 className="text-5xl font-bold text-gray-100">
          Welcome to{' '}
          <span className="text-purple-600 drop-shadow-title">
            Pair Programming
          </span>
        </h1>
        <h4 className="w-4/5 pt-4 text-lg font-semibold text-center ">
          Necesitas ayuda para resolver algoritmos? Invita a un companero para
          resolverlos mas rapido.
        </h4>
        <h4 className="w-4/5 pb-8 text-lg font-semibold text-center">
          Crea una sala, mandale invitacion y a resolver!
        </h4>
        <div className="flex flex-row">
          <button className="px-4 py-2 mr-3 font-bold border-2 border-purple-700 rounded-md bg-black/50 hover:bg-purple-900 hover:border-white/50">
            Create room
          </button>
          <button className="px-4 py-2 font-bold duration-300 border-2 border-purple-700 rounded-md bg-black/50 hover:bg-purple-900 hover:border-white/50">
            Join a room
          </button>
          <button className="btn" onClick={() => setOpenModal(true)}>
            open modal
          </button>
        </div>
        <Modal />
      </div>
    </main>
  )
}

export default Home
