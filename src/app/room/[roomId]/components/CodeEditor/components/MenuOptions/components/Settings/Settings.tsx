import {useState} from 'react'
import {GearIcon} from '../svg'
import {Menus} from './components'

export const Settings = () => {
  const [openSetting, setOpenSetting] = useState(false)

  return (
    <div className="relative p-2 rounded-md cursor-pointer border-white/20 hover:bg-white/10">
      <span onClick={() => setOpenSetting(!openSetting)}>
        <GearIcon />
      </span>
      {openSetting ? <Menus /> : null}
    </div>
  )
}
export default Settings
