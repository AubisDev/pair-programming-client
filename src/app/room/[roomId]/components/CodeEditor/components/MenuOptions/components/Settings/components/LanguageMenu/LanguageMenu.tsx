import {
  EditorContext,
  EditorConfigContextType,
} from '@/app/room/[roomId]/context/editorContext'
import {useContext} from 'react'

const LanguageMenu = () => {
  const {languageOptions, language, setLanguage} = useContext(
    EditorContext,
  ) as EditorConfigContextType

  return (
    <>
      <summary className="py-2 text-sm w-[291px] text-white">
        Language{'  '}
        <span className="ml-1 text-xs text-gray-300/60">({language.name})</span>
      </summary>
      <ul className="h-[200px] overflow-y-scroll  border-l border-gray-300/30 ml-1">
        {languageOptions.map(language => (
          <li key={language.id} onClick={() => setLanguage(language)}>
            <a>{language.name}</a>
          </li>
        ))}
      </ul>
    </>
  )
}
export default LanguageMenu
