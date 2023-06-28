import {ReactPainter} from 'react-painter'

export const Whiteboad = () => {
  return (
    <div className="bg-white h-1/2">
      <ReactPainter
        width={300}
        height={300}
        onSave={blob => console.log(blob)}
        render={({triggerSave, canvas}) => (
          <div className="">
            <button onClick={triggerSave}>Save Canvas</button>
            <div>{canvas}</div>
          </div>
        )}
      />
    </div>
  )
}
export default Whiteboad
