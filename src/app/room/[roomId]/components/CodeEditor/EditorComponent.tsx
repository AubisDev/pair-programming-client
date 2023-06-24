import {Dispatch, SetStateAction, useContext, useState} from 'react'
import EditorLoader from '../EditorLoader'
import {EditorContext, EditorConfigContextType} from './context/editorContext'
import Editor from '@monaco-editor/react'

interface Props {
  value: string | undefined
  setValue: Dispatch<SetStateAction<string | undefined>>
}

const EditorComponent = ({value, setValue}: Props) => {
  const {language, theme, roomCode, setRoomCode} = useContext(
    EditorContext,
  ) as EditorConfigContextType

  const handleEditorChange = (value: string | undefined) => {
    setValue(value)
    handleChange('code', value)
  }

  const handleChange = (action: any, data: any) => {
    switch (action) {
      case 'code': {
        setRoomCode(data)
        break
      }
      default: {
        console.warn('case not handled!', action, data)
      }
    }
  }

  return (
    <Editor
      height="100%"
      width="100%"
      defaultValue="// Your code here"
      theme={theme as string}
      loading={<EditorLoader />}
      className="min-w-[400px] "
      language={language.value || 'javacript'}
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
