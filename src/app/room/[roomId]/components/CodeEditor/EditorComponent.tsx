import {useContext, useState} from 'react'
import EditorLoader from '../EditorLoader'
import {EditorContext, EditorConfigContextType} from './context/editorContext'
import Editor from '@monaco-editor/react'
interface Props {
  code: string | undefined
  handleChange: (action: any, data: any) => void
}

const EditorComponent = ({code, handleChange}: Props) => {
  const [value, setValue] = useState<string | undefined>(code || '')
  const {language, theme} = useContext(EditorContext) as EditorConfigContextType

  console.log({language, theme})

  const handleEditorChange = (value: string | undefined) => {
    setValue(value)
    handleChange('code', value)
  }

  return (
    <Editor
      height="100%"
      width="100%"
      defaultLanguage={language.value}
      defaultValue="// Your code here"
      theme={theme}
      loading={<EditorLoader />}
      className="min-w-[400px]"
      value={value}
      onChange={handleEditorChange}
      options={{
        autoIndent: 'full',
        fontLigatures: true,
        contextmenu: true,
        fontFamily: 'Consolas',
        fontSize: 13,
        lineHeight: 24,
        hideCursorInOverviewRuler: true,
        matchBrackets: 'always',
        minimap: {
          enabled: true,
        },
        scrollbar: {
          horizontalSliderSize: 4,
          verticalSliderSize: 18,
        },
        selectOnLineNumbers: true,
        roundedSelection: false,
        readOnly: false,
        cursorStyle: 'line',
        automaticLayout: true,
      }}
    />
  )
}
export default EditorComponent
