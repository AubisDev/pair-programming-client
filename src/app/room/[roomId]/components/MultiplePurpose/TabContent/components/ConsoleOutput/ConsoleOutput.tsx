interface Props {
  runOutput: string
  editorContent: string | undefined
}

const ConsoleOutput = ({runOutput, editorContent}: Props) => {
  console.log(runOutput)
  return (
    <div className="w-full h-full bg-gray-900 min-h-[300px] max-h-[90%] text-xs font-console p-4 overflow-y-scroll">
      <iframe id="frame" srcDoc={editorContent} />
    </div>
  )
}
export default ConsoleOutput
