import Dropwdown from './Dropdrown/Dropwdown'
import {languageOptions, themeOptions} from './Dropdrown/utils/options'
import Button from './Dropdrown/Buttons/Button'

const MenuOption = () => {
  return (
    <div className="flex flex-row w-full h-[6vh] justify-center px-4 bg-gradient-to-r from-blue-800/30 to-purple-800/30">
      <h6 className="flex items-center flex-1 text-white font-semibold">
        Pair Programming{' '}
      </h6>
      <Dropwdown label="Language" options={languageOptions} />
      <Dropwdown label="Theme" options={themeOptions} />
      <Button label="Save Code" action={() => {}} />
      <Button label="Run Code" action={() => {}} />
    </div>
  )
}
export default MenuOption
