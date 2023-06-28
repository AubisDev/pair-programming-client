import ResetIcon from '../ResetIcon'

export const ResetButton = () => {
  const handleReset = () => {
    const canvas = document.getElementById('canvasContainer')
      ?.children[0] as HTMLCanvasElement
    canvas
      ?.getContext('2d')
      ?.clearRect(0, 0, canvas?.width as number, canvas?.height as number)
  }

  return (
    <button
      onClick={handleReset}
      className="flex flex-row items-center text-white btn btn-sm"
    >
      Reset <ResetIcon />
    </button>
  )
}
export default ResetButton
