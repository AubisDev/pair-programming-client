import {useContext} from 'react'
import type {Language} from '../../../utils/options'
import {Theme} from '../../../../../../../lib/defineTheme'
import {
  EditorContext,
  EditorConfigContextType,
} from '@/app/room/[roomId]/components/CodeEditor/context/editorContext'

interface Props {
  option: string | Language
  theme?: string
}

export const Option = ({option, theme}: Props) => {
  const {setLanguage, handleThemeChange} = useContext(
    EditorContext,
  ) as EditorConfigContextType

  const handleClick = () => {
    if (typeof option === 'string') {
      handleThemeChange(theme as Theme<string> & string)
    } else {
      setLanguage(option)
    }
  }

  return (
    <li
      onClick={handleClick}
      className="heading-7 py-2 font-semibold z-[50] w-52 cursor-pointer hover:bg-white/10"
    >
      {typeof option === 'string' ? option : option.name}
    </li>
  )
}
export default Option
