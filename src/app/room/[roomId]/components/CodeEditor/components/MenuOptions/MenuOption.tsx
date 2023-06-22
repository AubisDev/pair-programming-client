import Dropwdown from './Dropdrown/Dropwdown'
import Button from './Buttons/Button'

interface Props {
  onRunCode: () => void
}

const MenuOption = ({onRunCode}: Props) => {
  return (
    <div className="flex flex-row w-full h-[6vh] justify-center px-4 bg-gradient-to-r from-blue-800/30 to-purple-800/30">
      <h6 className="flex items-center flex-1 font-semibold text-white">
        Pair Programming
      </h6>
      <Dropwdown label="language" />
      <Dropwdown label="theme" />
      <Button label="Save Changes" action={() => {}} />
      <Button label="Run Code" action={onRunCode} />
    </div>
  )
}
export default MenuOption
