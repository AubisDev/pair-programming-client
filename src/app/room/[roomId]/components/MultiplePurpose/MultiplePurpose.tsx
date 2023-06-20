import {useState} from 'react'
import Layout from './Layout/Layout'
import Tabs from './Tabs/Tabs'
import TabContent from './TabContent/TabContent'

export enum TabSection {
  note,
  console,
  whiteboard,
  testing,
}

const MultiplePurpose = () => {
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
