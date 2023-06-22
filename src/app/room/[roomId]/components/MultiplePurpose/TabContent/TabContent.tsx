import {TabSection} from '../MultiplePurpose'
import {Note, ConsoleOutput, Whiteboard, Testing} from './components'

interface Props {
  currentSection: TabSection
  runOutput: string
  editorContent: string | undefined
}

const TabContent = ({currentSection, runOutput, editorContent}: Props) => {
  return (
    <>
      {currentSection === TabSection.note ? (
        <Note></Note>
      ) : currentSection === TabSection.console ? (
        <ConsoleOutput runOutput={runOutput} editorContent={editorContent} />
      ) : currentSection === TabSection.whiteboard ? (
        <Whiteboard />
      ) : (
        <Testing />
      )}
    </>
  )
}
export default TabContent
