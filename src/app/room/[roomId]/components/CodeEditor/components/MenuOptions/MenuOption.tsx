import {useContext} from 'react'
import {
  EditorContext,
  EditorConfigContextType,
} from '../../../../context/editorContext'
import Button from './components/Buttons/Button'
import Settings from './components/Settings/Settings'
import html2canvas from 'html2canvas'

interface Props {
  handleCompile: () => void
  handleRoomCodeSave: () => void
}

const MenuOption = ({handleCompile, handleRoomCodeSave}: Props) => {
  const {language} = useContext(EditorContext) as EditorConfigContextType

  const handleClick = async () => {
    await html2canvas(document.querySelector('') as HTMLElement).then(function (
      canvas,
    ) {
      canvas.style.zIndex = '100'
      canvas.style.borderWidth = '2px'
      canvas.style.borderColor = 'white'
      canvas.style.position = 'absolute'
      canvas.style.height = '90vh'
      document.body.appendChild(canvas)
    }),
      {}
  }

  return (
    <div className="flex flex-row w-full h-[8vh] justify-center items-center px-4 bg-gradient-to-r from-blue-800/30 to-purple-800/30">
      <h6 className="flex items-center flex-1 font-semibold text-white">
        Pair Programming
      </h6>
      <div className="flex flex-row items-center gap-x-2">
        <p className="text-sm">Current: [{language.name}]</p>
        <Settings />
        {/* <Button label="Share" action={handleRoomCodeSave} /> */}
        <Button label="Share" action={handleClick} />
        <Button label="Run" action={handleCompile} />
      </div>
    </div>
  )
}
export default MenuOption
