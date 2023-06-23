'use client'
import {useEffect, useState} from 'react'
import EditorConfigProvider from './context/editorContext'
import EditorComponent from './EditorComponent'
import useKeyPress from './hooks/useKeyPress'
import MenuOption from './components/MenuOptions/MenuOption'

const CodeEditor = () => {
  const [customInput, setCustomInput] = useState('')
  const [outputDetails, setOutputDetails] = useState(null)
  const [processing, setProcessing] = useState(null)

  const enterPress = useKeyPress('Enter')
  const ctrlPress = useKeyPress('Control')

  useEffect(() => {
    if (enterPress && ctrlPress) {
      console.log('enterPress', enterPress)
      console.log('ctrlPress', ctrlPress)
      handleCompile()
    }
  }, [ctrlPress, enterPress])

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

  function handleThemeChange(th: any) {
    // We will come to the implementation later in the code
  }
  return (
    <EditorConfigProvider>
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

      <MenuOption handleCompile={handleCompile} />
      <EditorComponent />
    </EditorConfigProvider>
  )
}
export default CodeEditor
