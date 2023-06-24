import {Theme} from '../../../../../lib/defineTheme'
import {Language} from '../utils/options'
import {Option} from './components/Option/Option'
import {v4 as uuidv4} from 'uuid'

interface Props {
  list: Language[] | string[]
  themeOptions?: string[]
}

const OptionsList = ({list, themeOptions}: Props) => {
  return (
    <>
      {list.map((option: Language | string, i) => (
        <Option
          key={uuidv4()}
          option={option}
          theme={themeOptions ? themeOptions[i] : ''}
        />
      ))}
    </>
  )
}
export default OptionsList
