import {Dispatch, SetStateAction} from 'react'
import {TabSection} from '../MultiplePurpose'

interface Props {
  currentSection: TabSection
  setCurrentSection: Dispatch<SetStateAction<TabSection>>
}

const Tabs = ({currentSection, setCurrentSection}: Props) => {
  return (
    <nav className="tabs tabs-boxed h-auto rounded-t-lg rounded-b-none ">
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
