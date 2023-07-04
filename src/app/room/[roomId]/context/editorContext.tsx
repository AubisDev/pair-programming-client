import {
  Dispatch,
  PropsWithChildren,
  SetStateAction,
  createContext,
  useState,
} from 'react'
import {languageOptions} from '../../../utils'
import {defineTheme} from '../components/CodeEditor/lib'
import {Language} from '../models'
import {Theme} from '../components/CodeEditor/model'
import {monacoThemes} from '../components/CodeEditor/utils'

export interface EditorConfigContextType {
  theme: Theme<string> | string
  language: Language
  setTheme: Dispatch<SetStateAction<string | Theme<string>>>
  setLanguage: Dispatch<SetStateAction<Language>>
  languageOptions: Language[]
  roomCode: string | undefined
  setRoomCode: Dispatch<SetStateAction<string | undefined>>
  handleThemeChange: (newTheme: Theme<string> & string) => void
  monacoThemes: Theme<string>
  runOutput: string
  setRunOutput: Dispatch<SetStateAction<string>>
  outputDetails: any
  setOutputDetails: Dispatch<SetStateAction<any>>
  processing: boolean
  setProcessing: Dispatch<SetStateAction<boolean>>
}

export const EditorContext = createContext<EditorConfigContextType | null>(null)

const EditorConfigProvider = ({children}: PropsWithChildren) => {
  const [theme, setTheme] = useState<Theme<string> | string>('vs-dark')
  const [language, setLanguage] = useState<Language>(languageOptions[0])
  const [roomCode, setRoomCode] = useState<string | undefined>('')
  const [runOutput, setRunOutput] = useState<string>('')
  const [outputDetails, setOutputDetails] = useState<any>('')
  const [processing, setProcessing] = useState(false)

  const handleThemeChange = (newTheme: string) => {
    if (['light', 'vs-dark'].includes(newTheme)) {
      setTheme(newTheme)
    } else {
      defineTheme(newTheme).then(() => setTheme(newTheme))
    }
  }

  return (
    <EditorContext.Provider
      value={{
        theme,
        setTheme,
        language,
        setLanguage,
        languageOptions,
        monacoThemes,
        roomCode,
        setRoomCode,
        handleThemeChange,
        runOutput,
        setRunOutput,
        outputDetails,
        setOutputDetails,
        processing,
        setProcessing,
      }}
    >
      {children}
    </EditorContext.Provider>
  )
}

export default EditorConfigProvider
