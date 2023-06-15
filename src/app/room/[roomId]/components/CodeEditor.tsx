'use client'
import Editor, {DiffEditor, useMonaco, loader} from '@monaco-editor/react'
import EditorLoader from './EditorLoader'

const CodeEditor = () => {
  return (
    <Editor
      height="100vh"
      width="100%"
      defaultLanguage="javascript"
      defaultValue="// Your code here"
      theme="vs-dark"
      loading={<EditorLoader />}
      className="min-w-[400px]"
    />
  )
}
export default CodeEditor
