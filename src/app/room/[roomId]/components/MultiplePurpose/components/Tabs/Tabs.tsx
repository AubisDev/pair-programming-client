import {Dispatch, SetStateAction} from 'react'
import {TabSection} from '../../models'

interface Props {
  currentSection: TabSection
  setCurrentSection: Dispatch<SetStateAction<TabSection>>
}

export const Tabs = ({currentSection, setCurrentSection}: Props) => {
  return (
    <nav className="h-auto rounded-t-lg rounded-b-none tabs tabs-boxed">
      {[
        TabSection.note,
        TabSection.console,
        TabSection.whiteboard,
        TabSection.testing,
      ].map((tabSection: TabSection) => (
        <a
          onClick={() => setCurrentSection(tabSection)}
          className={`tab rounded-t-lg rounded-b-none  capitalize ${
            currentSection === tabSection ? 'tab-active' : ''
          }`}
          key={tabSection}
        >
          {TabSection[tabSection]}
        </a>
      ))}
    </nav>
  )
}
export default Tabs
