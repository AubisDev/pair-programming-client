import {useContext} from 'react'
import {
  EditorContext,
  EditorConfigContextType,
} from '../../../../CodeEditor/context/editorContext'

interface Props {
  editorContent: string | undefined
}

const ConsoleOutput = ({editorContent}: Props) => {
  const {runOutput, outputDetails} = useContext(
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
    <div className="w-full h-full bg-gray-900 min-h-[300px] max-h-[90%] text-xs font-console p-4 overflow-y-scroll">
      <h4>Output</h4>
      <div>{runOutput}</div>
      {outputDetails ? <>{getOutput()}</> : null}
    </div>
  )
}
export default ConsoleOutput
