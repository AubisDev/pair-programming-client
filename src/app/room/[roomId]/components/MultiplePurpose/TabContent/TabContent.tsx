import {TabSection} from '../MultiplePurpose'
import {Note, ConsoleOutput, Whiteboard, Testing} from './components'

interface Props {
  currentSection: TabSection
}

const TabContent = ({currentSection}: Props) => {
  return (
    <>
      {currentSection === TabSection.note ? (
        <Note></Note>
      ) : currentSection === TabSection.console ? (
        <ConsoleOutput />
      ) : currentSection === TabSection.whiteboard ? (
        <Whiteboard />
      ) : (
        <Testing />
      )}
    </>
  )
}
export default TabContent
