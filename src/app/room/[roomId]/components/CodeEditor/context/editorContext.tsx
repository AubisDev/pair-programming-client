import {
  Dispatch,
  PropsWithChildren,
  SetStateAction,
  createContext,
  useState,
} from 'react'
import {Theme} from 'react-toastify'
import {
  Language,
  themeOptions,
} from '../components/MenuOptions/components/Dropdrown/utils/options'
import {languageOptions} from '../utils/constants'

type EditorConfig = {}

export interface EditorConfigContextType {
  theme: string
  language: Language
  setTheme: Dispatch<SetStateAction<string>>
  setLanguage: Dispatch<SetStateAction<Language>>
  languageOptions: Language[]
  themeOptions: string[]
  roomCode: string | undefined
  setRoomCode: Dispatch<SetStateAction<string | undefined>>
}

export const EditorContext = createContext<EditorConfigContextType | null>(null)

const EditorConfigProvider = ({children}: PropsWithChildren) => {
  const [theme, setTheme] = useState<string>(themeOptions[0])
  const [language, setLanguage] = useState(languageOptions[0])
  const [roomCode, setRoomCode] = useState<string | undefined>('')

  return (
    <EditorContext.Provider
      value={{
        theme,
        language,
        setTheme,
        setLanguage,
        languageOptions,
        themeOptions,
        roomCode,
        setRoomCode,
      }}
    >
      {children}
    </EditorContext.Provider>
  )
}

export default EditorConfigProvider
