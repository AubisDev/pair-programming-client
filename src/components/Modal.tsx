const Modal = () => {
  return (
    <div className="bg-black absolute z-[100] h-full w-full">
      <form method="dialog" className="w-[400px] h-[250px]">
        <h3 className="text-lg font-bold">Hello!</h3>
        <p className="py-4">Press ESC key or click the button below to close</p>
        <div className="modal-action">
          {/* if there is a button in form, it will close the modal */}
          <button className="btn">Close</button>
        </div>
      </form>
    </div>
  )
}
export default Modal
