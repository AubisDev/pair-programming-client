import {LineJoinType} from 'react-painter/dist/ReactPainter'

interface Props {
  setLineJoin: (type: LineJoinType) => void
}

export const LineJoin = ({setLineJoin}: Props) => {
  return (
    <div className="flex flex-row items-center">
      <label className="label">
        <span className="text-sm label-text">Line Join</span>
      </label>
      <select
        className="w-auto select select-secondary select-sm"
        onChange={e => setLineJoin(e.target.value as LineJoinType)}
      >
        <option value="round">round</option>
        <option value="bevel">bevel</option>
        <option value="miter">miter</option>
      </select>
    </div>
  )
}
export default LineJoin
