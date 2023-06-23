import {useContext, useState} from 'react'

import OptionsList from './OptionList/OptionsList'
import {
  EditorConfigContextType,
  EditorContext,
} from '../../../../context/editorContext'

interface Props {
  label: 'theme' | 'language'
}

const Dropwdown = ({label}: Props) => {
  const {themeOptions, languageOptions} = useContext(
    EditorContext,
  ) as EditorConfigContextType

  const [openOptionList, setOpenOptionList] = useState(false)

  return (
    <details className="dropdown z-[100] ">
      <summary
        className="mx-2 text-white capitalize bg-purple-900 border btn btn-sm border-white/30 outine-none hover:bg-purple-800 hover:outline-none "
        onClick={() => setOpenOptionList(true)}
      >
        {label}
      </summary>
      <ul
        role="list"
        className={`p-2 shadow menu ${
          openOptionList ? 'dropdown-content' : ''
        } bg-base-100 rounded-box w-auto divide-y-2 divide-white/10 max-h-[300px] max-w-52 overflow-y-scroll flex flex-row`}
      >
        {label === 'theme' ? (
          <OptionsList
            list={themeOptions}
            setOpenOptionList={setOpenOptionList}
          />
        ) : (
          <OptionsList
            list={languageOptions}
            setOpenOptionList={setOpenOptionList}
          />
        )}
      </ul>
    </details>
  )
}
export default Dropwdown
