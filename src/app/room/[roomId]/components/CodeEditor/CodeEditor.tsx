'use client'
import {useContext, useEffect, useState} from 'react'
import {EditorConfigContextType, EditorContext} from './context/editorContext'
import EditorComponent from './EditorComponent'
import useKeyPress from './hooks/useKeyPress'
import MenuOption from './components/MenuOptions/MenuOption'
import {socket} from '@/app/utils/socket'
import {useParams} from 'next/navigation'
import {
  createFormData,
  compileHeaderOptions,
  getCompileToken,
} from './utils/commons'
import axios from 'axios'
import {getStatusHeaderOptions} from './utils/status'
import {Toaster, toast} from 'sonner'
import {useToast} from './hooks/useToastify'

const defaultValue = '// Your code here!'

const CodeEditor = () => {
  const {showSuccessToast, showErrorToast} = useToast()
  const [customInput, setCustomInput] = useState('')

  const [processing, setProcessing] = useState(false)
  const {roomCode, language, setOutputDetails} = useContext(
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

  const handleCompile = async () => {
    setProcessing(true)
    const formData = createFormData(
      language.id,
      btoa(roomCode as string),
      btoa(customInput),
    )
    const options = compileHeaderOptions(formData)
    const token = await getCompileToken(options)
    if (token === false) {
      setProcessing(false)
      return
    }
    checkStatus(token)
  }

  const checkStatus = async (token: any) => {
    const options = getStatusHeaderOptions(token)
    try {
      let response = await axios.request(options)
      let statusId = response.data.status?.id

      // Processed - we have a result
      if (statusId === 1 || statusId === 2) {
        // still processing
        setTimeout(() => {
          checkStatus(token)
        }, 2000)
        return
      } else {
        setProcessing(false)
        setOutputDetails(response.data)
        showSuccessToast(`Compiled Successfully!`)
        return
      }
    } catch (err) {
      setProcessing(false)
      showErrorToast('There was an error')
    }
  }
  useEffect(() => {
    socket.on('client-editor', newEditorContent => {
      setValue(newEditorContent)
    })
  }, [])
  return (
    <>
      <MenuOption
        handleCompile={handleCompile}
        handleRoomCodeSave={handleRoomCodeSave}
      />
      <EditorComponent value={value} setValue={setValue} />
    </>
  )
}
export default CodeEditor
