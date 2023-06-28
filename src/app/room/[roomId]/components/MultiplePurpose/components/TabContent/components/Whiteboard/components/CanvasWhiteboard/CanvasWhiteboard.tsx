interface Props {
  canvas: JSX.Element
}

export const CanvasWhiteboard = ({canvas}: Props) => {
  return (
    <div
      id="canvasContainer"
      className="bg-[#eee] overflow-hidden w-4/5 h-full rounded-lg "
    >
      {canvas}
    </div>
  )
}
export default CanvasWhiteboard
