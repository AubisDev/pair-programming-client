import {useState} from 'react'
import {Layout, Tabs, TabContent} from './components'
import {TabSection} from './models'

interface Props {
  editorContent: string | undefined
}

const MultiplePurpose = ({editorContent}: Props) => {
  const [currentSection, setCurrentSection] = useState<TabSection>(
    TabSection.note,
  )
  return (
    <Layout>
      <Tabs
        currentSection={currentSection}
        setCurrentSection={setCurrentSection}
      />
      <TabContent currentSection={currentSection} />
    </Layout>
  )
}
export default MultiplePurpose
