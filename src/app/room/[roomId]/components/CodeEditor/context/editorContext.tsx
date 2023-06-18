import {
  Dispatch,
  PropsWithChildren,
  SetStateAction,
  createContext,
  useState,
} from 'react'
import {
  Language,
  Theme,
} from '../components/MenuOptions/Dropdrown/utils/options'

type EditorConfig = {}

export interface EditorConfigContextType {
  theme: Theme
  language: Language
  setTheme: Dispatch<SetStateAction<Theme>>
  setLanguage: Dispatch<SetStateAction<Language>>
}

export const EditorContext = createContext<EditorConfigContextType | null>(null)

const EditorConfigProvider = ({children}: PropsWithChildren) => {
  const [theme, setTheme] = useState(Theme.dark)
  const [language, setLanguage] = useState(Language.javascript)

  return (
    <EditorContext.Provider value={{theme, language, setTheme, setLanguage}}>
      {children}
    </EditorContext.Provider>
  )
}

export default EditorConfigProvider
