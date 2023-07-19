'use client'
import {useContext, useEffect, useState} from 'react'
import {
  EditorConfigContextType,
  EditorContext,
} from '../../context/editorContext'
import {EditorComponent, MenuOption} from './components'
import {socket} from '@/app/utils'
import {useParams} from 'next/navigation'
import {
  createFormData,
  compileHeaderOptions,
  getCompileToken,
} from './utils/commons'
import axios from 'axios'
import {getStatusHeaderOptions} from './utils'
import {useToast, useKeyPress} from './hooks'
import {Toaster} from 'sonner'

const defaultValue = '// Your code here!'

export const CodeEditor = (): React.JSX.Element => {
  const {showSuccessToast, showErrorToast} = useToast()
  const [customInput, setCustomInput] = useState('')
  const {roomCode, language, setOutputDetails, setRoomCode, setProcessing} =
    useContext(EditorContext) as EditorConfigContextType
  const [value, setValue] = useState<string | undefined>(
    roomCode || defaultValue,
  )
  const {showTipMessage} = useToast()
  const params = useParams()
  const enterPress = useKeyPress('Enter')
  const ctrlPress = useKeyPress('Control')
  const sPress = useKeyPress('s')

  useEffect(() => {
    if (enterPress && ctrlPress) {
      console.log('enterPress', enterPress)
      console.log('ctrlPress', ctrlPress)
      handleCompile()
    }

    if (ctrlPress && sPress) {
      handleRoomCodeSave()
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [ctrlPress, enterPress, sPress])

  const handleRoomCodeSave = () => {
    socket.emit('update-editor', {
      room: params.roomId,
      content: value,
    })
  }

  const handleCompile = async () => {
    socket.emit('compiling', params.roomId)
    const formData = createFormData(
      language.id,
      btoa(roomCode as string),
      btoa(customInput),
    )
    const options = compileHeaderOptions(formData)
    const token = await getCompileToken(options)
    if (token === false) {
      socket.emit('compiled', params.roomId)
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
        socket.emit('compiled', params.roomId)
        socket.emit('console', {output: response.data, room: params.roomId})
        showSuccessToast(`Compiled Successfully!`)
        return
      }
    } catch (err) {
      setProcessing(false)
      showErrorToast('There was an error')
    }
  }
  useEffect(() => {
    socket.on('client-editor', (newEditorContent: string): void => {
      setRoomCode(newEditorContent)
    })

    socket.on('client-console', (output: any): void => {
      setOutputDetails(output)
    })

    socket.on('client-compiling', () => {
      setProcessing(true)
    })

    socket.on('client-compiled', () => {
      setProcessing(false)
    })
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  useEffect(() => {
    showTipMessage(
      'Click Cltr + S to save the current for others users to see the changes',
    )
  }, [])

  return (
    <>
      <MenuOption handleCompile={handleCompile} />
      <EditorComponent value={value} setValue={setValue} />
      <Toaster
        closeButton
        position="bottom-left"
        visibleToasts={3}
        duration={200000}
      />
    </>
  )
}
export default CodeEditor
