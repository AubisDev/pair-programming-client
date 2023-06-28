import {LineCapType} from 'react-painter/dist/ReactPainter'

interface Props {
  setLineCap: (type: LineCapType) => void
}

export const LineCap = ({setLineCap}: Props) => {
  return (
    <div className="flex flex-row items-center">
      <label className="label">
        <span className="label-text">Line cap</span>
      </label>
      <select
        className="w-auto select select-secondary select-sm"
        onChange={e => setLineCap(e.target.value as LineCapType)}
      >
        <option value="round">round</option>
        <option value="butt">butt</option>
        <option value="square">square</option>
      </select>
    </div>
  )
}
export default LineCap
