import {Dispatch, SetStateAction, useContext} from 'react'
import {Language, Theme} from '../utils/options'
import {
  EditorContext,
  EditorConfigContextType,
} from '../../../../context/editorContext'

interface Props {
  option: any
  action: Dispatch<SetStateAction<Language>> | Dispatch<SetStateAction<Theme>>
}

const Option = ({option, action}: Props) => {
  return (
    <li
      onClick={() => {
        action(option)
      }}
      className="heading-7 py-2 font-semibold z-[50]"
    >
      {option}
    </li>
  )
}
export default Option
