const Modal = () => {
  return (
    <div className=" z-[100] w-full h-full bg-black/60 absolute flex items-center justify-center ">
      <form className=" w-[500px] h-[250px]  border-purple-600 border-2 duration-300 bg-purple-950 flex  rounded-lg items-center flex-col relative">
        <div className="flex flex-row items-center justify-center w-full max-w-xs h-3/4 form-control">
          <div className="flex flex-col">
            <label className="label">
              <span className="label-text">Room ID</span>
            </label>
            <div className="flex flex-row ">
              <input
                type="text"
                placeholder="Type Room ID here"
                className="w-full max-w-xs input input-bordered"
              />
              <button
                type="submit"
                className="px-6 py-2 ml-3 duration-300 bg-gray-900 rounded-lg hover:bg-gray-950 "
              >
                Join
              </button>
            </div>
          </div>
        </div>
        <div className="absolute px-8 py-2 bg-gray-900 rounded-lg bottom-4 hover:bg-gray-950">
          {/* if there is a button in form, it will close the modal */}
          <button className="">Close</button>
        </div>
      </form>
    </div>
  )
}
export default Modal
