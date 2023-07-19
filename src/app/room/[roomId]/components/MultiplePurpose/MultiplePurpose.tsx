import {useState} from 'react'
import {Layout, Tabs, TabContent} from './components'
import {TabSection} from './models'

export const MultiplePurpose = (): React.JSX.Element => {
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
