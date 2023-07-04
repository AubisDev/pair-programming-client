import {
  EditorConfigContextType,
  EditorContext,
} from '@/app/room/[roomId]/context/editorContext'
import {useContext} from 'react'
import Loader from './Loader'

const ConsoleOutput = () => {
  const {runOutput, outputDetails, processing} = useContext(
    EditorContext,
  ) as EditorConfigContextType

  const getOutput = () => {
    let statusId = outputDetails?.status?.id

    if (statusId === 6) {
      // compilation error
      return (
        <pre className="px-2 py-1 text-xs font-normal text-red-500">
          {atob(outputDetails?.compile_output)}
        </pre>
      )
    } else if (statusId === 3) {
      return (
        <pre className="px-2 py-1 text-xs font-normal text-green-500">
          {atob(outputDetails.stdout) !== null
            ? `${atob(outputDetails.stdout)}`
            : null}
        </pre>
      )
    } else if (statusId === 5) {
      return (
        <pre className="px-2 py-1 text-xs font-normal text-red-500">
          {`Time Limit Exceeded`}
        </pre>
      )
    } else {
      return (
        <pre className="px-2 py-1 text-xs font-normal text-red-500">
          {atob(outputDetails?.stderr)}
        </pre>
      )
    }
  }
  return (
    <div className="w-full h-full p-4 overflow-y-scroll text-xs bg-gray-900 font-console ">
      <h4 className="text-base ">Output:</h4>
      <div className="my-1 divider"></div>
      {processing ? (
        <Loader />
      ) : (
        <>{outputDetails ? <>{getOutput()}</> : null}</>
      )}
    </div>
  )
}
export default ConsoleOutput
