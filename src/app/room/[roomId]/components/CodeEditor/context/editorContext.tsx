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
import {
  languageOptions,
  themeOptions,
} from '../components/MenuOptions/Dropdrown/utils/options'

type EditorConfig = {}

export interface EditorConfigContextType {
  theme: Theme
  language: Language
  setTheme: Dispatch<SetStateAction<Theme>>
  setLanguage: Dispatch<SetStateAction<Language>>
  languageOptions: Language[]
  themeOptions: Theme[]
}

export const EditorContext = createContext<EditorConfigContextType | null>(null)

const EditorConfigProvider = ({children}: PropsWithChildren) => {
  const [theme, setTheme] = useState(themeOptions[0])
  const [language, setLanguage] = useState(languageOptions[0])

  return (
    <EditorContext.Provider
      value={{
        theme,
        language,
        setTheme,
        setLanguage,
        languageOptions,
        themeOptions,
      }}
    >
      {children}
    </EditorContext.Provider>
  )
}

export default EditorConfigProvider
