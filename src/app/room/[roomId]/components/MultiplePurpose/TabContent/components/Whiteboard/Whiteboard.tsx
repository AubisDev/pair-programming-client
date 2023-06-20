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
    <div className="w-full max-h-[90%] h-[90%] p-2 ">
      <ReactPainter
        width={1000}
        height={1000}
        onSave={blob => console.log(blob)}
        render={({canvas, setColor, setLineWidth, setLineJoin, setLineCap}) => (
          <div className="w-full h-full flex flex-row justify-evenly overflow-hidden ">
            <div className="flex flex-col h-full justify-center px-2 items-center gap-y-2 ">
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
                  className="input input-primary input-bordered input-sm w-auto "
                />
              </div>

              <div className="flex flex-row items-center">
                <label className="label">
                  <span className="label-text">Color</span>
                </label>
                <input
                  type="color"
                  onChange={e => setColor(e.target.value)}
                  className="input input-bordered input-sm w-12 h-7  outline-none border-none bg-transparent "
                />
              </div>

              <div className="flex flex-row items-center">
                <label className="label">
                  <span className="label-text">Line cap</span>
                </label>
                <select
                  className="select select-secondary w-auto select-sm"
                  onChange={e => setLineCap(e.target.value as LineCapType)}
                >
                  <option value="round">round</option>
                  <option value="butt">butt</option>
                  <option value="square">square</option>
                </select>
              </div>
              <div className="flex flex-row items-center">
                <label className="label">
                  <span className="label-text">Line Join</span>
                </label>
                <select
                  className="select select-secondary w-auto select-sm"
                  onChange={e => setLineJoin(e.target.value as LineJoinType)}
                >
                  <option value="round">round</option>
                  <option value="bevel">bevel</option>
                  <option value="miter">miter</option>
                </select>
              </div>
              <button
                onClick={handleReset}
                className="flex flex-row items-center btn btn-sm text-white"
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
