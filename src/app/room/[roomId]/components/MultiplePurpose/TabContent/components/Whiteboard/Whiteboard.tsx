import {ReactPainter} from 'react-painter'
import {LineCapType, LineJoinType} from 'react-painter/dist/ReactPainter'
import ResetIcon from './components/ResetIcon'

const Whiteboard = () => {
  const handleReset = () => {
    const canvas = document.getElementById('canvasContainer')
      ?.children[0] as HTMLCanvasElement
    canvas
      ?.getContext('2d')
      ?.clearRect(0, 0, canvas?.width as number, canvas?.height as number)
  }

  return (
    <div className="w-full h-full max-h-full p-2 x ">
      <ReactPainter
        width={1000}
        height={1000}
        onSave={blob => console.log(blob)}
        render={({canvas, setColor, setLineWidth, setLineJoin, setLineCap}) => (
          <div className="flex flex-row w-full h-full overflow-hidden justify-evenly ">
            <div className="flex flex-col items-center justify-center h-full px-2 gap-y-2 ">
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
              <button
                onClick={handleReset}
                className="flex flex-row items-center text-white btn btn-sm"
              >
                Reset <ResetIcon />
              </button>
            </div>

            <div
              id="canvasContainer"
              className="bg-[#eee] overflow-hidden w-4/5 h-full rounded-lg "
            >
              {canvas}
            </div>
          </div>
        )}
      />
    </div>
  )
}
export default Whiteboard
