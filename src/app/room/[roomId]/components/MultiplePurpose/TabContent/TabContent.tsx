import {TabSection} from '../MultiplePurpose'
import {Note, ConsoleOutput, Whiteboard, Testing} from './components'

interface Props {
  currentSection: TabSection
  editorContent: string | undefined
}

const TabContent = ({currentSection, editorContent}: Props) => {
  return (
    <>
      {currentSection === TabSection.note ? (
        <Note></Note>
      ) : currentSection === TabSection.console ? (
        <ConsoleOutput editorContent={editorContent} />
      ) : currentSection === TabSection.whiteboard ? (
        <Whiteboard />
      ) : (
        <Testing />
      )}
    </>
  )
}
export default TabContent
