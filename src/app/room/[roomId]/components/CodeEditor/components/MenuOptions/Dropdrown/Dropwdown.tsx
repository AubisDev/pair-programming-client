import {Dispatch, SetStateAction, useContext} from 'react'
import Option from './Option/Option'
import {Language, Theme} from './utils/options'
import {
  EditorContext,
  EditorConfigContextType,
} from '../../../context/editorContext'

interface Props {
  label: 'theme' | 'language'
  options: Language[] | Theme[]
}

const Dropwdown = ({label, options}: Props) => {
  const {setLanguage, setTheme, language, theme} = useContext(
    EditorContext,
  ) as EditorConfigContextType
  return (
    <details className="dropdown mb-32 z-[100]  ">
      <summary className="m-1 btn bg-purple-900 text-white btn-sm capitalize  border border-white/30 outine-none hover:bg-purple-800 hover:outline-none">
        {label}
      </summary>
      <ul
        role="list"
        className="p-2 shadow menu dropdown-content bg-base-100 rounded-box w-52 divide-y-2 divide-white/10"
      >
        {options.map((option: Language | Theme) => (
          <Option
            key={String(option)}
            option={option}
            action={label === 'theme' ? setTheme : setLanguage}
          />
        ))}
      </ul>
    </details>
  )
}
export default Dropwdown
