import {useState} from 'react'
import GearIcon from '../svg/GearIcon'
import LanguageMenu from './components/LanguageMenu/LanguageMenu'
import ThemeMenu from './components/ThemeMenu/ThemeMenu'

const Settings = () => {
  const [openSetting, setOpenSetting] = useState(false)

  return (
    <div className="relative p-2 rounded-md cursor-pointer border-white/20 hover:bg-white/10">
      <span onClick={() => setOpenSetting(!openSetting)}>
        <GearIcon />
      </span>
      {openSetting ? (
        <ul className="absolute right-0 z-50 text-sm border rounded-md min-w-56 menu bg-blue-950 border-gray-300/20">
          <details open={false}>
            <LanguageMenu />
          </details>
          <details open={false}>
            <ThemeMenu />
          </details>
        </ul>
      ) : null}
    </div>
  )
}
export default Settings
