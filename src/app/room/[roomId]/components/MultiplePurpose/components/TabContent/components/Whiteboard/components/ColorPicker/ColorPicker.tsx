interface Props {
  setColor: (color: string) => void
}

export const ColorPicker = ({setColor}: Props) => {
  return (
    <div className="flex flex-row items-center">
      <label className="label">
        <span className="label-text">Color</span>
      </label>
      <input
        type="color"
        onChange={e => setColor(e.target.value)}
        className="w-12 bg-transparent border-none outline-none input input-bordered input-sm h-7 "
      />
    </div>
  )
}
export default ColorPicker
