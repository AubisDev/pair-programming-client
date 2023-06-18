import {useContext} from 'react'
import EditorLoader from '../EditorLoader'
import {EditorContext, EditorConfigContextType} from './context/editorContext'
import Editor, {DiffEditor, useMonaco, loader} from '@monaco-editor/react'

interface Props {
  content: string | undefined
  handleChange: (e: string | undefined) => void
}

const EditorComponent = ({content, handleChange}: Props) => {
  const {language, theme} = useContext(EditorContext) as EditorConfigContextType
  return (
    <Editor
      height="100%"
      width="100%"
      defaultLanguage={language}
      defaultValue="// Your code here"
      theme={theme}
      loading={<EditorLoader />}
      className="min-w-[400px]"
      value={content}
      onChange={e => handleChange(e)}
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
