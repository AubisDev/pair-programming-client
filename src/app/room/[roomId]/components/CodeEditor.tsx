'use client'
import Editor, {DiffEditor, useMonaco, loader} from '@monaco-editor/react'
import EditorLoader from './EditorLoader'
import {Dispatch, SetStateAction} from 'react'
import {socket} from '@/app/utils/socket'
import {useParams} from 'next/navigation'

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

  const handleChange = (e: string | undefined) => {
    setEditorContent(e)
  }
  return (
    <>
      <button className="h-[10vh] w-32" onClick={() => onSaveClick()}>
        Save
      </button>
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
      />
    </>
  )
}
export default CodeEditor
