const Loader = () => {
  return (
    <div className="flex flex-col items-center justify-center w-full h-4/5">
      <span className="loading loading-spinner loading-lg"></span>
      <p className="pt-2 text-sm">Running code</p>
    </div>
  )
}
export default Loader
