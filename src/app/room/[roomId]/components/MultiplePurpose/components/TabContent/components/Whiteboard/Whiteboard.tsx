import {ReactPainter} from 'react-painter'
import {
  LineCap,
  LineJoin,
  ColorPicker,
  LineWidth,
  ResetButton,
  CanvasWhiteboard,
} from './components'

const Whiteboard = () => {
  return (
    <div className="w-full h-full max-h-full p-2 x ">
      <ReactPainter
        width={1000}
        height={1000}
        onSave={blob => console.log(blob)}
        render={({canvas, setColor, setLineWidth, setLineJoin, setLineCap}) => (
          <div className="flex flex-row w-full h-full overflow-hidden justify-evenly ">
            <div className="flex flex-col items-center justify-center h-full px-2 gap-y-2 ">
              <LineWidth setLineWidth={setLineWidth} />
              <ColorPicker setColor={setColor} />
              <LineCap setLineCap={setLineCap} />
              <LineJoin setLineJoin={setLineJoin} />
              <ResetButton />
            </div>
            <CanvasWhiteboard canvas={canvas} />
          </div>
        )}
      />
    </div>
  )
}
export default Whiteboard
