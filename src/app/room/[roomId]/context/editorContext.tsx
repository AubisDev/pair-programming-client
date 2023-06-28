import {
  Dispatch,
  PropsWithChildren,
  SetStateAction,
  createContext,
  useState,
} from 'react'
import {languageOptions} from '../../../utils/constants'
import {
  Theme,
  defineTheme,
  monacoThemes,
} from '../components/CodeEditor/lib/defineTheme'
import {Language} from '../models'

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
}

export const EditorContext = createContext<EditorConfigContextType | null>(null)

const EditorConfigProvider = ({children}: PropsWithChildren) => {
  const [theme, setTheme] = useState<Theme<string> | string>('vs-dark')
  const [language, setLanguage] = useState<Language>(languageOptions[0])
  const [roomCode, setRoomCode] = useState<string | undefined>('')
  const [runOutput, setRunOutput] = useState<string>('')
  const [outputDetails, setOutputDetails] = useState<any>('')

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
      }}
    >
      {children}
    </EditorContext.Provider>
  )
}

export default EditorConfigProvider
