export const Loader = ({loadingReason}: {loadingReason: string}) => {
  return (
    <div className="z-[100] w-[250px] h-[125px] border-purple-600 border-2 duration-300 bg-black/80 flex  rounded-lg items-center flex-col relative justify-center p-2">
      <p className="text-lg text-white label-text">{loadingReason}</p>
      <span className="loading loading-bars loading-lg"></span>
      <p className="text-xs text-gray-400 label-text">
        It only takes a few seconds
      </p>
    </div>
  )
}
export default Loader
