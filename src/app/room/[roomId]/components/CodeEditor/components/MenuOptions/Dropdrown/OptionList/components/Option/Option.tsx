import {useContext} from 'react'
import {Language, Theme} from '../../../utils/options'
import {
  EditorContext,
  EditorConfigContextType,
} from '@/app/room/[roomId]/components/CodeEditor/context/editorContext'

interface Props {
  option: Theme | Language
}

export const Option = ({option}: Props) => {
  const {setLanguage, setTheme} = useContext(
    EditorContext,
  ) as EditorConfigContextType

  const handleChangeClick = (selection: Theme | Language) => {
    if (typeof selection === 'string') setTheme(selection)
    else setLanguage(selection)
  }

  return (
    <li
      onClick={() => {
        handleChangeClick(option)
      }}
      className="heading-7 py-2 font-semibold z-[50] w-full cursor-pointer hover:bg-white/10"
    >
      {typeof option === 'string' ? option : option.value}
    </li>
  )
}
export default Option
