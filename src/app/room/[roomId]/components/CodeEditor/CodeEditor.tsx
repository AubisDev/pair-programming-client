'use client'
import {useContext, useEffect, useState} from 'react'
import EditorConfigProvider, {
  EditorConfigContextType,
  EditorContext,
} from './context/editorContext'
import EditorComponent from './EditorComponent'
import useKeyPress from './hooks/useKeyPress'
import MenuOption from './components/MenuOptions/MenuOption'
import {socket} from '@/app/utils/socket'
import {useParams} from 'next/navigation'

const defaultValue = '// Your code here!'

const CodeEditor = () => {
  const [customInput, setCustomInput] = useState('')
  const [outputDetails, setOutputDetails] = useState(null)
  const [processing, setProcessing] = useState(null)
  const {roomCode, setRoomCode} = useContext(
    EditorContext,
  ) as EditorConfigContextType
  const [value, setValue] = useState<string | undefined>(
    roomCode || defaultValue,
  )
  const params = useParams()
  const enterPress = useKeyPress('Enter')
  const ctrlPress = useKeyPress('Control')

  useEffect(() => {
    if (enterPress && ctrlPress) {
      console.log('enterPress', enterPress)
      console.log('ctrlPress', ctrlPress)
      handleCompile()
    }
  }, [ctrlPress, enterPress])

  const handleRoomCodeSave = () => {
    socket.emit('update-editor', {
      room: params.roomId,
      content: value,
    })
  }
  const handleCompile = () => {
    // try {
    //   setRunOutput(editorContent as string)
    // } catch (error: any) {
    //   let message
    //   if ((error as Error) instanceof Error) message = error.message
    //   else message = String(error)
    //   // we'll proceed, but let's report it
    //   reportError({message})
    // }
  }

  const checkStatus = async (token: any) => {
    // We will come to the implementation later in the code
  }
  useEffect(() => {
    socket.on('client-editor', newEditorContent => {
      setValue(newEditorContent)
    })
  }, [])
  return (
    <>
      {/* <ToastContainer
        position="top-right"
        autoClose={2000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
      /> */}

      <MenuOption
        handleCompile={handleCompile}
        handleRoomCodeSave={handleRoomCodeSave}
      />
      <EditorComponent value={value} setValue={setValue} />
    </>
  )
}
export default CodeEditor
