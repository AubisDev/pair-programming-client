import {TabSection} from '../../models'
import {Note, ConsoleOutput, Whiteboard, Testing} from './components'

interface Props {
  currentSection: TabSection
  editorContent: string | undefined
}

export const TabContent = ({currentSection, editorContent}: Props) => {
  return (
    <div className="h-[90%] w-full overflow-hidden">
      {currentSection === TabSection.note ? (
        <Note></Note>
      ) : currentSection === TabSection.console ? (
        <ConsoleOutput />
      ) : currentSection === TabSection.whiteboard ? (
        <Whiteboard />
      ) : (
        <Testing />
      )}
    </div>
  )
}
export default TabContent
