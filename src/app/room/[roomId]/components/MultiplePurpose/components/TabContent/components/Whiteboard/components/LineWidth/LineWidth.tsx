interface Props {
  setLineWidth: (width: number) => void
}

export const LineWidth = ({setLineWidth}: Props) => {
  return (
    <div className="flex flex-row items-center">
      <label className="label">
        <span className="label-text">Line Width</span>
      </label>
      <input
        type="number"
        onChange={e => setLineWidth(Number(e.target.value))}
        min={1}
        max={6}
        defaultValue={3}
        className="w-16 input input-primary input-bordered input-sm "
      />
    </div>
  )
}
export default LineWidth
