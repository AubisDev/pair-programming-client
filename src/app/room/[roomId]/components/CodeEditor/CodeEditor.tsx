'use client'
import EditorLoader from '../EditorLoader'
import {Dispatch, SetStateAction, useContext, useEffect, useState} from 'react'
import {socket} from '@/app/utils/socket'
import {useParams} from 'next/navigation'
import MenuOption from './components/MenuOptions/MenuOption'
import EditorConfigProvider, {
  EditorConfigContextType,
  EditorContext,
} from './context/editorContext'
import EditorComponent from './EditorComponent'
import useKeyPress from './hooks/useKeyPress'
import {languageOptions} from './utils/constants'
import {
  Language,
  Theme,
  themeOptions,
} from './components/MenuOptions/Dropdrown/utils/options'

interface Props {
  content: string | undefined
  editorContent: string | undefined
  setEditorContent: Dispatch<SetStateAction<string | undefined>>
  onSaveClick: () => void
  onRunCode: () => void
}

const defaultValue = '// Your code here!'

const CodeEditor = ({
  editorContent,
  setEditorContent,
  onSaveClick,
  content,
  onRunCode,
}: Props) => {
  const [code, setCode] = useState<string | undefined>('')
  const [customInput, setCustomInput] = useState('')
  const [outputDetails, setOutputDetails] = useState(null)
  const [processing, setProcessing] = useState(null)

  const enterPress = useKeyPress('Enter')
  const ctrlPress = useKeyPress('Control')
  const params = useParams()

  // const handleChange = (e: string | undefined) => {
  //   setEditorContent(e)
  // }

  useEffect(() => {
    if (enterPress && ctrlPress) {
      console.log('enterPress', enterPress)
      console.log('ctrlPress', ctrlPress)
      handleCompile()
    }
  }, [ctrlPress, enterPress])

  const handleChange = (action: any, data: any) => {
    switch (action) {
      case 'code': {
        setCode(data)
        break
      }
      default: {
        console.warn('case not handled!', action, data)
      }
    }
  }

  const handleCompile = () => {
    // We will come to the implementation later in the code
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

      <MenuOption onRunCode={onRunCode} />
      <EditorComponent handleChange={handleChange} code={code} />
    </EditorConfigProvider>
  )
}
export default CodeEditor
