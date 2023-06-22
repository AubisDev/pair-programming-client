import {Language, Theme} from '../utils/options'
import {Option} from './components/Option/Option'
import {v4 as uuidv4} from 'uuid'

interface Props {
  list: Language[] | Theme[]
}

const OptionsList = ({list}: Props) => {
  return (
    <>
      {list.map((option: Language | Theme) => (
        <Option key={uuidv4()} option={option} />
      ))}
    </>
  )
}
export default OptionsList
