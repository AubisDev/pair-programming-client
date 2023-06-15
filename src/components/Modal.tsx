import {MouseEvent} from 'react'
import io from 'socket.io-client'

const socket = io('http://localhost:4000')

interface ModalProps {
  setOpenModal: (openModal: boolean) => void
  loading: boolean
  setRoomToJoin: (roomToJoin: string) => void
  roomToJoin: string
}

const Modal = ({
  setOpenModal,
  loading,
  setRoomToJoin,
  roomToJoin,
}: ModalProps) => {
  const handleCloseModal = (
    event: MouseEvent<HTMLDivElement, globalThis.MouseEvent>,
  ) => {
    const target = event.target as HTMLDivElement
    console.log(target.id === 'modal-container')
    if (target.id === 'modal-container') setOpenModal(false)
  }

  return (
    <div
      onClick={e => handleCloseModal(e)}
      id="modal-container"
      className="absolute flex items-center justify-center w-full h-full bg-black/70"
    >
      {loading ? (
        <div className="z-[100] w-[250px] h-[125px] border-purple-600 border-2 duration-300 bg-black/80 flex  rounded-lg items-center flex-col relative justify-center p-2">
          <p className="text-lg text-white label-text">Creating room </p>
          <span className="loading loading-bars loading-lg"></span>
          <p className="text-xs text-gray-400 label-text">
            It only takes a few seconds
          </p>
        </div>
      ) : (
        <form
          id="modal"
          className=" z-[100] w-[500px] h-[250px] border-purple-600 border-2 duration-300 bg-purple-900 flex  rounded-lg items-center flex-col relative"
        >
          <div className="flex flex-row items-center justify-center w-full max-w-xs h-3/4 form-control">
            <div className="flex flex-col">
              <label className="label">
                <span className="text-lg text-white label-text">Room ID</span>
              </label>
              <div className="flex flex-row ">
                <input
                  type="text"
                  placeholder="Type Room ID here"
                  className="w-full max-w-xs text-white input input-bordered"
                  onChange={e => setRoomToJoin(e.target.value)}
                  value={roomToJoin}
                />
                <button
                  type="submit"
                  className="px-6 py-2 ml-3 text-white duration-300 bg-gray-900 rounded-lg hover:bg-gray-950 "
                >
                  Join
                </button>
              </div>
            </div>
          </div>
          <div className="absolute px-8 py-2 bg-gray-900 rounded-lg bottom-4 hover:bg-gray-950">
            <button onClick={() => setOpenModal(false)}>Cancel</button>
          </div>
        </form>
      )}
    </div>
  )
}
export default Modal
