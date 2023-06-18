'use client'
import Editor, {DiffEditor, useMonaco, loader} from '@monaco-editor/react'
import EditorLoader from '../EditorLoader'
import {Dispatch, SetStateAction, useState} from 'react'
import {socket} from '@/app/utils/socket'
import {useParams} from 'next/navigation'
import MenuOption from './components/MenuOptions/MenuOption'

interface Props {
  content: string | undefined
  editorContent: string | undefined
  setEditorContent: Dispatch<SetStateAction<string | undefined>>
  onSaveClick: () => void
}

const CodeEditor = ({
  editorContent,
  setEditorContent,
  onSaveClick,
  content,
}: Props) => {
  const params = useParams()
  const [editorCustomizableOptions, setEditorCustomizableOptions] = useState({
    theme: 'vs-dark',
    language: 'javascript',
  })

  const handleChange = (e: string | undefined) => {
    setEditorContent(e)
  }
  return (
    <>
      <MenuOption />
      <Editor
        height="90vh"
        width="100%"
        defaultLanguage="javascript"
        defaultValue="// Your code here"
        theme="vs-dark"
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
    </>
  )
}
export default CodeEditor
