import {useContext} from 'react'
import {
  EditorContext,
  EditorConfigContextType,
} from '../../context/editorContext'
import Button from './components/Buttons/Button'
import Settings from './components/Settings/Settings'

interface Props {
  handleCompile: () => void
  handleRoomCodeSave: () => void
}

const MenuOption = ({handleCompile, handleRoomCodeSave}: Props) => {
  const {language} = useContext(EditorContext) as EditorConfigContextType
  return (
    <div className="flex flex-row w-full h-[6vh] justify-center items-center px-4 bg-gradient-to-r from-blue-800/30 to-purple-800/30">
      <h6 className="flex items-center flex-1 font-semibold text-white">
        Pair Programming
      </h6>
      {/* <Dropwdown label="language" />
      <Dropwdown label="theme" /> */}
      <div className="flex flex-row items-center gap-x-2">
        <p className="text-sm">Current: [{language.name}]</p>
        <Settings />
        <Button label="Share" action={handleRoomCodeSave} />
        <Button label="Run" action={handleCompile} />
      </div>
    </div>
  )
}
export default MenuOption
