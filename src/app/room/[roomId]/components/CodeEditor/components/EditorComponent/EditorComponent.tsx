import {Dispatch, SetStateAction, useContext} from 'react'
import {EditorLoader} from './components'
import {
  EditorContext,
  EditorConfigContextType,
} from '../../../../context/editorContext'
import Editor from '@monaco-editor/react'

interface Props {
  value: string | undefined
  setValue: Dispatch<SetStateAction<string | undefined>>
}

export const EditorComponent = ({value, setValue}: Props) => {
  const {language, theme, roomCode} = useContext(
    EditorContext,
  ) as EditorConfigContextType

  const handleEditorChange = (value: string | undefined) => {
    setValue(value)
  }

  return (
    <div id="editor" className="h-full">
      <Editor
        height="100%"
        width="100%"
        defaultValue="// Your code here"
        theme={theme as string}
        loading={<EditorLoader />}
        className="min-w-[400px] "
        language={language.value || 'javacript'}
        value={roomCode}
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
    </div>
  )
}
export default EditorComponent
